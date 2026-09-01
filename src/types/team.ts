export interface TeamMemberSocials {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  github?: string;
  email?: string;
}

export interface TeamExperience {
  role: string;
  company: string;
  period: string;
  desc: string;
}

export interface TeamMemberDetails {
  overview?: string;
  experienceYears?: string;
  completedProjects?: string;
  education?: string[];
  keyResponsibilities?: string[];
  experiences?: TeamExperience[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  phone?: string;
  email?: string;
  location?: string;
  experience?: string;
  skills: string[];
  socials: TeamMemberSocials;
  details?: TeamMemberDetails;
}
