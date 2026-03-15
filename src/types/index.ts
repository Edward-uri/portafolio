export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  platform?: 'web' | 'mobile' | 'backend'; 
  repoUrl?: string;
  demoUrl?: string;
  impact?: string;
}


export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  title: string;
  description: string;
  tag: string;
  url: string;
}
