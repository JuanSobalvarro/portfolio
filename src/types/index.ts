
export type ID = string;

export type Status = 'completed' | 'in-progress' | 'planned';

export type Proficiency = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type TechCategory =
  | 'language'
  | 'framework'
  | 'tool'
  | 'database'
  | 'platform';

export type SectionId = 'about' | 'experience' | 'projects' | 'contact';

export interface Section {
  id: SectionId;
  label: string;
  description?: string;

  order?: number;
  visible?: boolean;
}


export interface ProjectLink {
  label: string;
  url: string;
  type?: 'github' | 'demo' | 'docs' | 'video' | 'other';
}

export interface ProjectImage {
  url: string;
  alt?: string;
  type?: 'hero' | 'gallery' | 'thumbnail';
}

export interface Project {
  id: ID;
  title: string;

  description: string;
  longDescription?: string;

  technologies: string[];
  tags?: string[];

  featured?: boolean;
  status: Status;

  images?: ProjectImage[];

  links?: ProjectLink[];

  highlights?: string[];

  year?: number;
}

export interface Technology {
  id: ID;
  name: string;
  category: TechCategory;

  proficiency: Proficiency;

  yearsOfExperience?: number;

  icon?: string;

  color?: string;
}


export interface SkillCategory {
  id: ID;
  name: string;

  color?: string;

  skills: Technology[];
}

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