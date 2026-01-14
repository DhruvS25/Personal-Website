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
    ]
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
    ]
  }
];

// Personal Projects - Template cards for you to fill in
// Optional: Add media property if you have a video or image:
// media: { type: 'youtube', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' }
const personalProjects = [
  {
    title: 'Project Name 1',
    date: 'Date',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    description: 'Description of your project goes here. Explain what the project is about, what problem it solves, and any key features.',
    achievements: [
      'Achievement or feature 1',
      'Achievement or feature 2',
      'Achievement or feature 3'
    ]
  },
  {
    title: 'Project Name 2',
    date: 'Date',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    description: 'Description of your project goes here. Explain what the project is about, what problem it solves, and any key features.',
    achievements: [
      'Achievement or feature 1',
      'Achievement or feature 2',
      'Achievement or feature 3'
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

  const renderProjectCard = (project: typeof projects[0], index: number, isExpanded: boolean, toggleFn: (index: number) => void) => {
    return (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
        className="rounded-xl border dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow overflow-hidden"
      >
        {/* Collapsed View - Resume Style */}
        <div
          onClick={() => toggleFn(index)}
          className="p-6 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                {project.date}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs"
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
              <div className="px-6 pb-6 border-t dark:border-neutral-800 pt-6 space-y-6">
                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
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
                  <h4 className="text-sm font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
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
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
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
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
            Personal Projects
          </h3>
          <div className="space-y-4">
            {personalProjects.map((project, index) => {
              const isExpanded = expandedPersonalIndex === index;
              return renderProjectCard(project, index, isExpanded, togglePersonalExpand);
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
