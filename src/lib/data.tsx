import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/doctor.jpg',
    title: 'Doctor Appointment',
    description:
      'I designed and developed the complete frontend interface for a Doctor Appointment Booking Platform. The site allows users to browse doctors, view profiles, check available timings, and book appointments through a smooth and intuitive UI. The focus was on creating a clean, modern, and fully responsive design with seamless navigation and fast performance. Key features include a doctor listing page, appointment booking flow, mobile-friendly layout, and a user-centric interface that ensures a simple and efficient booking experience. This project highlights my ability to build polished, responsive, and production-ready frontend applications.',
    technologies: [
      'HTML5',
      'Tailwind CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Bootstrap',
      'Material UI',
      'MongoDB',
      'Git',
      'GitHub',
    ],

    links: {
      preview: 'https://doctor-appointment-orcin.vercel.app/',
      github: 'https://doctor-appointment-orcin.vercel.app/',
      githubApi: '',
    },
  },
  {
    image: '/images/syssel.jpg',
    title: 'Syysel',
    description:
      'A marketplace application where users can create missions and providers can offer services within their respective categories. Providers can place bids on user-created missions and also directly book customers through an integrated calendar system. The platform features a voucher-based discount system, real-time messaging for bookings and communication using Socket.io, and Stripe integration for secure payments. The project was built using React Native with TypeScript for the cross-platform mobile application, React for the web application, Node.js for the backend, and MongoDB as the database.',
    technologies: [
      'HTML5',
      'Taliwind CSS',
      'JavaScript',
      'React js',
      'Node js',
      'Bootstrap',
      'Material Ui',
      'Mongo DB',
      'Git',
      'GitHub',
    ],
    links: {
      preview: 'https://main.d3u5jo9ow65mtl.amplifyapp.com',
      github: 'https://main.d3u5jo9ow65mtl.amplifyapp.com',
      githubApi: '',
    },
  },
  {
    image: '/images/taskbound.jpg',
    title: 'Taskbound',
    description:
      'A blockchain-based bounty and campaign platform where users create crypto projects and marketing campaigns and users complete tasks to earn rewards and get payouts in crypto currencies, realtime payments through wallets. fully CRUD MERN stack application',
    technologies: [
      'HTML5',
      'Taliwind CSS',
      'JavaScript',
      'Next js',
      'Node js',
      'TypeScript',
      'Bootstrap',
      'Material Ui',
      'Mongo DB',
      'Git',
      'GitHub',
    ],
    links: {
      preview: 'https://www.app.taskbound.io',
      github: 'https://www.app.taskbound.io',
      githubApi: 'https://www.app.taskbound.io',
    },
  },
] as const;

export const experiencesData = [
  // {
  //   title: 'Frontend Developer',
  //   company: 'Code Rivals, Pakistan',
  //   description:
  //     'As a Frontend Developer, I worked on building and maintaining web applications using React.js and Next.js. My responsibilities included developing reusable UI components, optimizing page performance, and ensuring responsive and user-friendly interfaces. I collaborated closely with designers and backend developers to deliver smooth, high-performance, and SEO-friendly user experiences.',
  //   period: 'March 2024 - October 2024',
  //   technologies: [
  //     'HTML',
  //     'CSS',
  //     'JavaScript',
  //     'React js',
  //     'Next js',
  //     'Node js',
  //     'TypeScript',
  //     'Bootstrap',
  //     'Material Ui',
  //     'Mongo DB',
  //     'Git',
  //     'GitHub',
  //   ],
  // },
  {
    title: 'Frontend Developer',
    company: 'Code Rivals, Pakistan',
    description:
      'As a Frontend Developer at Code Rivals, I built responsive and high-performance web applications using React.js and Next.js. My work included developing reusable UI components, enhancing user experience, and integrating RESTful APIs with Axios and React Query for smooth data flow. While my primary focus was frontend development, I also contributed to minor backend tasks using Node.js when needed. This role strengthened my expertise in modern frontend architecture and clean, scalable UI development.',
    period: 'January 2025 - Present',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React js',
      'Next js',
      'Node js',
      'TypeScript',
      'Bootstrap',
      'Material Ui',
      'Mongo DB',
      'Git',
      'GitHub',
    ],
  },

  // {
  //   title: 'Frontend developer',
  //   company: 'Freelancing, remote',
  //   description:
  //     'As a freelancer, I specialized in graphic design using Figma and website development using Next.js and react.js. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
  //   period: '2023 - 2025',
  //   technologies: [
  //     'HTML',
  //     'CSS',
  //     'JavaScript',
  //     'React js',
  //     'Next js',
  //     'Node js',
  //     'TypeScript',
  //     'Bootstrap',
  //     'Material Ui',
  //     'Mongo DB',
  //     'Git',
  //     'GitHub',
  //   ],
  // },
] as const;

export const skillsData = [
  { icon: <Icons.html /> },
  { icon: <Icons.css /> },
  // { icon: <Icons.sass /> },
  { icon: <Icons.tailwind /> },
  { icon: <Icons.javascript /> },
  { icon: <Icons.typescript /> },
  { icon: <Icons.react /> },
  // { icon: <Icons.redux /> },
  { icon: <Icons.nextjs /> },
  { icon: <Icons.materialui /> },
  { icon: <Icons.bootstrap /> },
  { icon: <Icons.mongodb /> },
  { icon: <Icons.nodejs /> },
  { icon: <Icons.git /> },
] as const;
