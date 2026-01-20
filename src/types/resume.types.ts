export interface Experience {
  id: string;
  company: string;
  role: string;
  type?: string;
  period: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  isNested?: boolean;
  nestedRoles?: Omit<Experience, 'company' | 'isNested' | 'nestedRoles'>[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  status?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  period: string;
  association?: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  skillCategories: SkillCategory[];
}
