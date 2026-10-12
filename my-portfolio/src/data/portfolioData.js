// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personalInfo = {
  name: 'Anku Govardhan Rajbhar',
  title: 'Software Developer',
  tagline: 'Building Secure Backends for Real-World Applications',
  summary:
    'Software Developer with hands-on experience in MERN Stack development, REST API development, and AI-powered recruitment solutions. Worked on enterprise recruitment platforms, CRM systems, and role-based applications using React.js, Node.js, Express.js, MongoDB, and JWT Authentication. Passionate about building scalable web applications and continuously learning modern technologies.',
  email: 'raianku6051@gmail.com',
  phone: '+91 9998252351',
  location: 'Surat, Gujarat',
  // ── Social / external links ──────────────────────────────
  // Replace placeholder values with your real URLs
  github: 'https://github.com/',        // e.g. https://github.com/yourusername
  linkedin: 'https://www.linkedin.com/in/anku-rajbhar-9aa5a6341/', // LinkedIn profile
  resume: '/anku resume.pdf', // PDF placed in /public folder
};

export const skills = [
  {
    category: 'Backend',
    icon: 'server',
    items: ['Node.js & Express.js', 'REST API Development', 'JWT Authentication', 'Role-Based Access Control'],
  },
  {
    category: 'Database',
    icon: 'database',
    items: ['MongoDB', 'Database Design'],
  },
  {
    category: 'Frontend',
    icon: 'layout',
    items: ['React.js', 'MERN Stack Development', 'JavaScript'],
  },
  {
    category: 'AI Integration',
    icon: 'cpu',
    items: ['Google Gemini AI', 'AI Resume Parser', 'AI Job Description Generator', 'AI Proposal Generator'],
  },
  {
    category: 'Tools',
    icon: 'tool',
    items: ['Git', 'GitHub', 'Postman'],
  },
  {
    category: 'Soft Skills',
    icon: 'star',
    items: ['Problem Solving', 'Time Management', 'Fast Learner'],
  },
];

export const experience = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'TalentGuru Pvt. Ltd.',
    location: 'Surat',
    period: '10/2025 – 05/2026',
    type: 'Full-time',
    highlights: [
      'Built secure REST APIs, JWT Authentication, and Role-Based Access Control (RBAC) for Admin, HR, Sales, and Candidate modules.',
      'Used Node.js, Express.js, MongoDB, React.js, Git, and REST APIs to build scalable backend services.',
      'Developed an Enterprise Recruitment & HR Management System using the MERN Stack with Google Gemini AI integration.',
      'Implemented AI-powered Resume Parser, Job Description Generator, and Proposal Generator using Google Gemini AI.',
      'Developed Company Management, Position Management, and Recruitment Workflow modules to streamline hiring processes.',
      'Built centralized Candidate Management, Interview Scheduling, Offer Management, and Joining Tracking modules for improved recruitment coordination.',
      'Developed Recruitment Dashboard and Analytics to provide real-time hiring insights for data-driven decision making.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT', 'RBAC', 'Google Gemini AI', 'REST APIs', 'Git'],
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'Ideal Talent Connect Pvt. Ltd.',
    location: 'Surat',
    period: '02/2025 – 09/2025',
    type: 'Full-time',
    highlights: [
      'Developed backend for Recruitment CRM using Node.js, Express.js, and MongoDB to streamline recruitment processes.',
      'Built role-based login and authorization for Admin, HR, and Sales to enhance system security and user management.',
      'Developed Company Management and Position Management modules.',
      'Implemented HR assignment workflow for job positions to improve assignment tracking and management efficiency.',
      'Built candidate sourcing and interview scheduling modules.',
      'Developed candidate pipeline to manage recruitment from interview to joining.',
      'Created APIs to store interview feedback, candidate details, and joining information.',
      'Implemented Sales lead management and agreement approval workflow.',
      'Integrated JWT authentication and REST APIs for secure communication.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'REST APIs'],
  },
  {
    id: 3,
    role: 'MERN Stack Developer',
    company: 'Ideal Talent Connect Pvt. Ltd.',
    location: 'Surat',
    period: '07/2024 – 11/2024',
    type: 'Full-time',
    highlights: [
      'Developed a full-stack recruitment portal using the MERN Stack.',
      'Implemented JWT authentication, role-based authorization, and REST APIs.',
      'Integrated MongoDB for secure data storage.',
      'Built Admin, Recruiter, and Candidate role-based dashboards.',
      'Developed recruiter dashboard for efficient management of candidates and applications.',
      'Created candidate dashboard for tracking applied jobs and managing application status.',
      'Developed job application workflow with application tracking.',
      'Implemented company profile and job posting management.',
      'Enabled recruiter notifications via email for timely updates on new applications.',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Enterprise Recruitment & HR Management System',
    subtitle: 'AI-Powered End-to-End Hiring Platform',
    problem:
      'Large enterprises struggled with fragmented recruitment workflows — manual resume screening, disconnected HR processes, and no unified pipeline from sourcing to onboarding.',
    solution:
      'Built a comprehensive, role-based enterprise recruitment platform backed by Google Gemini AI, centralising every stage of the hiring lifecycle into a single secure system.',
    features: [
      'Secure REST APIs with JWT authentication and RBAC for Admin, HR, Sales & Candidate roles',
      'AI-powered Resume Parser, Job Description Generator, and Proposal Generator via Google Gemini AI',
      'Company & Position Management with full Recruitment Workflow modules',
      'Centralized Candidate Management, Interview Scheduling, Offer Management, and Joining Tracking',
      'Recruitment Dashboard and Analytics for real-time hiring insights',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT', 'RBAC', 'Google Gemini AI', 'Git'],
    myRole:
      'Architected and developed the entire backend system — REST APIs, authentication layer, AI integrations, and all recruitment workflow modules.',
    repoUrl: '#',
    demoUrl: '#',
    accentColor: '#6366f1',
  },
  {
    id: 2,
    title: 'Recruitment CRM with Candidate Pipeline',
    subtitle: 'Role-Based CRM for Staffing Agencies',
    problem:
      'Recruitment agencies lacked a structured CRM to track candidates across the pipeline, manage sales leads, and assign HR responsibilities with proper access controls.',
    solution:
      'Developed a full-featured recruitment CRM backend with granular role-based workflows, a multi-stage candidate pipeline, and integrated sales lead management.',
    features: [
      'Role-based login and authorization for Admin, HR, and Sales',
      'Company Management and Position Management modules',
      'HR assignment workflow for job positions',
      'Candidate sourcing, interview scheduling, and multi-stage pipeline (interview → joining)',
      'APIs for interview feedback, candidate details, and joining information',
      'Sales lead management and agreement approval workflow',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    myRole:
      'Designed and built the complete backend, including database schema, API layer, RBAC system, and all recruitment workflow modules.',
    repoUrl: '#',
    demoUrl: '#',
    accentColor: '#8b5cf6',
  },
  {
    id: 3,
    title: 'MERN Stack Recruitment Portal',
    subtitle: 'Full-Stack Job Application Tracking Platform',
    problem:
      'Small to mid-size recruiting firms needed an integrated portal where admins, recruiters, and candidates could interact within clearly separated roles and track job applications end-to-end.',
    solution:
      'Built a complete MERN stack recruitment portal with three distinct role-based dashboards, job posting, application tracking, and automated recruiter email notifications.',
    features: [
      'JWT authentication and role-based authorization (Admin / Recruiter / Candidate)',
      'Admin, Recruiter, and Candidate role-based dashboards',
      'Recruiter dashboard for efficient management of candidates and applications',
      'Candidate dashboard for tracking applied jobs and managing application status',
      'Job application workflow with application tracking',
      'Company profile and job posting management',
      'Recruiter notifications via email for new applications',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
    myRole:
      'Developed the full stack — React dashboards, Node/Express APIs, MongoDB schemas, authentication flow, and email notification integration.',
    repoUrl: '#',
    demoUrl: 'https://www.italentconnect.com/',
    accentColor: '#a855f7',
  },
];

export const workflowSteps = [
  {
    step: '01',
    title: 'Requirements & Schema Design',
    description:
      'Understand business requirements, identify entities, design MongoDB schemas with proper indexing, relationships, and data integrity rules.',
    icon: 'clipboard',
  },
  {
    step: '02',
    title: 'API Architecture',
    description:
      'Define RESTful API contracts, route structure, middleware layers, and error handling patterns before writing a single line of code.',
    icon: 'layers',
  },
  {
    step: '03',
    title: 'Authentication & RBAC',
    description:
      'Implement JWT-based authentication, token lifecycle management, and role-based access control to lock every route to the right permission level.',
    icon: 'shield',
  },
  {
    step: '04',
    title: 'Core Module Development',
    description:
      'Build business logic modules — CRMs, pipelines, dashboards — with clean separation of controllers, services, and data access layers.',
    icon: 'code',
  },
  {
    step: '05',
    title: 'AI & Third-Party Integration',
    description:
      'Integrate external services such as Google Gemini AI for intelligent automation, enhancing productivity without compromising security.',
    icon: 'cpu',
  },
  {
    step: '06',
    title: 'Testing & Delivery',
    description:
      'Validate all endpoints with Postman, ensure edge cases are handled, review with Git, and deliver clean, documented, production-ready code.',
    icon: 'check-circle',
  },
];

export const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Lovely Professional University (LPU)',
    location: 'Phagwara, Punjab',
    year: null,
    icon: 'graduation',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Veer Narmad South Gujarat University',
    location: 'Surat, Gujarat',
    year: 'April 2024',
    icon: 'graduation',
  },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Gujarati', level: 'Native' },
];

export const areasOfInterest = [
  { label: 'MERN Stack Development', icon: 'layers' },
  { label: 'Backend Development', icon: 'server' },
  { label: 'API Development', icon: 'code' },
  { label: 'Database Design', icon: 'database' },
  { label: 'Web Application Development', icon: 'layout' },
];
