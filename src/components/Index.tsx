import { Navbar } from './Navbar'
import { ThemeToggle } from './ThemeToggle'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Hero from './Hero'



export default function Index() {

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
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
  )
}

