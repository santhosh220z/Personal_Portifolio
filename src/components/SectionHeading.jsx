import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-chlorophyll-outline-variant/70 bg-chlorophyll-surface-high/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-chlorophyll-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-chlorophyll-primary"></span>
          {subtitle}
        </span>

        <h2 className="mt-5 bg-gradient-to-r from-chlorophyll-on-surface via-chlorophyll-primary to-chlorophyll-tertiary bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
          {title}
        </h2>

        <div className="mx-auto mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-chlorophyll-primary via-chlorophyll-secondary to-chlorophyll-tertiary shadow-[0_0_30px_rgba(175,209,136,0.4)]" />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
