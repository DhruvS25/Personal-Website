import { motion } from 'framer-motion';
import ProfilePic from '../assets/Portfolio_img.jpg'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-orange-950 via-black-950 to-blue-900">
      <div className="mx-auto max-w-6xl w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white-400 mb-4">About Me</h1>
          <p className="text-white text-lg md:text-xl">A passionate software engineer with a love for creating innovative solutions</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col md:flex-row items-start gap-8 mb-8"
        >
          {/* Profile Image */}
          <div className="w-full md:w-1/2">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400">Building the Future, One Line at a Time</h2>
            
            <div className="text-white">
              <p className="text-base md:text-lg leading-relaxed">
                I recently graduated from Western University with a Bachelor's in Software Engineering, where I made the Dean's Honor List.
                Since then, I've worked as a Software Developer at AIR Studio, where I built and deployed scalable applications used by over 30 clients,
                including fintech and AI-driven tools. I've also worked as an AI Model Evaluator at Outlier, refining generative AI models, and
                previously as a Backend Developer at Secure Authorities, where I built an e-commerce database system from scratch.
                I'm passionate about intelligent systems and product-focused software engineering, and I've built and applied my knowledge in AI projects, such as B.A.I.T.,
                which was my capstone project completed in partnership with Bell Canada.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">Quick Highlights</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-purple-900/50 border border-purple-700 text-white text-sm md:text-base">
                  Computer Science Graduate
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-900/50 border border-purple-700 text-white text-sm md:text-base">
                  3+ Years Game Development
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-900/50 border border-purple-700 text-white text-sm md:text-base">
                  AI/ML Enthusiast
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-900/50 border border-purple-700 text-white text-sm md:text-base">
                  Open Source Contributor
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <div className="bg-purple-800/40 rounded-xl p-6 max-w-2xl border border-purple-700/50">
            <p className="text-white text-base md:text-lg italic leading-relaxed">
              "The best way to predict the future is to create it. I'm here to build the games and AI systems that will shape tomorrow's digital experiences."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
