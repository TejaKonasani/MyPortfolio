// ---------------------------------------------------------------------------
// All real content from the existing portfolio (carried over verbatim).
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Teja Maheswara Reddy',
  firstName: 'Teja',
  role: 'AI & Data Science Graduate',
  tagline: 'Full Stack Developer | AI Engineer',
  heroBio:
    'Building production-ready full-stack applications, AI-powered software, and scalable backend systems.',
  aboutBio:
    "I'm an AI and Data Science undergraduate at KL University with a strong passion for building full-stack products that solve real-world problems. I specialize in modern web technologies like Next.js, React, NestJS, and PostgreSQL, and I love turning ideas into production-ready platforms — from healthcare marketplaces to e-commerce systems. Alongside development, I bring hands-on experience in machine learning, having trained and fine-tuned models for real-world prediction tasks during my internship. I thrive on solo-building complex applications end-to-end, leveraging AI coding agents to move fast without compromising on quality or architecture. Beyond tech, I've led student initiatives and community service programs, which shaped my collaboration, leadership, and problem-solving abilities. I'm driven by curiosity and a constant urge to learn, build, and ship things that matter.",
  email: '2200080216.aids@gmail.com',
  phone: '+91 9059503227',
  github: 'https://github.com/TejaKonasani',
  // TODO: real LinkedIn profile URL — the existing site links to generic https://linkedin.com
  linkedin: 'https://linkedin.com',
  resumePath: '/resume/Teja_Konasani_Resume.pdf',
};

export const stats = [
  { value: '2+', label: 'Internships' },
  { value: '4+', label: 'Production Apps' },
  { value: '1+', label: 'Years Experience' },
];

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  link: string;
  initials: string;
  accent: 'lime' | 'sky' | 'pop';
}

export const projects: Project[] = [
  {
    title: 'MedSpaces',
    subtitle: 'Healthcare Space Marketplace',
    description:
      'Doctors ↔ clinics/hospitals marketplace for discovering and booking consultation spaces.',
    bullets: [
      'Doctors ↔ clinics/hospitals marketplace for discovering and booking consultation spaces.',
      'RBAC workflows for doctors, clinics, and admins across the platform.',
      'Doctor/clinic verification and listing-approval workflows for trusted marketplace listings.',
    ],
    tech: ['Next.js', 'React', 'Tailwind', 'Prisma', 'PostgreSQL', 'Vercel', 'Resend'],
    link: 'https://medspaces-platform.vercel.app/',
    initials: 'MS',
    accent: 'pop',
  },
  {
    title: 'Mill2Meal',
    subtitle: 'D2C Grocery E-commerce',
    description:
      'Full grocery e-commerce experience with product discovery, cart, checkout, OTP authentication, subscriptions, and order tracking.',
    bullets: [
      'Full grocery e-commerce experience with product discovery, cart, checkout, OTP authentication, subscriptions, and order tracking.',
      'Secure NestJS REST APIs with JWT authentication, RBAC, and Razorpay payment integration.',
      'Inventory management with pincode-based delivery logic for order fulfillment.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'Tailwind'],
    link: 'https://mill2meal.github.io/mill2meal-frontend/',
    initials: 'M2M',
    accent: 'lime',
  },
  {
    title: 'Zero Noise CEO OS',
    subtitle: 'AI Founder Performance Platform',
    description:
      'AI-powered founder platform for daily planning, deep-work tracking, capability scoring, coaching, and performance reviews.',
    bullets: [
      'AI-powered founder platform for daily planning, deep-work tracking, capability scoring, coaching, and performance reviews.',
      'Secure NestJS REST APIs with JWT authentication, Prisma, and PostgreSQL.',
      'Next.js dashboard using TanStack Query and React Hook Form with Gemini API-powered insights.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Supabase', 'Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://zero-noice-ceo-os.github.io/zero-noise-frontend/',
    initials: 'ZN',
    accent: 'sky',
  },
  {
    title: 'NuScreen',
    subtitle: 'Medical Screening Program Management Platform',
    description:
      'End-to-end healthcare platform for screening camps, beneficiary records, referrals, teleconsultations, and stakeholder operations.',
    bullets: [
      'End-to-end healthcare platform for screening camps, beneficiary records, referrals, teleconsultations, and stakeholder operations, with role-based Admin/Operations and User/Requester portals.',
      'Automated camp assignment based on geography, partner availability, capacity, compliance, and performance, with offline-first health data capture, Bluetooth medical-device integration, and AI-powered risk alerts.',
      'Subscription and payment management with Razorpay, quota management, invoices, analytics, and audit tracking.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Supabase', 'Next.js', 'Tailwind CSS', 'REST APIs', 'RBAC', 'Razorpay', 'AI'],
    link: 'https://clinquant-dusk-fdd924.netlify.app/',
    initials: 'NS',
    accent: 'lime',
  },
  {
    title: 'MedSpaces Tool',
    subtitle: 'Healthcare Platform & Expert Care Ecosystem',
    description:
      'Role-based healthcare platform connecting patients, healthcare professionals, care knowledge, programs, and enterprise stakeholders.',
    bullets: [
      'Role-based healthcare platform connecting patients, healthcare professionals, care knowledge, programs, and enterprise stakeholders, with secure OTP/JWT authentication and RBAC.',
      'HCP workspace for verified practitioners to manage profiles, patient records, Q&A, educational content, and care-program participation.',
      'Admin/Super Admin operations covering user management, expert verification, content review, Q&A moderation, programs, pathways, payments, compliance, notifications, audit logging, and secure healthcare data workflows.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Supabase', 'Next.js', 'Tailwind CSS', 'REST APIs', 'RBAC', 'JWT', 'TOTP', 'OTP'],
    link: 'https://medspaces-frontend-i2vgk0nke-teja-konasani-s-projects.vercel.app/',
    initials: 'MT',
    accent: 'sky',
  },
];

export const skillCategories = [
  { name: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C'] },
  { name: 'Frontend', skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { name: 'Backend', skills: ['Next.js', 'Node.js', 'NestJS', 'REST APIs'] },
  { name: 'Database', skills: ['PostgreSQL'] },
  { name: 'AI & Integrations', skills: ['Gemini API', 'Claude Code', 'AI Prompt Engineering', 'Ollama'] },
  { name: 'Tools', skills: ['Git', 'GitHub', 'Docker', 'Render', 'Vercel'] },
  { name: 'ML/AI', skills: ['Supervised/Unsupervised Learning', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { name: 'Deep Learning', skills: ['Neural Networks', 'TensorFlow'] },
];

export const experiences = [
  {
    label: 'INTERN',
    company: 'Nushift',
    role: 'Intern (On-Site)',
    period: 'June 2025 – Present',
    bullets: [
      'Solo-designed and built MedSpaces, a full-stack healthcare marketplace connecting doctors with clinics/hospitals, including RBAC dashboards, verification, and listing approval workflows.',
      'Solo-built Mill2Meal, a production-ready D2C grocery e-commerce platform with checkout, subscriptions, order tracking, and Razorpay integration.',
      'Used AI coding agents to accelerate full-stack delivery.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'FastAPI', 'Prisma', 'PostgreSQL', 'Vercel'],
  },
  {
    label: 'INTERN',
    company: 'Ascendsoft',
    role: 'Intern (Remote)',
    period: 'Feb 2025 – June 2025',
    bullets: [
      'Worked on Trading AI, contributing to ML model training and backend development.',
      'Trained/fine-tuned an ML model on historical trading data to improve predictions.',
      'Built backend APIs with FastAPI + PostgreSQL (SQLAlchemy).',
      'Used AI coding agents to speed up debugging.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Python', 'Machine Learning'],
  },
];

export const education = [
  {
    institution: 'KL University, Vijayawada',
    degree: 'B.Tech AI & Data Science',
    result: 'CGPA 9.2/10',
    year: 'Apr 2026',
  },
  {
    institution: 'Vignan Co-operative Junior College',
    degree: 'Intermediate MPC',
    result: '92.9%',
    year: 'Jun 2022',
  },
  {
    institution: "St. Joseph's High School",
    degree: 'SSC',
    result: '95%',
    year: 'Feb 2020',
  },
];

export const certifications = [
  { title: 'Salesforce Certified AI Associate', year: '2024' },
  { title: 'Python IBM Certified', year: '2023' },
];

export const achievements = [
  { title: 'Best NSS Volunteer, KL University', year: '2024–2025' },
  {
    title: 'Implementation of Machine Learning Techniques for Cloud Job Cost Prediction',
    year: 'Aug 2025–Present',
    type: 'Research (in progress)',
  },
];

// Marquee words — the real stack from the repo (uppercase, per design spec).
export const marqueeWords = [
  'REACT',
  'NEXT.JS',
  'NODE.JS',
  'NESTJS',
  'PYTHON',
  'TENSORFLOW',
  'SQL',
  'THREE.JS',
  'ML',
  'POSTGRESQL',
  'TYPESCRIPT',
  'TAILWIND',
  'FASTAPI',
  'DOCKER',
];

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Path', href: '#path' },
  { label: 'Contact', href: '#contact' },
];