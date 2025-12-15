import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import siteLogoLight from '../assets/site_logo.PNG'
import siteLogoDark from '../assets/Sitelogotest.jpg'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick(e: React.MouseEvent<HTMLElement>, href: string) {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-900/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg'
            : 'bg-neutral-900/60 dark:bg-neutral-950/60 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Left */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Dark mode logo */}
              <img
                src={siteLogoDark}
                alt="Logo"
                className="h-12 w-auto object-contain hidden dark:block"
              />
              {/* Light mode logo */}
              <img
                src={siteLogoLight}
                alt="Logo"
                className="h-8 w-auto object-contain block dark:hidden"
              />
            </motion.a>

            {/* Nav Links - Center (Desktop) */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bordered Button - Right (Desktop) */}
            <div className="hidden md:block">
              <motion.button
                onClick={(e) => handleNavClick(e, '#contact')}
                className="rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Hamburger Menu - Mobile */}
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-neutral-900/95 dark:bg-neutral-950/95 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-base font-medium text-neutral-300 transition-colors hover:text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                  initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  )
}

