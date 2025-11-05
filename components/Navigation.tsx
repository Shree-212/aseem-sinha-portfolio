'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navigation.module.css'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.slice(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}>
              <span className={styles.logoFirst}>ASEEM</span>
              <span className={styles.logoLast}>SINHA</span>
            </a>
          </motion.div>

          <ul className={styles.navList}>
            {navItems.slice(1).map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={activeSection === item.href.slice(1) ? styles.active : ''}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className={styles.menuIcon}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? styles.open : ''}></span>
            <span className={mobileMenuOpen ? styles.open : ''}></span>
            <span className={mobileMenuOpen ? styles.open : ''}></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileMenuContent}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={activeSection === item.href.slice(1) ? styles.activeMobile : ''}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className={styles.mobileNumber}>0{index + 1}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
