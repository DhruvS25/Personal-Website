import { Navbar } from './Navbar'
import { ThemeToggle } from './ThemeToggle'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Hero from './Hero'
import NeonSideEffects from './NeonSideEffects'



export default function Index() {

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased relative">
      <NeonSideEffects />
      <div className="relative z-10">
        <Navbar />
        {/* Home Section */}
        <About />
        {/* About Section */}
        <Hero />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />
        <ThemeToggle />
        <Footer />
      </div>
    </div>
  )
}

