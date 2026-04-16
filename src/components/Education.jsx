import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science Engineering (AIML)",
      institution: "Kakinada Institute of Engineering and Technology – II, Kakinada",
      period: "2022 - 2026",
      details: "CGPA: 7.44. Specialized in Artificial Intelligence, Machine Learning and deep neural networks.",
      courses: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms", "Computer Vision"]
    },
    {
      degree: "Intermediate – MPC",
      major: "Maths, Physics, Chemistry",
      institution: "GRC Modern Junior College, Ramachandrapuram",
      period: "2020 - 2022",
      details: "Focused on core science and mathematics subjects.",
      courses: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      major: "General Studies",
      institution: "Zilla Praja Parishad High School, Draksharama",
      period: "2019 - 2020",
      details: "Completed secondary education with strong academic performance.",
      courses: []
    }
  ];

  return (
    <section id="education" className="relative py-24">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:px-12">
        <SectionHeading title="Education" subtitle="Academic Background" />

        <div className="flex w-full max-w-4xl flex-col gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/55 p-8 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-chlorophyll-tertiary/14 blur-[80px] transition-transform duration-700 group-hover:scale-110"></div>

              <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row">
                <div className="flex-shrink-0 rounded-2xl border border-chlorophyll-tertiary/35 bg-chlorophyll-tertiary/12 p-4">
                  {index === 0 ? <GraduationCap size={34} className="text-chlorophyll-tertiary" /> : <BookOpen size={34} className="text-chlorophyll-tertiary" />}
                </div>

                <div className="flex-1 w-full">
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-chlorophyll-on-surface">{edu.degree}</h3>
                      <h4 className="mb-1 text-xl font-medium text-chlorophyll-secondary">{edu.major}</h4>
                      <p className="text-sm text-chlorophyll-on-surface-variant">{edu.institution}</p>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-xl border border-chlorophyll-outline-variant/70 bg-chlorophyll-surface px-3 py-1.5 text-sm font-medium text-chlorophyll-on-surface-variant">
                      <Calendar size={16} className="text-chlorophyll-tertiary" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="mb-6 max-w-2xl leading-relaxed text-chlorophyll-on-surface-variant">
                    {edu.details}
                  </p>

                  {edu.courses.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface px-3 py-1.5 text-center text-sm text-chlorophyll-on-surface-variant"
                        >
                          {course}
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

export default Education;
