export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyShort: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Contract';
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years: number;
    tag?: string;
    description?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Government System' | 'Database Architecture' | 'Enterprise Solution' | 'Web Applications';
  organization: string;
  period: string;
  impactScore?: string;
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  keyFeatures: string[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface DatabaseDemo {
  id: string;
  title: string;
  scenario: string;
  beforeQuery: string;
  afterQuery: string;
  technique: string;
  impact: string;
  latencyDrop: string;
}
