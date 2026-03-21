/* =========================
   🔑 SHARED TYPES
========================= */

export type ID = string;

export type Status = 'completed' | 'in-progress' | 'planned';

export type Proficiency = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type TechCategory =
  | 'language'
  | 'framework'
  | 'tool'
  | 'database'
  | 'platform';

/* =========================
   🧭 SECTIONS (NEW 🔥)
========================= */

export type SectionId = 'about' | 'projects' | 'contact';

export interface Section {
  id: SectionId;
  label: string;
  description?: string;

  // UI control (VERY useful later)
  order?: number;
  visible?: boolean;
}

/* =========================
   🚀 PROJECTS (IMPROVED)
========================= */

export interface Project {
  id: ID;
  title: string;
  description: string;
  longDescription?: string;

  technologies: string[]; // could evolve to Technology['id']
  tags?: string[];        // 🔥 filtering & grouping
  featured?: boolean;     // 🔥 UI highlight

  image?: string;

  links: {
    github?: string;
    demo?: string;
    website?: string;
  };

  highlights?: string[];

  status: Status;
}

/* =========================
   🧠 TECHNOLOGY
========================= */

export interface Technology {
  id: ID;
  name: string;
  category: TechCategory;

  proficiency: Proficiency;

  yearsOfExperience?: number;

  icon?: string;

  // 🔥 UI enhancements
  color?: string;
}

/* =========================
   🧩 SKILLS (IMPROVED)
========================= */

export interface SkillCategory {
  id: ID;
  name: string;

  // 🔥 UI styling hook
  color?: string;

  skills: Technology[];
}

/* =========================
   💼 EXPERIENCE
========================= */

export interface Experience {
  id: ID;

  title: string;
  company: string;

  location?: string;

  startDate: Date;
  endDate?: Date;

  isCurrent?: boolean;

  description: string;

  achievements?: string[];

  technologies?: string[];
}

/* =========================
   📬 CONTACT
========================= */

export interface ContactInfo {
  email: string;

  phone?: string;
  location?: string;

  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

/* =========================
   🧍 PORTFOLIO CONTENT
========================= */

export interface PortfolioContent {
  bio: string;
  specialization: string;
  message: string;
  ctaText: string;
}