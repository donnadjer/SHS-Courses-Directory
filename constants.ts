import { CourseCategory, School, CategoryDetails } from './types';

export const CATEGORIES: CategoryDetails[] = [
  {
    id: CourseCategory.GENERAL_SCIENCE,
    name: 'General Science',
    description: 'Physics, Chemistry, Biology, and Elective Math.',
    color: 'text-emerald-600',
    gradient: 'from-emerald-50 to-emerald-100 border-emerald-200',
    iconName: 'FlaskConical'
  },
  {
    id: CourseCategory.GENERAL_ARTS,
    name: 'General Arts',
    description: 'History, Geography, Economics, Government, Literature.',
    color: 'text-orange-600',
    gradient: 'from-orange-50 to-orange-100 border-orange-200',
    iconName: 'BookOpen'
  },
  {
    id: CourseCategory.BUSINESS,
    name: 'Business',
    description: 'Accounting, Business Management, Costing, Economics.',
    color: 'text-blue-600',
    gradient: 'from-blue-50 to-blue-100 border-blue-200',
    iconName: 'Briefcase'
  },
  {
    id: CourseCategory.STEM,
    name: 'STEM',
    description: 'Robotics, Engineering Science, Computing, Aviation.',
    color: 'text-indigo-600',
    gradient: 'from-indigo-50 to-indigo-100 border-indigo-200',
    iconName: 'Cpu'
  },
  {
    id: CourseCategory.VISUAL_ARTS,
    name: 'Visual Arts',
    description: 'GKA, Graphic Design, Textiles, Sculpture, Leatherwork.',
    color: 'text-purple-600',
    gradient: 'from-purple-50 to-purple-100 border-purple-200',
    iconName: 'Palette'
  },
  {
    id: CourseCategory.HOME_ECONOMICS,
    name: 'Home Economics',
    description: 'Food & Nutrition, Management in Living, Clothing & Textiles.',
    color: 'text-rose-600',
    gradient: 'from-rose-50 to-rose-100 border-rose-200',
    iconName: 'ChefHat'
  },
  {
    id: CourseCategory.AGRICULTURE,
    name: 'Agriculture',
    description: 'General Agriculture, Crop Husbandry, Animal Husbandry.',
    color: 'text-lime-700',
    gradient: 'from-lime-50 to-lime-100 border-lime-200',
    iconName: 'Sprout'
  },
];

export const INITIAL_SCHOOLS: School[] = [
  {
    id: '1',
    name: 'Presbyterian Boys\' Secondary School (PRESEC)',
    location: 'Legon, Accra',
    region: 'Greater Accra',
    description: 'One of the most prestigious boys\' schools in Ghana, known for its dominance in the National Science and Maths Quiz.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.STEM],
    imageUrl: 'https://picsum.photos/seed/presec/800/600'
  },
  {
    id: '2',
    name: 'Achimota School',
    location: 'Achimota, Accra',
    region: 'Greater Accra',
    description: 'A co-educational boarding school founded in 1924, known for its rich history and producing many national leaders.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.HOME_ECONOMICS, CourseCategory.VISUAL_ARTS, CourseCategory.AGRICULTURE, CourseCategory.STEM],
    imageUrl: 'https://picsum.photos/seed/achimota/800/600'
  },
  {
    id: '3',
    name: 'Wesley Girls\' High School',
    location: 'Cape Coast',
    region: 'Central',
    description: 'A premier educational institution for girls, renowned for academic excellence and discipline.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.HOME_ECONOMICS],
    imageUrl: 'https://picsum.photos/seed/weygeyt/800/600'
  },
  {
    id: '4',
    name: 'Prempeh College',
    location: 'Kumasi',
    region: 'Ashanti',
    description: 'A leading boys\' secondary school in Kumasi, founded by the Asantehene and the Methodist Church.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.AGRICULTURE],
    imageUrl: 'https://picsum.photos/seed/prempeh/800/600'
  },
  {
    id: '5',
    name: 'Holy Child School',
    location: 'Cape Coast',
    region: 'Central',
    description: 'An all-female second-cycle institution in Cape Coast, known for high academic standards.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.HOME_ECONOMICS, CourseCategory.VISUAL_ARTS],
    imageUrl: 'https://picsum.photos/seed/holychild/800/600'
  },
  {
    id: '6',
    name: 'Opoku Ware School',
    location: 'Kumasi',
    region: 'Ashanti',
    description: 'An all-boys high school in Santasi, Kumasi, known as OWASS.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.STEM],
    imageUrl: 'https://picsum.photos/seed/owass/800/600'
  },
  {
    id: '7',
    name: 'Aburi Girls\' Senior High School',
    location: 'Aburi',
    region: 'Eastern',
    description: 'A Presbyterian all-girls\' senior high boarding school located south of Aburi in the Eastern Region.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.HOME_ECONOMICS, CourseCategory.VISUAL_ARTS],
    imageUrl: 'https://picsum.photos/seed/aburi/800/600'
  },
  {
    id: '8',
    name: 'Mfantsipim School',
    location: 'Cape Coast',
    region: 'Central',
    description: 'The first secondary school established in the Gold Coast, known as "The School".',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.VISUAL_ARTS],
    imageUrl: 'https://picsum.photos/seed/botwe/800/600'
  },
  {
    id: '9',
    name: 'Accra Academy',
    location: 'Bubuashie, Accra',
    region: 'Greater Accra',
    description: 'The first private academy in Ghana to be established, now a public boys\' school.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.AGRICULTURE, CourseCategory.VISUAL_ARTS],
    imageUrl: 'https://picsum.photos/seed/bleoo/800/600'
  },
   {
    id: '10',
    name: 'St. Peter\'s Senior High School',
    location: 'Nkwatia Kwahu',
    region: 'Eastern',
    description: 'A Roman Catholic boys\' senior high school known for its excellence in science and mathematics.',
    courses: [CourseCategory.GENERAL_SCIENCE, CourseCategory.GENERAL_ARTS, CourseCategory.BUSINESS, CourseCategory.VISUAL_ARTS],
    imageUrl: 'https://picsum.photos/seed/persco/800/600'
  }
];

export const REGIONS = [
  "Ahafo", "Ashanti", "Bono", "Bono East", "Central", "Eastern",
  "Greater Accra", "North East", "Northern", "Oti", "Savannah",
  "Upper East", "Upper West", "Volta", "Western", "Western North"
];
