import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Brain, Cpu } from 'lucide-react';
import profileImg from '../assets/profile2.jpeg';

const Hero = () => {
  const highlights = [
    { label: 'AI Projects', value: '10+' },
    { label: 'Certifications', value: '18+' },
    { label: 'Core Stack', value: 'Python + CV' },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute left-[8%] top-1/4 h-80 w-80 rounded-full bg-chlorophyll-primary/15 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-[12%] right-[6%] h-[22rem] w-[22rem] rounded-full bg-chlorophyll-tertiary/12 blur-[120px]"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 flex flex-col items-start md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/45 px-4 py-2 text-sm font-medium text-chlorophyll-primary backdrop-blur-sm"
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-chlorophyll-primary shadow-[0_0_12px_rgba(175,209,136,0.8)]"></span>
            Open to AI and ML opportunities
          </motion.div>

          <h1 className="mb-4 font-display text-5xl font-bold tracking-tight text-chlorophyll-on-surface md:text-6xl lg:text-7xl">
            Building practical
            <br />
            <span className="bg-gradient-to-r from-chlorophyll-primary via-chlorophyll-secondary to-chlorophyll-tertiary bg-clip-text text-transparent">
              AI experiences
            </span>
          </h1>

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.26em] text-chlorophyll-on-surface-variant">
            by Santhosh Sunkara
          </p>

          <h2 className="mb-6 max-w-xl font-display text-2xl font-medium text-chlorophyll-secondary md:text-3xl">
            AI and Machine Learning Developer focused on applied computer vision and real-world systems
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-chlorophyll-on-surface-variant">
            B.Tech student in Computer Science Engineering (AI and ML) at KIET. I design intelligent products with Python, OpenCV, and modern ML workflows, turning prototypes into usable experiences.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-chlorophyll-primary/70 bg-gradient-to-r from-chlorophyll-primary to-chlorophyll-primary-container px-6 py-3.5 font-semibold text-chlorophyll-on-primary transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(175,209,136,0.32)]"
            >
              Explore Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-chlorophyll-outline-variant/70 bg-chlorophyll-surface-high/55 px-6 py-3.5 font-semibold text-chlorophyll-on-surface transition-all hover:-translate-y-0.5 hover:border-chlorophyll-primary/55"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-xl px-2 py-3 font-semibold text-chlorophyll-tertiary transition-colors hover:text-chlorophyll-primary"
            >
              <Mail size={18} />
              Contact Me
              <span className="absolute bottom-1 left-2 right-2 h-[2px] origin-left scale-x-0 bg-chlorophyll-primary transition-transform group-hover:scale-x-100"></span>
            </a>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-chlorophyll-outline-variant/55 bg-chlorophyll-surface-high/50 px-4 py-4 backdrop-blur-lg"
              >
                <p className="text-2xl font-bold text-chlorophyll-on-surface">{item.value}</p>
                <p className="text-sm text-chlorophyll-on-surface-variant">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative h-80 w-72 md:h-[30rem] md:w-[25rem]">
            <div className="absolute inset-0 rotate-3 rounded-[2.2rem] border border-chlorophyll-primary/30 bg-gradient-to-br from-chlorophyll-primary-container/30 to-chlorophyll-tertiary/10 blur-[1px]"></div>
            <div className="absolute inset-0 z-10 overflow-hidden rounded-[2.2rem] border border-chlorophyll-outline-variant/65 bg-chlorophyll-surface-high p-3 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
              <div className="h-full w-full overflow-hidden rounded-[1.6rem]">
                <img
                  src={profileImg}
                  alt="Santhosh Sunkara - Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-10 z-20 flex items-center gap-3 rounded-2xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-highest/85 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-chlorophyll-primary-container/35 text-chlorophyll-primary">
                <Brain size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-chlorophyll-on-surface-variant">Focus</p>
                <p className="font-display text-sm font-semibold text-chlorophyll-on-surface">Deep Learning</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-10 bottom-24 z-20 flex items-center gap-3 rounded-2xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-highest/85 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-chlorophyll-secondary-container/35 text-chlorophyll-secondary">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-chlorophyll-on-surface-variant">Specialty</p>
                <p className="font-display text-sm font-semibold text-chlorophyll-on-surface">Computer Vision</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
