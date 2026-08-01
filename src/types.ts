export interface ServiceItem {
  id: string;
  title: string;
  category: 'Mechanical' | 'Electrical' | 'Plumbing' | 'Maintenance & Interiors';
  iconName: string;
  shortDesc: string;
  bulletPoints: string[];
  image: string;
  popular?: boolean;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  ctaText: string;
  stats: { label: string; value: string };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'MEP Services' | 'AMC & Maintenance' | 'Execution & Quality';
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyRole: string;
  sector: string;
  comment: string;
  rating: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Mechanical' | 'Electrical' | 'Plumbing' | 'Turnkey AMC';
  sector: 'Commercial' | 'Residential' | 'Industrial';
  location: string;
  completionYear: string;
  description: string;
  highlights: string[];
  image: string;
}
