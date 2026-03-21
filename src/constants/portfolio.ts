import type { PortfolioContent, ContactInfo, Project, SkillCategory } from '@/types';


export const OWNER = {
  name: 'Juan Sobalvarro',
  title: 'Portfolio',
  role: 'Cybernetic Electronics Engineer & Software Developer',
};

export const PORTFOLIO_CONTENT: PortfolioContent = {
  bio: OWNER.role,
  specialization: 'ROBOTICS · SYSTEM ARCHITECTURE · FULL STACK',
  message:
    'Bridging hardware and software through efficient low-level execution and modern web interfaces.',
  ctaText: 'Explore My Work',
};

export const SECTIONS = [
  {
    id: 'about',
    label: 'About',
    description: 'Who I am and what I do',
    order: 1,
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'Things I’ve built',
    order: 2,
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Get in touch',
    order: 3,
  },
] as const;

export type SectionId = typeof SECTIONS[number]['id'];

/* =========================
   📬 CONTACT
========================= */

export const CONTACT_INFO: ContactInfo = {
  email: 'sobalvarrog.juans@gmail.com',
  github: 'https://github.com/JuanSobalvarro',
  linkedin: 'https://linkedin.com/in/juansobalvarro',
  twitter: 'https://twitter.com/juansobalvarro',
  website: 'https://portfolio.juso-software.com',
};

/* =========================
   🚀 PROJECTS (IMPROVED)
========================= */

export const PROJECTS: Project[] = [
  {
    id: 'robert',
    title: 'RobeRT Middleware',
    description: 'Middleware for controlling an ABB IRB 140T robotic arm.',
    longDescription:
      'C++ core with Python API, CI/CD pipeline with GitHub Actions and PyPI publishing.',
    technologies: ['C++', 'Python', 'RAPID', 'CI/CD'],
    tags: ['robotics', 'backend', 'systems'],
    featured: true,
    links: {
      github: 'https://github.com/JuanSobalvarro/RobeRT',
      demo: '#',
    },
    status: 'in-progress',
  },
  {
    id: 'etheria',
    title: 'Etheria',
    description: 'Neural networks on microcontrollers.',
    longDescription:
      'C++ framework with Python bindings and CUDA acceleration.',
    technologies: ['C++', 'Python', 'CUDA'],
    tags: ['ai', 'embedded', 'performance'],
    featured: true,
    links: {
      github: '#',
      demo: '#',
    },
    status: 'in-progress',
  },
  {
    id: 'roboforger',
    title: 'RoboForger',
    description: 'CAD → RAPID conversion tool.',
    longDescription:
      'Desktop app to generate RAPID code from CAD models.',
    technologies: ['Python', 'PySide6'],
    tags: ['robotics', 'desktop'],
    featured: false,
    links: {
      github: '#',
      demo: '#',
    },
    status: 'completed',
  },
  {
    id: 'asismed',
    title: 'AsisMed ULSA',
    description: 'Medical admin system.',
    longDescription:
      'Full-stack app for managing patient records.',
    technologies: ['Django', 'React', 'TypeScript'],
    tags: ['web', 'fullstack'],
    featured: false,
    links: {
      github: '#',
      demo: '#',
    },
    status: 'completed',
  },
];

/* =========================
   🧠 DERIVED DATA (VERY IMPORTANT 🔥)
========================= */

// Featured projects
export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);

// Group projects by status
export const PROJECTS_BY_STATUS = {
  completed: PROJECTS.filter(p => p.status === 'completed'),
  inProgress: PROJECTS.filter(p => p.status === 'in-progress'),
};

// Unique tech stack (for filters / UI)
export const ALL_TECH = Array.from(
  new Set(PROJECTS.flatMap(p => p.technologies))
);

export const SKILLS: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    color: 'text-blue-400',
    skills: [
      { id: 'cpp', name: 'C++', category: 'language', proficiency: 'advanced' },
      { id: 'python', name: 'Python', category: 'language', proficiency: 'advanced' },
      { id: 'ts', name: 'TypeScript', category: 'language', proficiency: 'advanced' },
      { id: 'rapid', name: 'RAPID', category: 'language', proficiency: 'intermediate' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    color: 'text-purple-400',
    skills: [
      { id: 'react', name: 'React', category: 'framework', proficiency: 'advanced' },
      { id: 'django', name: 'Django / DRF', category: 'framework', proficiency: 'advanced' },
      { id: 'pyside', name: 'PySide6', category: 'framework', proficiency: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    color: 'text-green-400',
    skills: [
      { id: 'git', name: 'Git & CI/CD', category: 'tool', proficiency: 'advanced' },
      { id: 'cuda', name: 'CUDA', category: 'tool', proficiency: 'intermediate' },
      { id: 'vite', name: 'Vite', category: 'tool', proficiency: 'advanced' },
    ],
  },
];