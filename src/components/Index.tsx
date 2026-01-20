import { Navbar } from './Navbar'
import { ThemeToggle } from './ThemeToggle'
import Footer from './Footer'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Hero from './Hero'
import NeonSideEffects from './NeonSideEffects'
import Landing from './Landing'



export default function Index() {

  return (
    <div className="min-h-screen bg-lightbg dark:bg-darkbg text-lighttext dark:text-darktext antialiased relative">
      <NeonSideEffects />
      <div className="relative z-10">
        <Navbar />
        {/* Home Section */}
        <Landing />
        {/* About Section */}
        <Hero />
        {/* Experience Section */}
        <Experience />
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

