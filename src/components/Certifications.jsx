import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GoogleCloudLogo from '../../IMAGE/google-cloud.png';

const certificationsData = [
  {
    name: "Machine Learning Operations (MLOps) for Generative AI",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11270258"
  },
  {
    name: "Introduction to Vertex AI Studio",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11269094"
  },
  {
    name: "Create Image Captioning Models",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11267817"
  },
  {
    name: "Transformer Models and BERT Model",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11264871"
  },
  {
    name: "Encoder-Decoder Architecture",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11264103"
  },
  {
    name: "Attention Mechanism",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11263590"
  },
  {
    name: "Introduction to Image Generation",
    issuer: "Google Cloud",
    date: "Sep 11, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11262973"
  },
  {
    name: "Gemini for end-to-end SDLC",
    issuer: "Google Cloud",
    date: "Sep 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11226162"
  },
  {
    name: "Gemini for DevOps Engineers",
    issuer: "Google Cloud",
    date: "Sep 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11225883"
  },
  {
    name: "Gemini for Security Engineers",
    issuer: "Google Cloud",
    date: "Sep 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11224859"
  },
  {
    name: "Gemini for Network Engineers",
    issuer: "Google Cloud",
    date: "Sep 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11224362"
  },
  {
    name: "Gemini for Data Scientists and Analysts",
    issuer: "Google Cloud",
    date: "Sep 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11223945"
  },
  {
    name: "Gemini for Cloud Architects",
    issuer: "Google Cloud",
    date: "Sep 6, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/11202445"
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud",
    date: "Aug 19, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/10686803"
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "Aug 15, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/10600787"
  },
  {
    name: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "Aug 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/10479981"
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "Aug 8, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/10469487"
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Aug 2, 2024",
    verifyLink: "https://www.skills.google/public_profiles/b97527e0-fd88-4299-896f-66fa6547079c/badges/10329047"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chlorophyll-primary/7 blur-[140px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading title="Certifications" subtitle="My Google Skill Build Badges" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-chlorophyll-outline-variant/55 bg-chlorophyll-surface-high/55 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-chlorophyll-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-chlorophyll-outline-variant/60 bg-gradient-to-br from-chlorophyll-surface-high to-chlorophyll-surface p-2 transition-transform duration-300 group-hover:scale-105">
                <img src={GoogleCloudLogo} alt="Google Cloud" className="w-full h-full object-contain" />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="mb-2 font-display text-lg font-bold leading-tight text-chlorophyll-on-surface transition-colors group-hover:text-chlorophyll-primary">
                  {cert.name}
                </h3>

                <div className="mb-4 flex items-center gap-2 text-sm text-chlorophyll-on-surface-variant">
                  <span className="font-medium text-chlorophyll-secondary">{cert.issuer}</span>
                  <span className="h-1 w-1 rounded-full bg-chlorophyll-outline-variant"></span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                </div>
              </div>

              <div className="mt-auto border-t border-chlorophyll-outline-variant/40 pt-4">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-chlorophyll-on-surface-variant hover:text-chlorophyll-primary transition-colors group/link"
                >
                  Verify Credential
                  <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
