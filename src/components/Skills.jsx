import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Code2, Cpu, Database, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="text-chlorophyll-primary" size={22} />,
      skills: ["Python", "Machine Learning", "Generative AI", "Prompt Engineering", "Deep Learning", "Predictive Analytics"],
      iconTone: 'bg-chlorophyll-primary/15 border-chlorophyll-primary/35',
      hoverBorder: 'hover:border-chlorophyll-primary/50'
    },
    {
      title: "Computer Vision",
      icon: <Layout className="text-chlorophyll-secondary" size={22} />,
      skills: ["OpenCV", "MediaPipe", "YOLO", "SSD", "Video Analysis", "Gesture Recognition"],
      iconTone: 'bg-chlorophyll-secondary/15 border-chlorophyll-secondary/35',
      hoverBorder: 'hover:border-chlorophyll-secondary/50'
    },
    {
      title: "Tools & Automation",
      icon: <Code2 className="text-chlorophyll-tertiary" size={22} />,
      skills: ["n8n Workflow Automation", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
      iconTone: 'bg-chlorophyll-tertiary/15 border-chlorophyll-tertiary/35',
      hoverBorder: 'hover:border-chlorophyll-tertiary/50'
    },
    {
      title: "Web Development",
      icon: <Database className="text-chlorophyll-primary" size={22} />,
      skills: ["HTML", "CSS", "Frontend (Intermediate)", "React"],
      iconTone: 'bg-chlorophyll-primary-container/35 border-chlorophyll-primary/35',
      hoverBorder: 'hover:border-chlorophyll-primary/50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-chlorophyll-primary/6 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading title="Technical Skills" subtitle="My Toolkit" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/55 p-6 shadow-[0_14px_45px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-colors ${category.hoverBorder}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`rounded-xl border p-3 ${category.iconTone}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-chlorophyll-on-surface">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface px-3 py-1.5 text-sm font-medium text-chlorophyll-on-surface-variant transition-colors hover:border-chlorophyll-primary/50 hover:text-chlorophyll-on-surface"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
