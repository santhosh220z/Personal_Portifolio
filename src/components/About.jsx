import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Brain, Code, Cpu, LineChart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="text-chlorophyll-primary" size={22} />,
      title: "Deep Learning",
      description: "Building robust neural networks for practical pattern recognition.",
      tone: 'bg-chlorophyll-primary/15 border-chlorophyll-primary/35'
    },
    {
      icon: <Cpu className="text-chlorophyll-secondary" size={22} />,
      title: "Computer Vision",
      description: "Designing image and video intelligence pipelines with measurable impact.",
      tone: 'bg-chlorophyll-secondary/15 border-chlorophyll-secondary/35'
    },
    {
      icon: <LineChart className="text-chlorophyll-tertiary" size={22} />,
      title: "Predictive Analytics",
      description: "Transforming datasets into forecasts and decision-ready insights.",
      tone: 'bg-chlorophyll-tertiary/15 border-chlorophyll-tertiary/35'
    },
    {
      icon: <Code className="text-chlorophyll-primary" size={22} />,
      title: "AI Systems",
      description: "Shipping full-stack products with integrated machine learning workflows.",
      tone: 'bg-chlorophyll-primary-container/35 border-chlorophyll-primary/30'
    }
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="Profile" />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/45 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
          >
            <h3 className="mb-4 font-display text-3xl font-bold text-chlorophyll-on-surface">
              AI and ML enthusiast with a product mindset
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-chlorophyll-on-surface-variant">
              I am an AI/ML enthusiast with intermediate-level Python expertise and experience in deep learning, computer vision, and real-time AI systems. My recent internships at Google AI-ML and Edunet Foundation have solidified my passion for building intelligent, real-world solutions.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-chlorophyll-on-surface-variant">
              Currently pursuing my B.Tech in Computer Science Engineering (AIML) at KIET, I enjoy leveraging tools like OpenCV, MediaPipe, and Generative AI patterns to bridge the gap between theoretical concepts and practical applications.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-chlorophyll-outline-variant/55 bg-chlorophyll-surface p-4">
                <div className="mb-1 bg-gradient-to-r from-chlorophyll-primary to-chlorophyll-secondary bg-clip-text text-3xl font-black text-transparent">
                  10+
                </div>
                <div className="text-sm font-medium text-chlorophyll-on-surface-variant">AI Projects</div>
              </div>
              <div className="rounded-2xl border border-chlorophyll-outline-variant/55 bg-chlorophyll-surface p-4">
                <div className="mb-1 bg-gradient-to-r from-chlorophyll-tertiary to-chlorophyll-secondary bg-clip-text text-3xl font-black text-transparent">
                  4+
                </div>
                <div className="text-sm font-medium text-chlorophyll-on-surface-variant">Frameworks</div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 items-start">
                <span className="min-w-28 text-sm font-medium text-chlorophyll-primary">Languages</span>
                <span className="text-sm text-chlorophyll-on-surface-variant">English, Telugu, Hindi</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="min-w-28 text-sm font-medium text-chlorophyll-secondary">Certifications</span>
                <span className="text-sm text-chlorophyll-on-surface-variant">Edunet Foundation, AICTE, Google AIML, Prompt Engineering, Python Full Stack, Basics of Generative AI, Basics of DevOps, Basics of Python</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="min-w-28 text-sm font-medium text-chlorophyll-tertiary">Awards</span>
                <span className="text-sm text-chlorophyll-on-surface-variant">Selected for Regional Round at Edunet - Sign Speak: The Silent Communicator</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/45 p-6 transition-all hover:border-chlorophyll-primary/45 hover:bg-chlorophyll-surface-highest/60"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-110 ${feature.tone}`}>
                  {feature.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-chlorophyll-on-surface">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-chlorophyll-on-surface-variant">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
