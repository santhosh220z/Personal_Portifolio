import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-chlorophyll-outline-variant/55 bg-chlorophyll-surface-high/55 pt-16 pb-8 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-chlorophyll-primary/45 bg-gradient-to-br from-chlorophyll-primary/30 to-chlorophyll-primary-container/35 shadow-[0_0_36px_rgba(175,209,136,0.25)]">
              <span className="font-display text-xs font-black text-chlorophyll-on-surface">SS</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-chlorophyll-on-surface">
              Santhosh Sunkara
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/santhosh220z" target="_blank" rel="noreferrer" className="rounded-full border border-chlorophyll-outline-variant/60 p-2 text-chlorophyll-on-surface-variant transition-all hover:border-chlorophyll-primary/50 hover:text-chlorophyll-primary">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/siva-sambhavi-santhosh-sunkara-588a24265/" target="_blank" rel="noreferrer" className="rounded-full border border-chlorophyll-outline-variant/60 p-2 text-chlorophyll-on-surface-variant transition-all hover:border-chlorophyll-primary/50 hover:text-chlorophyll-primary">
              <Linkedin size={20} />
            </a>
            <a href="mailto:santhoshsunkarasbe@gmail.com" className="rounded-full border border-chlorophyll-outline-variant/60 p-2 text-chlorophyll-on-surface-variant transition-all hover:border-chlorophyll-primary/50 hover:text-chlorophyll-primary">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-chlorophyll-outline-variant/50 pt-8 text-sm text-chlorophyll-on-surface-variant md:flex-row">
          <p>© {currentYear} Santhosh Sunkara. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase text-xs">Designed and built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
