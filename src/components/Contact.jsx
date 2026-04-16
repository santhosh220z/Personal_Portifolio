import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const contactItems = [
    {
      label: 'Email',
      value: 'santhoshsunkarasbe@gmail.com',
      href: 'mailto:santhoshsunkarasbe@gmail.com',
      icon: <Mail className="text-chlorophyll-primary" size={26} />,
      tone: 'bg-chlorophyll-primary/15 border-chlorophyll-primary/35'
    },
    {
      label: 'LinkedIn',
      value: 'santhosh sunkara',
      href: 'https://www.linkedin.com/in/siva-sambhavi-santhosh-sunkara-588a24265/',
      icon: <Linkedin className="text-chlorophyll-secondary" size={26} />,
      tone: 'bg-chlorophyll-secondary/15 border-chlorophyll-secondary/35'
    },
    {
      label: 'GitHub',
      value: '@santhosh220z',
      href: 'https://github.com/santhosh220z',
      icon: <Github className="text-chlorophyll-tertiary" size={26} />,
      tone: 'bg-chlorophyll-tertiary/15 border-chlorophyll-tertiary/35'
    }
  ];

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:px-12">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="mx-auto mt-8 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-10 text-center"
          >
            <div className="rounded-3xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/55 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-12">
              <h3 className="mb-4 font-display text-3xl font-bold text-chlorophyll-on-surface">Let's build something meaningful</h3>
              <p className="mx-auto max-w-2xl leading-relaxed text-chlorophyll-on-surface-variant">
                I'm currently looking for new opportunities in AI/ML engineering, research roles, 
                and software development. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="grid w-full gap-6 md:grid-cols-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex flex-col items-center gap-4 rounded-3xl border border-chlorophyll-outline-variant/60 bg-chlorophyll-surface-high/50 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-1 hover:border-chlorophyll-primary/45 hover:bg-chlorophyll-surface-highest/65"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors ${item.tone}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-chlorophyll-on-surface-variant">{item.label}</div>
                    <div className="font-medium text-chlorophyll-on-surface">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
