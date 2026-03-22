import type { PortfolioContent, ContactInfo, Project, SkillCategory } from '@/types';

export const OWNER = {
  name: 'Juan Sobalvarro',
  title: 'Portfolio',
  role: 'Cybernetic Electronics Engineer & Software Developer',
};

export const PORTFOLIO_CONTENT: PortfolioContent = {
  bio: OWNER.role,
  specialization: 'ROBOTICS · EMBEDDED SYSTEMS · HIGH-PERFORMANCE SOFTWARE',
  message:
    'I design and build high-performance systems at the intersection of robotics, embedded systems, and software architecture. My work focuses on real-time communication, efficient computation, and reliability, from low-level C++ robotic control to scalable backend systems. I follow engineering standards such as IEEE 830-1998, UML-based design, Agile methodologies, and clean coding practices to deliver robust and maintainable solutions.',
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
    description: 'Real-time middleware for controlling ABB robotic arms.',
    longDescription:
      'A client-server middleware for ABB robotic arms built with a high-performance C++ core. Uses raw TCP sockets for robot communication and ZeroMQ for messaging between services. Achieves <100ms command latency with a queued execution model that blocks RAPID execution for deterministic behavior. Includes multithreaded communication, synchronization, and industrial-oriented error handling. On disconnection, the robot safely returns to a zero position and resets to listen for new clients.',
    technologies: ['C++', 'Python', 'RAPID', 'ZeroMQ', 'TCP/IP'],
    tags: ['robotics', 'systems', 'embedded'],
    status: 'in-progress',
    featured: true,
    year: 2026,
    images: [],
    links: [
      { label: 'GitHub Middleware', url: 'https://github.com/JuanSobalvarro/RobeRT', type: 'github' },
      { label: 'GitHub API', url: 'https://github.com/JuanSobalvarro/robert-py', type: 'github' },
    ],
    highlights: [
      '<100ms command latency (network + processing)',
      'Client-server architecture (TCP + ZeroMQ)',
      'Thread-safe command queue with deterministic execution',
      'Failure handling with safe robot reset strategy',
      'Multithreaded communication and synchronization',
    ],
  },

  {
    id: 'roboforger',
    title: 'RoboForger',
    description: 'DXF/DWG to ABB RAPID code generator.',
    longDescription:
      'A desktop application that converts CAD files into executable RAPID programs for ABB robots. Reduced manual programming time from 2–3 hours to 5–15 minutes by automating path generation and code structure. Designed for practical industrial workflows with a PySide6 interface.',
    technologies: ['Python', 'PySide6', 'RAPID'],
    tags: ['robotics', 'automation'],
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
      'Reduced programming time from hours to minutes',
      'Automated CAD → RAPID pipeline',
      'Industrial-oriented desktop interface',
    ],
  },

  {
    id: 'asismed',
    title: 'AsisMed ULSA',
    description: 'Medical management system used in a university clinic.',
    longDescription:
      'A full-stack medical management system developed by a team of 5 developers where I led backend architecture and system design. Built with Django REST Framework and React, following Agile methodologies with sprint-based development across multiple courses. Reduced report generation from hours to minutes and is currently deployed in a clinical environment. Designed to scale for multi-user usage within a clinic.',
    technologies: ['Docker', 'Python', 'Django', 'React', 'PostgreSQL'],
    tags: ['healthcare', 'backend'],
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
    ],
    highlights: [
      'Reduced reporting time from hours to minutes',
      'Led backend architecture in 5-person team',
      'REST API with Django REST Framework',
      'Agile development (sprints, iterative delivery)',
      'Deployed and actively used system',
    ],
  },
  
  {
    id: 'ecollecta',
    title: 'Ecollecta',
    description: 'Digital catalog for university species collection.',
    longDescription:
      'A static web platform that digitizes a university species collection using QR codes. Currently deployed with ~30 species and designed to support ~1500 users. Focused on accessibility, simplicity, and scalable static delivery.',
    technologies: ['React', 'TypeScript', 'GitHub Pages'],
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
    id: 'consultores',
    title: 'Sobalvarro Consultores',
    description: 'Corporate website for a construction company.',
    longDescription:
      'A responsive website built for a construction supervision company. Focused on performance, accessibility, and modern UI across devices.',
    technologies: ['React', 'TypeScript', 'GitHub Actions'],
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
    id: 'etheria',
    title: 'Etheria',
    description: 'Custom neural network framework for edge systems.',
    longDescription:
      'A proof-of-concept neural network framework built from scratch in C++ with CUDA support. Implements custom tensors, CPU/GPU separation, and full backpropagation using stochastic gradient descent. Focused on memory management, performance tradeoffs, and low-level computation design.',
    technologies: ['C++', 'CUDA', 'Pybind11', 'Python'],
    tags: ['ai', 'systems'],
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
      'Custom tensor implementation',
      'CPU/GPU memory separation',
      'Backpropagation with SGD',
      'Exploration of performance tradeoffs',
    ],
  },

  {
    id: 'pingtrace',
    title: 'PingTrace',
    description: 'Network latency visualization tool.',
    longDescription:
      'A command line tool that can perform ping and traceroute operations to visualize network latency and path. Built entirely in C and compiled for windows. Project for my university networks course, focused on low-level network programming and system calls.',
    technologies: ['C', 'WinSock', 'CMake'],
    tags: ['network', 'visualization'],
    status: 'completed',
    featured: false,
    year: 2023,
    images: [
      { url: '/projects/pingtrace/ping.png', type: 'hero' },
      { url: '/projects/pingtrace/packet.png', type: 'gallery' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/JuanSobalvarro/PingTrace' },
    ]
  },

  {
    id: 'seam',
    title: 'SEAM - Custom ERP',
    description: 'Custom ERP system for business operations.',
    longDescription:
      'A custom ERP system developed and sold to a local distributor, used by ~10 users. Includes inventory, finance, and reporting modules. Built with Django and React and deployed as a desktop application using Tauri.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Tauri', 'Python'],
    tags: ['erp', 'business'],
    status: 'completed',
    featured: false,
    year: 2025,
    images: [
      { url: '/projects/seam/login.png', type: 'hero' },
    ],
    highlights: [
      'Commercially deployed system',
      'Used in real business operations',
      'Adapted to client infrastructure constraints',
    ],
  },

  {
    id: 'armonic',
    title: 'ArmonicApp',
    description: 'Harmonic analysis and visualization tool.',
    longDescription:
      'A desktop application for analyzing audio signals using Fourier transforms. Provides visualization of frequency spectra and is being developed in both Python and C++ versions.',
    technologies: ['C++', 'Qt', 'FFT', 'Python'],
    tags: ['audio', 'analysis'],
    status: 'in-progress',
    featured: false,
    year: 2023,
    images: [],
    links: [
      { label: 'GitHub Python', url: 'https://github.com/JuanSobalvarro/armonicapp' },
      { label: 'GitHub C++', url: 'https://github.com/JuanSobalvarro/armonicappcpp' },
    ]
  },

  {
    id: 'ranking',
    title: 'Table Tennis Ranking System',
    description: 'Ranking system for university players.',
    longDescription:
      'A web platform for managing player rankings, match history, and statistics. Built with Django and React, implementing dynamic ranking calculations and real-time updates based on match outcomes.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
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
    id: 'parametric',
    title: 'ParametricSim',
    description: 'Parametric equation visualizer.',
    longDescription:
      'A desktop tool for visualizing parametric equations using Python turtle graphics. Early project exploring mathematical visualization and GUI development.',
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
    id: 'sudoku',
    title: 'Sudoku Qt',
    description: 'Sudoku game built with Qt.',
    longDescription:
      'A desktop application developed in C++ using Qt, implementing puzzle generation and solving logic. Early project focused on object-oriented design and GUI architecture.',
    technologies: ['C++', 'Qt'],
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
    id: 'cavipy',
    title: 'Cavipy',
    description: 'Monte Carlo cavity volume estimator.',
    longDescription:
      'A Python-based simulation tool that estimates cavity volumes using Monte Carlo methods. Demonstrates probabilistic modeling and 3D spatial computation.',
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
    description: 'Embedded IoT system for power monitoring.',
    longDescription:
      'An embedded system using ESP32 for real-time power monitoring and control. Samples data every 2 seconds and applies averaging to reduce noise and prevent database overload. Provides a web interface for monitoring and device control.',
    technologies: ['Python', 'ESP32', 'Flask'],
    tags: ['iot', 'embedded'],
    status: 'completed',
    featured: false,
    year: 2025,
    images: [
      { url: '/projects/domotic/dashboard.jpeg', type: 'hero' },
    ],
    highlights: [
      'Real-time data acquisition',
      'Noise reduction via averaging strategy',
      'Efficient sampling to protect backend systems',
    ],
  },
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
      { id: 'python', name: 'Python (clean architecture, APIs)', category: 'language', proficiency: 'advanced' },
      { id: 'cpp', name: 'C/C++ (systems, memory, performance)', category: 'language', proficiency: 'intermediate' },
      { id: 'ts', name: 'TypeScript', category: 'language', proficiency: 'intermediate' },
      { id: 'bash', name: 'Bash Scripting', category: 'language', proficiency: 'intermediate' },
      { id: 'rapid', name: 'ABB RAPID', category: 'language', proficiency: 'intermediate' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    color: 'text-purple-400',
    skills: [
      { id: 'django', name: 'Django / DRF (REST APIs)', category: 'framework', proficiency: 'advanced' },
      { id: 'qt', name: 'Qt / PySide6', category: 'framework', proficiency: 'intermediate' },
      { id: 'react', name: 'React / Vite', category: 'framework', proficiency: 'intermediate' },
      { id: 'platformio', name: 'PlatformIO (MCU development)', category: 'framework', proficiency: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Infrastructure',
    color: 'text-green-400',
    skills: [
      { id: 'git', name: 'Git & CI/CD', category: 'tool', proficiency: 'advanced' },
      { id: 'docker', name: 'Docker', category: 'tool', proficiency: 'intermediate' },
      { id: 'cmake', name: 'CMake', category: 'tool', proficiency: 'intermediate' },
      { id: 'linux', name: 'Linux (Ubuntu, Debian)', category: 'tool', proficiency: 'intermediate' },
      { id: 'nginx', name: 'Nginx', category: 'tool', proficiency: 'intermediate' },
      { id: 'gcp', name: 'Google Cloud Platform', category: 'tool', proficiency: 'intermediate' },
      { id: 'cloudflare', name: 'Cloudflare', category: 'tool', proficiency: 'intermediate' },
      { id: 'cuda', name: 'CUDA', category: 'tool', proficiency: 'beginner' },
      { id: 'tauri', name: 'Tauri', category: 'tool', proficiency: 'beginner' },
      { id: 'inno', name: 'Inno Setup', category: 'tool', proficiency: 'beginner' },
    ],
  },
];