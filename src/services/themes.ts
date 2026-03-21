
export function initializeTheme(): void {
  const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		document.documentElement.classList.toggle('dark', savedTheme === 'dark');
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.classList.toggle('dark', prefersDark);
	}
}   


// Toggle tailwindcss theme between light and dark modes, and save the preference in localStorage
export function toggleTheme(): void {
	const isDarkMode = document.documentElement.classList.toggle('dark');
	localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}