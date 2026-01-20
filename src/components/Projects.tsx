import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const projects = [
  {
    title: 'Bell Artificial Intelligence Technician',
    date: 'March 2024',
    technologies: ['Python', 'PyTorch', 'Numpy', 'Angular', 'Typescript', 'GCP', 'NoSQL'],
    description: 'B.A.I.T. is a tool for Bell technicians and customers which allows them to resolve issues related to billing, routers, BELL software, products and more.',
    achievements: [
      'Created NLP model achieving 80% accuracy in intent recognition across 4 integrated AI subsystems',
      'Integrated billing parser, documentation identifier, image classification, and image captioning models',
      'Designed NLP model that gathered data and created relevant queries for tech-support solutions'
    ],
    media: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/xYl0aiNbgQg?si=-Ax3c0Rojj8fqQeB'
    }
  },
  {
    title: 'Screen Sight',
    date: 'March 2024',
    technologies: ['Python', 'Jupyter', 'Computer Vision', 'Augmented Reality', 'Virtual Reality'],
    description: 'Screen Sight is a tool I envisioned along with a group to address the current limitations of pass-through mode in modern virtual reality (VR) headsets. Mainly when using devices such as a smartphone.',
    achievements: [
      'Implemented masking techniques using AI to help mask where the smartphone is on the video feed of the VR headset',
      'Positioned phone screen overlay on top of the phone for enhanced VR experience'
    ],
    media: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/cNDiibXy4fQ?si=Mxd4n6Qk4sS7DWC6'
    }
  },
  {
    title: 'UWOutlines',
    date: 'April 2023',
    technologies: ['Angular', 'JavaScript', 'MySQL', 'OpenAI API', 'Node.js', 'Back-End Web Development'],
    description: 'UWOutlines is robust web-app for editing and managing university course outlines, created for use by faculty and administrators at the University of Western Ontario.',
    achievements: [
      'Led the backend development of the web-app',
      'Designed and implemented RESTful APIs',
      'Managed user authentication and permissions',
      'Integrated ChatGPT with the editing system',
      'Built infrastructure for feedback, notification, and requisite management systems',
      'Ensured data security, system reliability, and maintainability'
    ],
    media: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/WsDy3XwIQYc?si=g1RHECSucNPCumSD'
    }
  }
];

// Personal Projects - Template cards
const personalProjects = [
  {
    title: 'Godspeed',
    date: 'August 2025 - Present',
    technologies: ['Unity', 'C#', '3D Graphics', 'Blender', 'Game Development', 'UI/UX Design'],
    description: 'Godspeed is a 3D racing game deeloped in Unity, where the player controls a character with unique abilities to race against other players in a competitive environment.',
    achievements: [
      'Developed a custom physics based movement system for the player character',
      'Created custom abilities for the player character and VFX for the abilities',
      'Created unique track design and obstacles for the game'
    ]
  },
  {
    title: 'Shoppers Stop St.Maarten Website',
    date: 'August 2024 - December 2024',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML/CSS', 'E-commerce Development', 'UI/UX Design'],
    description: 'Developed a comprehensive e-commerce website for Shoppers Stop St.Maarten, a souvenir and print store in St.Maarten, to enhance their online presence and sales capabilities.',
    achievements: [
      'Designed and implemented a user-friendly interface that reflects the brand identity',
      'Created a seamless ordering experience to make the printing seamless for customers',
      'Optimized the website for performance and mobile responsiveness'
    ]
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedPersonalIndex, setExpandedPersonalIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const togglePersonalExpand = (index: number) => {
    setExpandedPersonalIndex(expandedPersonalIndex === index ? null : index);
  };

  type Project = {
    title: string;
    date: string;
    technologies: string[];
    description: string;
    achievements: string[];
    media?: { type: string; url: string };
  };

  const renderProjectCard = (project: Project, index: number, isExpanded: boolean, toggleFn: (index: number) => void) => {
    return (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
        className="rounded-xl border border-lightprimary/30 dark:border-darkprimary/30 bg-lightbg dark:bg-darkbg hover:shadow-lg transition-shadow overflow-hidden"
      >
        {/* Collapsed View - Resume Style */}
        <div
          onClick={() => toggleFn(index)}
          className="p-4 sm:p-6 cursor-pointer hover:bg-lightbg/80 dark:hover:bg-darkbg/80 transition-colors"
        >
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-lighttext dark:text-darktext break-words">
                  {project.title}
                </h3>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-lighttext dark:text-darktext flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-lighttext dark:text-darktext flex-shrink-0" />
                )}
              </div>
              <p className="text-xs sm:text-sm text-lighttext dark:text-darktext mb-3">
                {project.date}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md bg-lightaccent/20 dark:bg-darkaccent/20 text-lightaccent dark:text-darkaccent text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-lightprimary/30 dark:border-darkprimary/30 pt-4 sm:pt-6 space-y-4 sm:space-y-6">
                {/* Description */}
                <p className="text-sm sm:text-base text-lighttext dark:text-darktext leading-relaxed">
                  {project.description}
                </p>

                {/* Media */}
                {project.media && project.media.type === 'youtube' && (
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={project.media.url}
                      title={`${project.title} video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-lighttext dark:text-darktext">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-lighttext dark:text-darktext leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-lighttext dark:text-darktext">Projects</h2>
          <p className="text-lighttext dark:text-darktext text-base sm:text-lg px-4">
            A collection of my recent work and contributions
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            return renderProjectCard(project, index, isExpanded, toggleExpand);
          })}
        </div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-light-text dark:text-dark-text">
            Personal Projects
          </h3>

        </motion.div>          
        
        <div className="space-y-4">
            {personalProjects.map((project, index) => {
              const isExpanded = expandedPersonalIndex === index;
              return renderProjectCard(project, index, isExpanded, togglePersonalExpand);
            })}
        </div>

      </div>
    </section>
  );
}
