import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    ]
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

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-6xl w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isBellAI = project.title === 'Bell Artificial Intelligence Technician';
            
            const cardContent = (
              <>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    {project.date}
                  </p>
                </div>

                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t dark:border-neutral-800">
                  <h4 className="text-xs font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
                    Technologies:
                  </h4>
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
              </>
            );
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                className={`rounded-xl border p-6 shadow-sm dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow ${isBellAI ? 'cursor-pointer hover:border-purple-500 dark:hover:border-purple-500' : ''}`}
              >
                {isBellAI ? (
                  <Link to="/projects/bell-ai-technician" className="block">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
