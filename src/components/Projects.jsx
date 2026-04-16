import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const projects = [
    {
      title: "Deepfake Detection Model",
      description: "Deep learning model to detect manipulated videos and images using CNN architecture and image preprocessing techniques.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/santhosh220z/Deepfake-Detection",
      impact: "Computer Vision"
    },
    {
      title: "Hand Gesture Recognition",
      description: "Real-time gesture recognition system using MediaPipe and TensorFlow to classify hand gestures from live camera input.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
      github: "https://github.com/santhosh220z",
      impact: "Assistive AI"
    },
    {
      title: "AI Chatbot using DeepSeek-R1",
      description: "AI chatbot using the DeepSeek-R1 model from Hugging Face with conversation history and web interface.",
      technologies: ["Python", "Hugging Face", "HTML", "CSS"],
      github: "https://github.com/santhosh220z",
      impact: "Generative AI"
    },
    {
      title: "Stroke Prediction System",
      description: "Machine learning model predicting stroke risk based on medical dataset features using classification algorithms.",
      technologies: ["Python", "Scikit-learn"],
      github: "https://github.com/santhosh220z",
      impact: "Healthcare ML"
    }
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <div className="grid gap-8 pt-8 md:grid-cols-2 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/50 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-chlorophyll-primary/45 hover:shadow-[0_20px_55px_rgba(0,0,0,0.3)] ${idx % 2 !== 0 ? 'md:mt-14' : ''}`}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-chlorophyll-primary via-chlorophyll-secondary to-chlorophyll-tertiary"></div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-8 flex items-start justify-between">
                  <div className="rounded-2xl border border-chlorophyll-primary/35 bg-chlorophyll-primary-container/20 p-3 text-chlorophyll-primary transition-colors group-hover:bg-chlorophyll-primary-container/35">
                    <Code2 size={24} />
                  </div>

                  <div className="flex items-center gap-3 text-chlorophyll-on-surface-variant">
                    <span className="rounded-full border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-chlorophyll-secondary">
                      {project.impact}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface p-2 transition-colors hover:text-chlorophyll-primary"
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </div>

                <h3 className="mb-4 font-display text-2xl font-bold text-chlorophyll-on-surface transition-all group-hover:bg-gradient-to-r group-hover:from-chlorophyll-primary group-hover:to-chlorophyll-tertiary group-hover:bg-clip-text group-hover:text-transparent md:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-10 flex-1 leading-relaxed text-chlorophyll-on-surface-variant">
                  {project.description}
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex max-w-[74%] flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-full border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface px-3 py-1 text-xs font-semibold text-chlorophyll-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-chlorophyll-outline-variant opacity-50 transition-colors group-hover:text-chlorophyll-primary group-hover:opacity-100">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://github.com/santhosh220z"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/60 px-8 py-4 font-display font-semibold text-chlorophyll-on-surface transition-all hover:-translate-y-0.5 hover:border-chlorophyll-primary/45 hover:text-chlorophyll-primary"
          >
            View more on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
