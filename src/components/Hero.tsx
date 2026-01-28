import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oxanium font-bold text-lightprimary dark:text-darkprimary mb-4">About Me</h1>
          <p className="text-lighttext dark:text-darktext text-base sm:text-lg md:text-xl px-4">A passionate software engineer with a love for creating innovative solutions</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 mb-8 sm:mb-8"
        >
          {/* Profile Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/Portfolio_img.jpg"
              alt="Profile"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-5/8 space-y-4 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lighttext dark:text-darktext">Building the Future, One Line at a Time</h2>
            
            <div className="text-lighttext dark:text-darktext">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Hi, I’m Dhruv Sagre, a Software Engineering graduate from Western University and a former Software Developer
                at AIR Studio. I specialize in full-stack development with a strong focus on AI/ML-powered applications and scalable 
                web technologies. My recent work includes building an AI-driven virtual try-on platform and implementing real-time streaming systems
                for proprietary language models—projects that strengthened my passion for creating intelligent, user-centric software.

                I thrive in collaborative, multidisciplinary environments where technology meets real-world impact, and I’m especially
                motivated by opportunities that blend innovation with thoughtful design. Outside of work, I enjoy volleyball,
                weightlifting, gaming, and game development, and I’ve always been driven by a long-term goal to build meaningful, 
                innovative products that people genuinely love to use.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="mt-6 sm:mt-8 flex justify-center"
              >
              <div className="bg-lightprimary/10 dark:bg-darkprimary/10 rounded-xl p-4 sm:p-6 max-w-2xl border border-lightprimary/50 dark:border-darkprimary/50 w-full sm:w-auto">
                <p className="text-lighttext dark:text-darktext text-sm sm:text-base md:text-lg italic leading-relaxed">
                  "One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man." - Elbert Hubbard 
                </p>
              </div>
            </motion.div>

          </div>

        {/* Quick Highlights */}
        </motion.div>
        <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-lighttext dark:text-darktext mb-3 sm:mb-4">Quick Highlights</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  Software Engineering Graduate
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  3+ Years Fullstack Development
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  AI/ML Enthusiast
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  React Developer
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  Database Creation & Management
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  Game Development
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  Python
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lightprimary/20 dark:bg-darkprimary/20 border border-lightprimary/50 dark:border-darkprimary/50 text-lighttext dark:text-darktext text-xs sm:text-sm md:text-base">
                  Customer Focused Solutions
                </span>
              </div>
            </div>
      </div>
    </section>
  );
}
