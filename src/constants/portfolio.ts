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

    description: 'Middleware for controlling ABB robotic arms. My graduation project :)',
    longDescription:
      'C++ core with Python API, real-time control, and CI/CD pipeline for PyPI deployment. This allows us to administrate and control an ABB IRB 140 robotic arm.',

    technologies: ['C++', 'Python', 'RAPID', 'CI/CD'],
    tags: ['robotics', 'systems'],

    status: 'in-progress',
    featured: true,
    year: 2026,

    images: [
      // { url: '/projects/robert/main.png', type: 'hero' },
      // { url: '/projects/robert/1.png', type: 'gallery' },
      // { url: '/projects/robert/2.png', type: 'gallery' },
    ],

    links: [
      { label: 'GitHub Middleware', url: 'https://github.com/JuanSobalvarro/RobeRT', type: 'github' },
      { label: 'GitHub API', url: 'https://github.com/JuanSobalvarro/robert-py', type: 'github' },
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
    technologies: ['Docker Compose', 'Python', 'Django', 'ReactJS', 'PostgreSQL'],
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
    technologies: ['ReactTS', 'Github Pages'],
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
  },
  {
    id: 'parametric',
    title: 'ParametricSim',
    description: 'My first project: a parametric equation drawer built with python, turtle and tkinter.',
    longDescription: 'A simple desktop application that allows users to input parametric equations and visualize them using Python turtle graphics. The app features a basic GUI built with Tkinter, where users can enter their equations and see the resulting graph. Do not judge this one too hard, it was my first project and I was just learning how to code :)',
    technologies: ['Python', 'Tkinter', 'Turtle'],
    tags: ['math', 'desktop'],
    status: 'completed',
    featured: false,
    year: 2022,
    images: [
      { url: '/projects/parametric/parametricsim.gif', type: 'hero' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/juansobalvarro/parametricsim' },
    ]
  },
  {
    id: 'consultores',
    title: 'Sobalvarro Consultores',
    description: 'A website for a construction supervision company in San Pedro Sula, Honduras.',
    longDescription: 'A simple website for a construction supervision company in San Pedro Sula, Honduras. The site features a modern design and is optimized for both desktop and mobile devices.',
    technologies: ['ReactTS', 'Github Actions'],
    tags: ['web', 'construction'],
    status: 'completed',
    featured: true,
    year: 2023,
    images: [
      { url: '/projects/consultores/home.png', type: 'hero' },
      { url: '/projects/consultores/gallery.png', type: 'gallery' },
    ],
    links: [
      { label: 'Website', url: 'https://www.sobalvarroconsultores.com/' },
    ]
  },
  {
    id: 'cavipy',
    title: 'Cavipy',
    description: 'A small python tool to demonstrate the use of Monte Carlo method for cavity volume estimation.',
    longDescription: 'A small python tool to demonstrate the use of Monte Carlo method for cavity volume estimation. The tool generates a 3D grid of points and checks which ones are inside the cavity, then uses the ratio of points inside to total points to estimate the volume.',
    technologies: ['Python', 'Vispy', 'NumPy'],
    tags: ['math', 'simulation'],
    status: 'completed',
    featured: false,
    year: 2025,
    images: [
      { url: '/projects/cavipy/cavipy.png', type: 'hero' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/Cavipy' },
    ]
  },
  {
    id: 'domotic',
    title: 'Domotic System',
    description: 'A power monitoring and control system for power consumption devices in a household.',
    longDescription: 'A power monitoring and control system for power consumption devices in a household. The system consists of a ESP32 that collects data from a power sensor and provides a web interface to monitor and control the devices (relays).',
    technologies: ['Python', 'ESP32', 'Flask'],
    tags: ['iot', 'home'],
    status: 'completed',
    featured: false,
    year: 2025,
    images: [
      { url: '/projects/domotic/dashboard.jpeg', type: 'hero' },
    ],
  },
  {
    id: 'seam',
    title: 'SEAM - Custom ERP',
    description: 'A custom ERP system sold for a local business.',
    longDescription: 'A custom ERP system for a local business. The system includes modules for inventory management, finance, and report generation. I developed the backend using Django and created a responsive frontend with ReactTS deploying it with tauri for a local desktop app.',
    technologies: ['DRF', 'ReactTS', 'PostgreSQL','Tauri', 'Python', 'INNO Setup'],
    tags: ['erp', 'business'],
    status: 'completed',
    featured: false,
    year: 2025,
    images: [
      { url: '/projects/seam/login.png', type: 'hero' },
      { url: '/projects/seam/dashboard.png', type: 'gallery' },
      { url: '/projects/seam/inventory.png', type: 'gallery' },
    ]
  },
  {
    id: 'etheria',
    title: 'Etheria',
    description: 'Proof of Concept neural network framework for Edge AI applications.',
    longDescription: 'Etheria is a lightweight neural network framework designed for efficient deployment of AI models on edge devices. Using CUDA for GPU acceleration, tensors, c++ and pybind11 for Python bindings, and building entirely from scratch math operations.',
    technologies: ['C++', 'CUDA', 'Pybind11', 'Python'],
    tags: ['ai', 'edge'],
    status: 'in-progress',
    featured: true,
    year: 2025,
    images: [
      { url: '/projects/etheria/performance.jpeg', type: 'hero' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/etheria' },
    ],
    highlights: [
      'Custom tensor library',
      'CUDA-accelerated operations',
      'Python bindings with Pybind11',
    ],
  },
  {
    id: 'armonic',
    title: 'ArmonicApp',
    description: 'Harmonic analysis and visualization tool for sounds.',
    longDescription: 'ArmonicApp is a desktop application that allows users to analyze and visualize the harmonic content of audio files. A Python version is being rewritten with Qt and C++, the app provides an intuitive interface for opening an audio buffer, performing Fourier analysis, and displaying the resulting frequency spectrum in a graph.',
    technologies: ['C++', 'Qt', 'FFT', 'Python'],
    tags: ['audio', 'analysis'],
    status: 'in-progress',
    featured: false,
    year: 2023,
    images: [
    ],
    links: [
      { label: 'GitHub Python', url: 'https://github.com/JuanSobalvarro/armonicapp' },
      { label: 'GitHub C++', url: 'https://github.com/JuanSobalvarro/armonicappcpp' },
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