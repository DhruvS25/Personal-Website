import { motion } from 'framer-motion';


const experiences = [
  {
    position: 'Software Developer',
    company: 'AIR Studio',
    location: 'Toronto, Canada',
    period: 'December 2024 - September 2025',
    type: 'Hybrid',
    technologies: ['React', 'AI/ML', 'LLMs', 'TypeScript', 'Full Stack'],
    description: 'Developed and deployed 3+ scalable applications used by more than 30 clients, integrating AI and large language models across various platforms including fintech.',
    highlights: [
      'AI-Powered Virtual Try-On Web App that increased user engagement by 60% in internal testing',
      'Streaming Integration for Proprietary LLMs',
      'Crypto Trading Platform Enhancements',
      'Deployed scalable applications serving 30+ clients across diverse industries'
    ]
  },
  {
    position: 'Freelance AI Model Evaluator',
    company: 'Outlier AI',
    location: 'Remote, Canada',
    period: 'October 2024 - May 2025',
    type: 'Freelance',
    technologies: ['AI Evaluation', 'LLMs', 'Prompt Engineering', 'Code Review'],
    description: 'Enhanced the performance of cutting-edge generative AI models by providing expert human feedback and evaluation.',
    highlights: [
      'Refined AI-driven coding capabilities through expert evaluation',
      'Improved language model outputs across diverse use cases',
      'Engaged in diverse projects focused on generative AI enhancement'
    ]
  },
  {
    position: 'Backend Developer',
    company: 'Secure Authorities',
    location: 'Remote, Canada',
    period: 'May 2023 - August 2023',
    type: 'Contract',
    technologies: ['TypeScript', 'MySQL', 'Prisma', 'T3 Stack', 'E-commerce'],
    description: 'Designed and fully implemented the database for an e-commerce website using modern T3 Stack technologies.',
    highlights: [
      'Designed and implemented database architecture using TypeScript, MySQL, and Prisma',
      'Learned effective workflow and communication practices for time-sensitive company projects',
      'Built robust backend infrastructure for e-commerce platform'
    ]
  }
];

export default function Experience() {
  type Experience = {
    position: string;
    company: string;
    location: string;
    period: string;
    type: string;
    technologies: string[];
    description: string;
    highlights: string[];
  };

  const renderExperienceCard = (exp: Experience, index: number) => {
    return (
      <motion.div
        key={exp.company}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
        className="rounded-xl border border-lightprimary/30 dark:border-darkprimary/30 bg-lightbg dark:bg-darkbg hover:shadow-lg transition-shadow overflow-hidden p-4 sm:p-6"
      >
        {/* Header with Position and Company */}
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-lighttext dark:text-darktext mb-1">
            {exp.position}
          </h3>
          <p className="text-sm sm:text-base text-lighttext/80 dark:text-darktext/80 font-semibold">
            {exp.company}, {exp.type}
          </p>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-3 mb-4">
          <p className="text-xs sm:text-sm text-lighttext dark:text-darktext">
            <span className="font-semibold">{exp.period}</span>
          </p>
          <p className="text-xs sm:text-sm text-lighttext dark:text-darktext">
            {exp.location}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {exp.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded-md bg-lightaccent/20 dark:bg-darkaccent/20 text-lightaccent dark:text-darkaccent text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-lighttext dark:text-darktext leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Key Highlights */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-lighttext dark:text-darktext">
            Key Highlights:
          </h4>
          <ul className="list-disc list-inside space-y-2">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx} className="text-sm text-lighttext dark:text-darktext leading-relaxed">{highlight}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-oxanium font-bold text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-lightprimary dark:text-darkprimary">Experience</h2>
          <p className="text-lighttext dark:text-darktext text-base sm:text-lg px-4">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            return renderExperienceCard(exp, index);
          })}
        </div>
      </div>
    </section>
  );
}
