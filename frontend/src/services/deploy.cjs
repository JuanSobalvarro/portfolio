const { execSync } = require("child_process");

const repoToken = process.env.VITE_REPO_ACCESS_TOKEN;
if (!repoToken) {
  console.error("❌ ERROR: Missing VITE_REPO_TOKEN. Set it in your environment.");
  process.exit(1);
}

const repoUrl = `https://JuanSobalvarro:${repoToken}@github.com/JuanSobalvarro/portfolio.git`;

console.log("🚀 Deploying to GitHub Pages...");
execSync(`gh-pages -d dist --repo "${repoUrl}"`, { stdio: "inherit" });

