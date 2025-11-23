export type Category = 'all' | 'ml' | 'web' | 'other';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  techStack: string[];
  category: Category;
  image: string;
  link?: string;
  stats?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string; // Using string identifiers for Lucide icons
  category: 'tech' | 'soft';
}