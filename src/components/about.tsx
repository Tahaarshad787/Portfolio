'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Muhammad Taha, I&apos;m a Frontend Developer with 1+ years of
          experience in designing and developing responsive, user-centric, and
          performance-optimized web applications. Highly skilled in React.js,
          Next.js, and the MERN stack (MongoDB, Express.js, React.js, Node.js).
          Adept at transforming complex requirements into seamless user
          experiences through clean and maintainable code.
        </p>
        <p className="mb-4">
          Demonstrates a strong understanding of modern UI/UX principles,
          component-based architecture, and responsive design techniques using
          Tailwind CSS and Material UI. Experienced in integrating RESTful APIs,
        </p>
        <p className="mb-4">
          Passionate about continuous learning and delivering high-quality
          digital products that not only meet business goals but also enhance
          user satisfaction. Well-versed in version control systems like Git,
          and deployment platforms such as Vercel and Netlify.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
