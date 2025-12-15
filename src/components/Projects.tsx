import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-xl border p-6 shadow-sm dark:border-neutral-800"
        >
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Your projects will be displayed here. This section is ready for your content.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
