export enum CourseCategory {
  GENERAL_ARTS = 'General Arts',
  BUSINESS = 'Business',
  GENERAL_SCIENCE = 'General Science',
  HOME_ECONOMICS = 'Home Economics',
  VISUAL_ARTS = 'Visual Arts',
  AGRICULTURE = 'Agriculture',
  STEM = 'STEM' // Science, Technology, Engineering, and Mathematics
}

export interface School {
  id: string;
  name: string;
  location: string;
  region: string;
  description: string;
  courses: CourseCategory[];
  imageUrl?: string;
  website?: string;
}

export interface CategoryDetails {
  id: CourseCategory;
  name: string;
  description: string;
  color: string;
  iconName: string; // Using string names to map to Lucide icons dynamically if needed, or just for reference
  gradient: string;
}
