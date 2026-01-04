import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { ThemeToggle } from './ThemeToggle';

export default function BellAITechnician() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-4xl w-full">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Bell Artificial Intelligence Technician
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-6">
              March 2024
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              B.A.I.T. is a comprehensive tool for Bell technicians and customers which allows them to resolve issues related to billing, routers, BELL software, products and more. This AI-powered system integrates multiple machine learning models to provide intelligent support and troubleshooting capabilities.
            </p>
          </motion.div>

          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/xYl0aiNbgQg?si=-Ax3c0Rojj8fqQeB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
              Key Achievements
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                <div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Created NLP model achieving <strong>80% accuracy</strong> in intent recognition across 4 integrated AI subsystems
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    The model was trained on a diverse dataset of customer queries and support tickets, enabling accurate classification of user intents across different problem domains.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                <div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Integrated billing parser, documentation identifier, image classification, and image captioning models
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    Successfully orchestrated multiple AI models to work in harmony, allowing the system to process various types of input including text, images, and structured data.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                <div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Designed NLP model that gathered data and created relevant queries for tech-support solutions
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    The intelligent query generation system automatically formulates search queries based on user input, significantly improving the relevance of retrieved solutions.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
              Technical Implementation
            </h2>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 border dark:border-neutral-800">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                Architecture & Components
              </h3>
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <div>
                    <strong>NLP Intent Recognition System:</strong> Built using PyTorch, processing natural language queries to identify user intent with high accuracy
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <div>
                    <strong>Billing Parser:</strong> Automated extraction and analysis of billing information from various document formats
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <div>
                    <strong>Documentation Identifier:</strong> AI-powered system to match user queries with relevant technical documentation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <div>
                    <strong>Image Classification & Captioning:</strong> Computer vision models for analyzing and describing images related to technical issues
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <div>
                    <strong>Frontend Interface:</strong> Angular and TypeScript-based user interface for technicians and customers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <div>
                    <strong>Cloud Infrastructure:</strong> Deployed on Google Cloud Platform with NoSQL database for scalable data storage
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Python', 'PyTorch', 'Numpy', 'Angular', 'Typescript', 'GCP', 'NoSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
              Impact & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-200">
                  Improved Efficiency
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Reduced average resolution time for customer issues by automating the initial diagnosis and solution retrieval process.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-200">
                  Enhanced Accuracy
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  The 80% accuracy rate in intent recognition ensures that users are directed to the most relevant solutions quickly.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-200">
                  Multi-Modal Support
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Integration of text, image, and structured data processing provides comprehensive support capabilities.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-lg mb-2 text-purple-900 dark:text-purple-200">
                  Scalable Architecture
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Built on GCP with NoSQL database, ensuring the system can handle increasing load and data volume.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeToggle />
      <Footer />
    </div>
  );
}
