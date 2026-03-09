import type { ResumeData } from '../types/resume';
import { projectEntries } from './projectsData';

export const resumeData: ResumeData = {
  name: 'Albert Shkhyan',
  tagline: 'Software Engineer',
  about:
    "Hi, I'm Albert — I build front-end and mobile apps with React, Next.js, and React Native, and enjoy turning ideas into fast, accessible products.",
  contact: {
    phone: '+37441979360',
    email: 'alikshkhyan@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/albert-shkhyan-a7b200199/',
    location: 'Yerevan, Armenia',
  },
  summary:
    'Experienced Software Engineer with over 4 years of expertise in developing front-end and mobile applications using React, React Native, and Next.js, complemented by solid back-end experience in Nest.js and Node.js. Proficient in JavaScript and TypeScript, with deep knowledge of state management, responsive design, and cross-browser compatibility. Collaborative team player passionate about leveraging modern front-end technologies to solve UI challenges and enhance performance.',
  skills: [
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'React Native',
        'TypeScript',
        'JavaScript',
        'Redux Toolkit',
        'TanStack Query',
        'HTML5',
        'CSS / SCSS',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'NestJS',
        'Express',
        'REST API',
        'Authentication (JWT / OAuth2)',
      ],
    },
    {
      category: 'Data',
      items: ['PostgreSQL', 'MongoDB', 'TypeORM'],
    },
    {
      category: 'Testing',
      items: ['Jest', 'Vitest', 'React Testing Library', 'Playwright'],
    },
    {
      category: 'DevOps',
      items: [
        'AWS (S3)',
        'Docker',
        'CI/CD (GitHub Actions)',
        'Deployment (Vercel / Netlify / AWS)',
        'Sentry',
      ],
    },
    {
      category: 'Build Tools',
      items: ['Vite', 'Webpack', 'Babel'],
    },
    {
      category: 'Performance',
      items: [
        'Code splitting',
        'Lazy loading',
        'Bundle optimization',
        'Web Vitals',
      ],
    },
    {
      category: 'Other',
      items: [
        'Git',
        'Socket.IO',
        'Twilio',
        'Canvas / Three.js / WebGL',
        'Xcode / Android Studio',
      ],
    },
  ],
  experience: [
    {
      title: 'Software Engineer',
      subtitle: 'Brainstorm Technologies (Full-time)',
      date: '01/2021 - Present',
      location: 'Yerevan, Armenia',
      bullets: [
        'Designing, developing, and maintaining responsive and high-performance frontend applications using modern frameworks like React, Next.js, Node.js, Nest.js.',
        'Leading a team to architect and develop complex front-end applications integrated with backend systems using React.js, Next.js and React Native.',
        'Developing a sophisticated mobile application, using React Native, Firebase, Twilio for streamlined ticket collection and management.',
        'Handling APIs and data synchronization in React Native apps using RESTful APIs, and WebSockets for real-time updates.',
        'Managing state and data flow across large-scale applications using Redux, Context API, and hooks.',
        'Ensuring cross-browser compatibility, responsive design, and a high level of accessibility (WCAG) for all users.',
        'Developed interactive Canvas-based applications using Three.js, Fabric.js, and SVG, including a 2D sneaker builder and a floor planner for restaurant layouts, enhancing user interactivity and customization.',
      ],
    },
    {
      title: 'Front-End Developer & Mentor',
      subtitle: 'Level Up IT Center LLC (Full-time)',
      date: '01/2019 - 12/2020',
      location: 'Yerevan, Armenia',
      bullets: [
        'Designed and developed responsive front-end solutions using HTML, CSS, JavaScript, and React.js.',
        "Architected and built the company's main website, levelup.am, optimizing performance and enhancing user experience.",
        'Led the development of interactive and user-friendly interfaces, ensuring cross-browser compatibility and high performance.',
        'Instructed and mentored junior developers and students in web programming, covering key technologies such as HTML, CSS, JavaScript, and React.js.',
      ],
    },
  ],
  projects: projectEntries,
  languages: [
    { name: 'Armenian', level: 'Native', filledDots: 5 },
    { name: 'English', level: 'Advanced', filledDots: 3 },
    { name: 'Russian', level: 'Proficient', filledDots: 4 },
  ],
  social: [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/albert-shkhyan-a7b200199/',
      icon: 'linkedin',
    },
    { name: 'Github', href: 'https://github.com/albertshkhyan', icon: 'github' },
  ],
  strengths: [
    {
      title: 'Passionate About the Industry',
      description:
        'Deep love for the software development industry and a commitment to creating innovative solutions.',
      icon: 'gear',
    },
    {
      title: 'Adaptability & Eagerness to Learn',
      description:
        'Constantly seeking new opportunities to learn and master emerging technologies.',
      icon: 'lightbulb',
    },
    {
      title: 'Collaboration',
      description:
        'A strong team player who thrives in collaborative environments.',
      icon: 'users',
    },
  ],
  moreProjectsIntro: 'For more projects, please visit my ',
  moreProjectsLinks: [
    { label: 'LinkedIn page', href: 'https://www.linkedin.com/in/albert-shkhyan-a7b200199/' },
    { label: 'GitHub', href: 'https://github.com/albertshkhyan' },
  ],
};
