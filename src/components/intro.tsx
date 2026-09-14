'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&apos;m a{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Frontend
        </span>{' '}
        developer creating modern web apps.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        I&apos;m a frontend developer based in Pakistan, passionate about
        creating modern, responsive web applications using React, Next.js, and
        Tailwind CSS. I focus on building clean, user-friendly interfaces with
        performance and scalability in mind.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex w-full max-w-md flex-col items-center gap-2 sm:max-w-none sm:flex-row sm:justify-center"
      >
        <div className="flex w-full flex-wrap justify-center gap-2 sm:w-auto">
          <Button asChild size="lg" className="flex-1 sm:flex-none">
            <Link href="#contact">
              Get in touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1 sm:flex-none"
            asChild
          >
            <a href="/Taha-Arshad-CV.pdf" download="Taha-Arshad-CV.pdf">
              Download CV <Icons.download className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/taha-arshad-48878b382/"
              aria-label="Linkedin"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://github.com/Tahaarshad787"
              aria-label="Github"
              target="_blank"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
