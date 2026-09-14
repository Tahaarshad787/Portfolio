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
    image: '/images/liquilyte.jpg',
    title: 'Liquilyte',
    description:
      'A conversion-focused product landing page for Liquilyte — Nature’s Torch, a self-igniting liquid fire starter. I built a full marketing experience covering product storytelling, featured bundles, how-it-works steps, comparison tables, reviews, and strong CTAs for camping, emergency, and outdoor audiences.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
      'Git',
      'GitHub',
    ],
    links: {
      preview: 'https://creativesolutionservices.com/demolinks/liquilite/',
      github: 'https://creativesolutionservices.com/demolinks/liquilite/',
      githubApi: '',
    },
  },
  {
    image: '/images/sicher-bitcoin.jpg',
    title: 'Sicher Bitcoin Verwahren',
    description:
      'A professional German-language website for a Swiss Bitcoin self-custody consultancy. The site presents services for private clients and businesses, workshop offerings, FAQs, blog content, and lead-generation flows like free consultation requests and a security self-test download.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
      'Git',
      'GitHub',
    ],
    links: {
      preview: 'https://sicher-bitcoin-verwahren.ch/',
      github: 'https://sicher-bitcoin-verwahren.ch/',
      githubApi: '',
    },
  },
  {
    image: '/images/nona.jpg',
    title: 'Nona Global',
    description:
      'A community-first marketing website for Nona, a free Charleston app that connects families with verified local babysitters and housekeepers. I developed clear sections for how it works, trust & safety, app features, testimonials, and multi-platform download CTAs.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
      'Git',
      'GitHub',
    ],
    links: {
      preview: 'https://nonaglobal.com/',
      github: 'https://nonaglobal.com/',
      githubApi: '',
    },
  },
  {
    image: '/images/pinkslip.jpg',
    title: 'Pink Slip Now',
    description:
      'A service-business website for Pink Slip Now, a Sydney-wide mobile pink slip and vehicle inspection company. The site highlights same-day rego checks, repairs, servicing, FAQs, reviews, and quote request flows so customers can book inspections quickly from home or work.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'WordPress',
      'Responsive Design',
      'Git',
      'GitHub',
    ],
    links: {
      preview: 'https://pinkslipnow.com.au/',
      github: 'https://pinkslipnow.com.au/',
      githubApi: '',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend Developer',
    company: 'MSB IT Solutions',
    description:
      'Develop responsive and scalable web applications using React.js, Next.js, and JavaScript. Build reusable UI components and integrate RESTful APIs to deliver dynamic user experiences. Also work with PHP-based project structures, building frontend with HTML and CSS, and handle WordPress frontend changes and updates. Optimize application performance, responsiveness, and code quality through clean and maintainable development practices.',
    period: 'February 2026 – Present',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'PHP',
      'WordPress',
      'Tailwind CSS',
      'REST APIs',
      'Axios',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Code Rivals',
    description:
      'Developed responsive and cross-browser web applications using React.js and modern CSS frameworks. Integrated RESTful APIs and collaborated with teams to deliver production-ready features. Refactored existing codebases to improve performance, scalability, and maintainability.',
    period: 'March 2025 – January 2026',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Bootstrap',
      'Material UI',
      'REST APIs',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    description:
      'Worked with clients remotely to design and develop modern, responsive websites and web applications. Delivered clean UI implementations using React.js, Next.js, and Tailwind CSS, converted designs into production-ready pages, and handled revisions based on client feedback to ensure high-quality, on-time delivery.',
    period: '2024 – Present',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'WordPress',
      'Figma',
      'Git',
      'GitHub',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html /> },
  { icon: <Icons.css /> },
  { icon: <Icons.tailwind /> },
  { icon: <Icons.javascript /> },
  { icon: <Icons.typescript /> },
  { icon: <Icons.react /> },
  { icon: <Icons.nextjs /> },
  { icon: <Icons.materialui /> },
  { icon: <Icons.bootstrap /> },
  { icon: <Icons.mongodb /> },
  { icon: <Icons.nodejs /> },
  { icon: <Icons.git /> },
] as const;
