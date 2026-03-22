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
  // {
  //   id: 'experience',
  //   label: 'Experience',
  //   description: 'My professional journey',
  //   order: 2,
  // },
  {
    id: 'projects',
    label: 'Projects',
    description: 'Things I have built',
    order: 3,
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Get in touch',
    order: 4,
  },
] as const;

export type SectionId = typeof SECTIONS[number]['id'];


export const CONTACT_INFO: ContactInfo = {
  email: 'sobalvarrog.juans@gmail.com',
  github: 'https://github.com/JuanSobalvarro',
  linkedin: 'https://www.linkedin.com/in/juan-sobalvarro/',
  twitter: 'https://twitter.com/juansobalvarro',
};


export const PROJECTS: Project[] = [
  {
    id: 'robert',
    title: 'RobeRT Middleware',

    description: 'Middleware for controlling ABB robotic arms.',
    longDescription:
      'C++ core with Python API, real-time control, and CI/CD pipeline for PyPI deployment.',

    technologies: ['C++', 'Python', 'RAPID', 'CI/CD'],
    tags: ['robotics', 'systems'],

    status: 'in-progress',
    featured: true,
    year: 2025,

    images: [
      { url: '/projects/robert/main.png', type: 'hero' },
      { url: '/projects/robert/1.png', type: 'gallery' },
      { url: '/projects/robert/2.png', type: 'gallery' },
    ],

    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/RobeRT', type: 'github' },
      { label: 'Docs', url: '#', type: 'docs' },
    ],

    highlights: [
      'Real-time robot communication',
      'Python bindings over C++ core',
      'CI/CD with GitHub Actions',
    ],
  },
  {
    id: 'roboforger',
    title: 'RoboForger',
    description: 'DXF/DWG to ABB RAPID code generator.',
    longDescription: 'A tool that converts 2D CAD files into executable RAPID code for ABB robotic arms. using PySide6 for the GUI. The project is designed to streamline the programming of robotic arms for manufacturing tasks.',
    technologies: ['Python', 'PySide6', 'RAPID'],
    tags: ['robotics', 'tools'],
    status: 'completed',
    featured: true,
    year: 2025,
    images: [
      { url: 'https://github.com/JuanSobalvarro/RoboForger/blob/main/docs/ss_v2.1.png?raw=true', type: 'hero' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/RoboForger', type: 'github' },
    ],
    highlights: [
      'CAD to RAPID conversion',
      'User-friendly PySide6 interface',
    ],
  },
  {
    id: 'asismed',
    title: 'AsisMed ULSA',
    description: 'Medical management system for ULSA.',
    longDescription: 'A comprehensive solution for managing medical records and patient data at ULSA. I worked as a lead full-stack developer, designing the database schema, implementing the backend API with Django, creating a user-friendly frontend interface, and deploying the application on a private network. The system is currently in use by the university clinic, streamlining operations and improving patient care.',
    technologies: ['Python', 'Django', 'ReactJS', 'PostgreSQL'],
    tags: ['healthcare'],
    status: 'completed',
    featured: true,
    year: 2024,
    images: [
      { url: '/projects/asismed/login.png', type: 'hero' },
      { url: '/projects/asismed/dashboard.png', type: 'gallery' },
      { url: '/projects/asismed/report.png', type: 'gallery' },
    ],
    links: [
      { label: 'Official Notes', url: 'https://ulsa.edu.ni/index.php/440-ulsa-oficializa-asismed-como-proyecto-con-potencial-de-transferencia-tecnologica-desarrollado-por-estudiantes-de-ice', type: 'other' },
      { label: 'Facebook', url: 'https://www.facebook.com/share/p/18T38EQdom/', type: 'other' },
      { label: 'Instagram', url: 'https://www.instagram.com/p/DVUUwNmF3lG/', type: 'other' },
    ],
    highlights: [
      'User-friendly interface for medical staff',
      'Secure database management',
    ],
  },
  {
    id: 'ranking',
    title: 'Table Tennis Ranking System',
    description: 'A ranking system for university table tennis players.',
    longDescription: 'A web application that allows university table tennis players to track their rankings and match history. I developed the backend using Django, created a responsive frontend with ReactJS, and implemented features such as player profiles, match recording, and dynamic ranking calculations based on match outcomes.',
    technologies: ['Python', 'Django', 'ReactJS', 'PostgreSQL'],
    tags: ['sports', 'webapp'],
    status: 'completed',
    featured: false,
    year: 2024,
    images: [
      { url: '/projects/ttranking/home.png', type: 'hero' },
      { url: '/projects/ttranking/profile.png', type: 'gallery' },
      { url: '/projects/ttranking/ranking.png', type: 'gallery' },
      { url: '/projects/ttranking/top.png', type: 'gallery' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/tt-ranking-system' },
    ]
  },
  {
    id: 'sudoku',
    title: 'Sudoku Qt',
    description: 'A Sudoku game built with Qt5.',
    longDescription: 'A desktop application that I created using C++ and the Qt5 framework when I was first learning C++. The game features simple mechanics to generate and solve a Sudoku puzzle.',
    technologies: ['C++', 'Qt5'],
    tags: ['games', 'desktop'],
    status: 'completed',
    featured: false,
    year: 2024,
    images: [
      { url: '/projects/sudoku/sudoku.png', type: 'hero' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/SudokuQt' },
    ]
  },
  {
    id: 'ecollecta',
    title: 'Ecollecta',
    description: 'A static website for university species collection with physical QR on specimens.',
    longDescription: 'Minimal version of a design of an App where i simplified the data collection processs for the univsity species collection. The website is static and serves as a digital catalog for the specimens, which are tagged with QR codes that link to their respective pdfs on the site.',
    technologies: ['ReactTS', 'Vite'],
    tags: ['webapp', 'nature'],
    status: 'in-progress',
    featured: true,
    year: 2026,
    images: [
      { url: '/projects/ecollecta/home.png', type: 'hero' },
      { url: '/projects/ecollecta/archive.png', type: 'gallery' },
      { url: '/projects/ecollecta/pdf.png', type: 'gallery' },
      { url: '/projects/ecollecta/qr.png', type: 'gallery' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Programming-Club-ULSA/ecollecta-minimal' },
      { label: 'Live Site', url: 'https://programming-club-ulsa.github.io/ecollecta-minimal/' },
    ]
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);

export const PROJECTS_BY_STATUS = {
  completed: PROJECTS.filter(p => p.status === 'completed'),
  inProgress: PROJECTS.filter(p => p.status === 'in-progress'),
};

export const ALL_TAGS = Array.from(
  new Set(PROJECTS.flatMap(p => p.tags ?? []))
);

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