import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Experience = () => {
  const experiences = [
    {
      role: "Google AI-ML Virtual Internship",
      company: "Google",
      period: "2024 - 2025",
      description: "Completed an immersive virtual internship focused on Artificial Intelligence and Machine Learning concepts, algorithms, and real-world applications.",
      skills: ["Artificial Intelligence", "Machine Learning", "Algorithms"]
    },
    {
      role: "Intern",
      company: "Edunet Foundation",
      period: "2024 - 2025",
      description: "Developed a real-time hand sign recognition system using Python, OpenCV, and Mediapipe to improve gesture interpretation and communication accessibility.",
      skills: ["Python", "OpenCV", "Mediapipe", "Computer Vision"]
    }
  ];

  return (
    <section id="experience" className="relative z-10 flex w-full flex-col items-center py-24">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:px-12">
        <SectionHeading title="Experience" subtitle="Professional Journey" />

        <div className="relative flex w-full max-w-4xl flex-col gap-8">
          <div className="pointer-events-none absolute left-6 top-10 hidden h-[calc(100%-4.5rem)] w-[2px] bg-gradient-to-b from-chlorophyll-primary/50 via-chlorophyll-secondary/30 to-transparent md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/50 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.26)] backdrop-blur-xl md:p-9"
            >
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-chlorophyll-primary/12 blur-[80px] transition-transform duration-700 group-hover:scale-110"></div>

              <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row">
                <div className="flex-shrink-0 rounded-2xl border border-chlorophyll-primary/35 bg-chlorophyll-primary-container/20 p-4">
                  <Briefcase size={34} className="text-chlorophyll-primary" />
                </div>

                <div className="flex-1 w-full">
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-chlorophyll-on-surface">{exp.role}</h3>
                      <h4 className="text-xl font-medium text-chlorophyll-secondary">{exp.company}</h4>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-xl border border-chlorophyll-outline-variant/70 bg-chlorophyll-surface px-3 py-1.5 text-sm font-medium text-chlorophyll-on-surface-variant">
                      <Calendar size={16} className="text-chlorophyll-primary" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="mb-6 max-w-2xl leading-relaxed text-chlorophyll-on-surface-variant">
                    {exp.description}
                  </p>

                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface px-3 py-1.5 text-center text-sm text-chlorophyll-on-surface-variant"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
