// ---------------------------------------------------------------------------
// Verified Profile & Portfolio Data
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Konasani Teja',
  fullName: 'KONASANI TEJA MAHESWARA REDDY',
  brandName: 'KONASANI TEJA',
  firstName: 'TEJA',
  role: 'Founding AI Engineer',
  tagline: 'Founding AI Engineer',
  footerTagline: 'Building intelligent systems for a smarter, more connected world.',
  heroBio:
    'I engineer production-grade AI applications, full-stack platforms, and scalable backend systems that transform complex ideas into reliable, intelligent products.',
  aboutBio:
    "I'm a Founding AI Engineer at Nushift Technologies, a startup where I build healthcare operating systems and education platforms. My work centers on connecting these systems with next-generation technologies, so that complex, multi-step workflows become faster, more reliable, and easier for professionals and learners to use. I design and develop AI agents and LLM-powered applications, including RAG pipelines for grounded, accurate responses, tool calling and MCP integrations that connect agents to real systems, and automated agent workflows that remove repetitive manual work. I pair this with full-stack development using Python, FastAPI, React, Next.js, and PostgreSQL, and I deploy with Docker on modern cloud platforms. As a founding engineer, I take ownership of projects end to end, from gathering requirements and designing the architecture to planning, building, testing, and shipping production-ready products. I hold a B.Tech in Artificial Intelligence and Data Science from KL University, and I continue to adopt new tools and practices so that the products I build remain modern, scalable, and dependable.",
  email: 'konasanitejamaheswarareddy0235@gmail.com',
  phone: '+91 9059503227',
  github: 'https://github.com/TejaKonasani',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resumePath: '/resume/Teja_Konasani_Resume.pdf',
};

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeWords = [
  'AI AGENTS',
  'LLMS',
  'MCP SERVERS',
  'RAG PIPELINES',
  'PROMPT ENGINEERING',
  'MULTI-AGENT SYSTEMS',
  'PYTHON',
  'FASTAPI',
  'LANGGRAPH',
  'VECTOR DATABASES',
  'FUNCTION CALLING',
  'REACT',
  'NEXT.JS',
  'NODE.JS',
  'JAVASCRIPT',
  'TAILWIND CSS',
  'POSTGRESQL',
  'SUPABASE',
  'REST APIS',
  'DOCKER',
  'GIT',
  'VERCEL',
  'SYSTEM DESIGN',
  'MACHINE LEARNING',
  'LLM EVALS',
  'AI-ASSISTED CODING',
  'END-TO-END DELIVERY',
];

export const stats = [
  { value: '1', label: 'Year of Experience', icon: 'briefcase' },
  { value: '6+', label: 'Projects Built', icon: 'layers' },
];

export interface ProjectTechCategory {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  categoryTags: string[];
  overview: string[];
  features: string[];
  technologies: ProjectTechCategory[];
  liveUrl: string | null;
  githubUrl: string | null;
  previewImage: string;
  initials: string;
  accent: 'lime' | 'sky' | 'pop';
  featuredInGrid?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'medspaces',
    title: 'MedSpaces',
    tagline: 'A comprehensive healthcare platform connecting patients, healthcare providers and organizations through a unified digital ecosystem.',
    categoryTags: ['Healthcare', 'Full Stack', 'Role Based', 'Production Ready'],
    overview: [
      'MedSpaces is a comprehensive healthcare platform that connects patients, healthcare providers (HCPs), care knowledge providers (CKPs) and enterprises through a unified digital ecosystem. It simplifies appointment booking, care management, and communication with role-based access and secure workflows.',
      'The platform includes patient management, doctor scheduling, teleconsultations, visit notes, billing, and administrative tools for healthcare organizations.',
    ],
    features: [
      'Role-based access (Patient, HCP, CKP, Enterprise, Admin)',
      'Appointment booking and scheduling with calendar sync',
      'Teleconsultations and visit management workflows',
      'Secure authentication and granular RBAC authorization',
      'Scalable backend with NestJS/FastAPI and PostgreSQL database',
      'Production deployment on cloud infrastructure with high availability',
    ],
    technologies: [
      { category: 'Frontend', items: ['Next.js 14', 'React', 'Tailwind CSS'] },
      { category: 'Backend', items: ['NestJS', 'TypeORM', 'Node.js', 'Prisma'] },
      { category: 'Database', items: ['PostgreSQL', 'Supabase'] },
      { category: 'Tools & Deployment', items: ['Render', 'Vercel', 'GitHub Actions'] },
    ],
    liveUrl: 'https://medspaces-platform.vercel.app/',
    githubUrl: 'https://github.com/TejaKonasani/medspaces-platform',
    previewImage: '/images/projects/medspaces.svg',
    initials: 'MS',
    accent: 'pop',
    featuredInGrid: true,
  },
  {
    slug: 'kalagigs',
    title: 'KalaGigs',
    tagline: 'An on-demand talent booking and live entertainment marketplace connecting event organizers with verified performers and artists.',
    categoryTags: ['Marketplace', 'Events', 'Full Stack', 'Booking Engine'],
    overview: [
      'KalaGigs is an on-demand artist and live entertainment booking platform that connects event organizers, festival directors, corporate hosts, and venues with verified performers, singers, bands, DJs, and live talent.',
      'It removes middlemen and pricing opacity by providing verified artist portfolios, transparent pricing estimates, date availability calendars, and direct inquiry management.',
    ],
    features: [
      'Comprehensive artist discovery with genre filters and audio/video reels',
      'Direct date availability check and automated booking inquiry pipeline',
      'Verified performer credentials, reviews, and past performance history',
      'Organizer dashboard for managing multiple event requirements simultaneously',
      'Mobile-first responsive architecture designed for fast on-the-go talent hiring',
    ],
    technologies: [
      { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
      { category: 'Database', items: ['PostgreSQL', 'Prisma ORM'] },
      { category: 'Tools & Deployment', items: ['Vercel', 'Git', 'Cloudinary'] },
    ],
    liveUrl: 'https://medspaces-platform.vercel.app/',
    githubUrl: 'https://github.com/TejaKonasani',
    previewImage: '/images/projects/kalagigs.svg',
    initials: 'KG',
    accent: 'pop',
    featuredInGrid: true,
  },
  {
    slug: 'nuscreen',
    title: 'NuScreen',
    tagline: 'Healthcare SaaS portal for camp requests, CSR sponsorships and public health screening analytics.',
    categoryTags: ['Healthcare SaaS', 'Public Health', 'Offline First', 'AI Alerts'],
    overview: [
      'NuScreen is an enterprise healthcare and community screening SaaS platform designed for managing large-scale medical camps, beneficiary health records, CSR sponsorships, and public health analytics.',
      'Built for non-profit and corporate healthcare field initiatives, it supports volunteer field operators, offline-first vitals capture, and real-time critical risk alerts.',
    ],
    features: [
      'Camp request management and automated geographic team assignment',
      'Beneficiary health records capture with offline-first local persistence',
      'AI-assisted risk indicators and automated health alert flags for vitals',
      'CSR sponsorship tracking, quota allocation, and compliance reporting',
      'Public health analytics dashboard for community wellness metrics',
    ],
    technologies: [
      { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
      { category: 'Backend', items: ['Node.js', 'REST APIs', 'Express'] },
      { category: 'Database', items: ['MongoDB', 'PostgreSQL'] },
      { category: 'Tools & Deployment', items: ['Netlify', 'Git', 'Maps API'] },
    ],
    liveUrl: 'https://clinquant-dusk-fdd924.netlify.app/',
    githubUrl: 'https://github.com/TejaKonasani',
    previewImage: '/images/projects/nuscreen.svg',
    initials: 'NS',
    accent: 'lime',
    featuredInGrid: true,
  },
  {
    slug: 'grocery-delivery-app',
    title: 'Grocery Delivery App',
    tagline: 'Premium mobile-first D2C grocery e-commerce platform delivering fresh grains, pulses, and oils directly from local mills.',
    categoryTags: ['E-Commerce', 'D2C Platform', 'Mobile First', 'Payments'],
    overview: [
      'Mill2Meal is a premium, mobile-first D2C grocery e-commerce platform built to deliver unpolished grains, stone-ground flours, and wood-pressed oils fresh from traditional mills to customer doorsteps.',
      'It features 22+ customer-facing pages, product discovery with categories and filters, monthly subscription plans, and visual delivery status tracking.',
    ],
    features: [
      '22+ customer-facing pages including product catalog, categories, and filters',
      'Shopping cart with quantity management and OTP-authenticated fast checkout',
      'Monthly essentials subscription plans and recurring order management',
      'Pincode serviceability check engine with automated radius logic',
      'Secure NestJS REST APIs with JWT authentication, RBAC, and Razorpay integration',
    ],
    technologies: [
      { category: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'React Router'] },
      { category: 'Backend', items: ['NestJS', 'REST APIs', 'Node.js'] },
      { category: 'Database', items: ['PostgreSQL', 'Prisma ORM'] },
      { category: 'Tools & Deployment', items: ['GitHub Pages', 'Vercel', 'Razorpay'] },
    ],
    liveUrl: 'https://mill2meal.github.io/mill2meal-frontend/',
    githubUrl: 'https://github.com/Mill2Meal/mill2meal-frontend',
    previewImage: '/images/projects/grocery-delivery.svg',
    initials: 'M2M',
    accent: 'lime',
    featuredInGrid: true,
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'Modern personal developer portfolio with 3D canvas visuals, interactive SVG education roadmap, and zero-runtime architecture.',
    categoryTags: ['Portfolio', 'Next.js 14', 'Interactive SVG', 'Framer Motion'],
    overview: [
      'The modern personal portfolio of Konasani Teja Maheswara Reddy, Founding AI Engineer. Designed with a dark futuristic aesthetic, interactive 3D elements, and clean typography.',
      'Features an interactive SVG education journey with animated flowing road paths, dynamic project details routing, and dual-output architecture (Next.js App Router + Zero Build Step Plain HTML/CSS/JS).',
    ],
    features: [
      'Editorial typography with Bricolage Grotesque and Instrument Serif',
      'Interactive SVG education roadmap with animated flowing road lines and pulsing nodes',
      'Dynamic project details pages with categorized tech stacks',
      'Custom mouse cursor lagging tracking and scroll progress indicator',
      '100% responsive dark theme engineered for mobile, tablet, and laptop viewports',
    ],
    technologies: [
      { category: 'Frontend', items: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
      { category: 'Graphics', items: ['Three.js', 'SVG Animations', 'Canvas Particles'] },
      { category: 'Tools & Deployment', items: ['Vercel', 'GitHub Pages', 'Git'] },
    ],
    liveUrl: 'https://tejakonasani.github.io/MyPortfolio/',
    githubUrl: 'https://github.com/TejaKonasani/MyPortfolio',
    previewImage: '/images/projects/portfolio.svg',
    initials: 'TK',
    accent: 'lime',
    featuredInGrid: true,
  },
  {
    slug: 'zero-noise-ceo-os',
    title: 'Zero Noise CEO OS',
    tagline: 'AI-powered personal operating system for founders: daily planning, deep-work tracking, and contextual coaching.',
    categoryTags: ['AI Platform', 'Productivity', 'Gemini API', 'Full Stack'],
    overview: [
      'Zero Noise CEO OS is an AI-powered personal operating system and founder performance platform designed to eliminate distractions, enhance deep work focus, and accelerate strategic execution.',
      'It provides AI-driven coaching, daily priority planning, capability scoring, and performance retrospectives.',
    ],
    features: [
      'AI-driven daily planning and deep work tracking',
      'Capability scoring and automated performance reviews',
      'Gemini API-powered contextual intelligence and strategic coaching',
      'Secure REST APIs with JWT auth, Prisma ORM, and PostgreSQL',
      'High-performance dashboard with TanStack Query and React Hook Form',
    ],
    technologies: [
      { category: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS', 'TanStack Query'] },
      { category: 'Backend', items: ['NestJS', 'REST APIs', 'Node.js'] },
      { category: 'AI / ML', items: ['Google Gemini API', 'Prompt Engineering'] },
      { category: 'Database', items: ['PostgreSQL', 'Prisma ORM', 'Supabase'] },
    ],
    liveUrl: 'https://zero-noice-ceo-os.github.io/zero-noise-frontend/',
    githubUrl: 'https://github.com/TejaKonasani',
    previewImage: '/images/projects/portfolio.svg',
    initials: 'ZN',
    accent: 'sky',
    featuredInGrid: false,
  },
  {
    slug: 'local-first-agent-ecosystem',
    title: 'Local-First Agent Ecosystem',
    tagline: 'Self-learning, local-first 16-agent legal/compliance AI platform with zero data leakage.',
    categoryTags: ['Multi-Agent', 'Local LLM', 'Ollama', 'Self-Learning'],
    overview: [
      'A 16-agent legal/compliance AI platform that runs entirely on local hardware. All inference is powered locally via Ollama, all knowledge is stored locally, every action is audited, and nothing leaves the machine without approval.',
      'Features a self-learning engine, hybrid vector + BM25 retrieval, append-only audit logging, and 7 role-scoped web portals.',
    ],
    features: [
      '16 specialized cooperative agents orchestrated via single entry/exit gateway',
      'Local-first LLM inference using Ollama with strict egress allowlists',
      'Verifiable self-learning engine gated by hold-out exams and regression harness',
      'Hybrid search combining SQLite, vector embeddings, BM25, and knowledge graphs',
      'Role-based portal system with 7 access tiers and human approval gates',
    ],
    technologies: [
      { category: 'AI / ML', items: ['Ollama', 'Multi-Agent Systems', 'RAG', 'Vector Search'] },
      { category: 'Backend', items: ['Python', 'FastAPI', 'SQLite', 'Pydantic'] },
      { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
      { category: 'Tools & DevOps', items: ['Docker', 'Docker Compose', 'Pytest'] },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/TejaKonasani/local-first-agent-ecosystem',
    previewImage: '/images/projects/portfolio.svg',
    initials: 'AE',
    accent: 'lime',
    featuredInGrid: false,
  },
];

// ---------------------------------------------------------------------------
// Skills Categories — Exactly 3 per row on desktop
// ---------------------------------------------------------------------------
export interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    color: '#ff6b3d',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Frontend',
    color: '#6f9bff',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Vite', 'Shadcn UI'],
  },
  {
    name: 'Backend',
    color: '#c8f542',
    skills: ['NestJS', 'Node.js', 'Express', 'TypeORM', 'PostgreSQL', 'Supabase'],
  },
  {
    name: 'AI & ML',
    color: '#c8f542',
    skills: ['Gemini API', 'RAG Pipelines', 'Ollama', 'LangGraph', 'Scikit-learn', 'Vector DBs'],
  },
  {
    name: 'Cloud & DevOps',
    color: '#ff6b3d',
    skills: ['Docker', 'AWS', 'Render', 'Vercel', 'Git', 'GitHub Actions'],
  },
  {
    name: 'Tools & Architecture',
    color: '#6f9bff',
    skills: ['REST APIs', 'GraphQL', 'System Design', 'Prisma ORM', 'FastAPI', 'Microservices'],
  },
];

// ---------------------------------------------------------------------------
// Experience — Exactly the two positions at Nushift Technologies
// ---------------------------------------------------------------------------
export interface ExperienceEntry {
  number: string;
  period: string;
  role: string;
  company: string;
  employmentType: 'Full-time' | 'Internship';
  bullets: string[];
}

export const experiencesList: ExperienceEntry[] = [
  {
    number: '1',
    period: 'Oct 2024 – Present',
    role: 'Founding AI Engineer',
    company: 'Nushift Technologies',
    employmentType: 'Full-time',
    bullets: [
      'Building AI-powered healthcare operating systems and education platforms.',
      'Designing and developing AI agents, RAG pipelines, multi-agent workflows.',
      'Leading product development, architecture and deployment.',
    ],
  },
  {
    number: '2',
    period: 'Jul 2024 – Sep 2024',
    role: 'AI / Developer Intern',
    company: 'Nushift Technologies',
    employmentType: 'Internship',
    bullets: [
      'Worked on AI-powered features and backend systems.',
      'Built and deployed real-world applications.',
      'Explored LLMs, RAG and agent-based automation.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Education Journey — 3 Milestones with Roadmap SVG
// ---------------------------------------------------------------------------
export interface EducationStop {
  id: string;
  years: string;
  stage: string;
  boardOrDegree: string;
  institution: string;
  description: string;
  accent: 'orange' | 'blue' | 'lime';
  icon: 'book' | 'document' | 'graduation';
}

export const educationJourney: EducationStop[] = [
  {
    id: 'schooling',
    years: '2018 – 2020',
    stage: 'Schooling',
    boardOrDegree: 'CBSE',
    institution: 'Gorkey Public School',
    description: 'Built a strong foundation, developed discipline and discovered my interest in technology.',
    accent: 'orange',
    icon: 'book',
  },
  {
    id: 'intermediate',
    years: '2020 – 2022',
    stage: 'Intermediate',
    boardOrDegree: 'TSBIE',
    institution: 'Krishnaveni Junior College',
    description: 'Strengthened my analytical skills, explored core subjects and built a clear interest towards engineering and technology.',
    accent: 'blue',
    icon: 'document',
  },
  {
    id: 'btech',
    years: '2022 – 2026',
    stage: 'B.Tech, AI and Data Science',
    boardOrDegree: 'Amrita Vishwa Vidyapeetham, Bengaluru',
    institution: 'Amrita Vishwa Vidyapeetham, Bengaluru',
    description: 'Currently in 4th year with a focus on AI, Data Science and real-world applications.',
    accent: 'lime',
    icon: 'graduation',
  },
];

// ---------------------------------------------------------------------------
// Certifications & Achievements List
// ---------------------------------------------------------------------------
export interface CertificationItem {
  title: string;
  issuer: string;
  iconType: 'aws' | 'salesforce' | 'ibm' | 'aicte' | 'eduskills' | 'hackathon';
}

export const certificationsList: CertificationItem[] = [
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', iconType: 'aws' },
  { title: 'AICTE Cloud Virtual Internship', issuer: 'AWS Academy', iconType: 'aicte' },
  { title: 'Salesforce AI Associate', issuer: 'Salesforce', iconType: 'salesforce' },
  { title: 'EduSkills AI & ML', issuer: 'EduSkills', iconType: 'eduskills' },
  { title: 'IBM Python', issuer: 'IBM', iconType: 'ibm' },
  { title: '30 Hour Hackathon', issuer: 'Participation Certificate', iconType: 'hackathon' },
];

export interface AchievementItem {
  title: string;
  subtitle: string;
  year: string;
  iconType: 'trophy' | 'star';
}

export const achievementsList: AchievementItem[] = [
  {
    title: 'Best NSS Volunteer Award',
    subtitle: 'KL University',
    year: '2024',
    iconType: 'trophy',
  },
  {
    title: 'NSS Unit 12 Coordinator',
    subtitle: 'KL University',
    year: '2024',
    iconType: 'star',
  },
  {
    title: 'Best NSS Volunteer Award',
    subtitle: 'State Level',
    year: '2023',
    iconType: 'trophy',
  },
];
