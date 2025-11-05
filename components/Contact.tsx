'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Contact.module.css'

const references = [
  {
    name: 'Gerald F. Davis',
    title: 'Professor of Management & Organizations',
    institution: 'Stephen M. Ross School of Business, University of Michigan',
    email: 'gfdavis@umich.edu'
  },
  {
    name: 'Brian Wu',
    title: 'Professor of Strategy',
    institution: 'Stephen M. Ross School of Business, University of Michigan',
    email: 'wux@umich.edu'
  },
  {
    name: 'Cheng Gao',
    title: 'Assistant Professor of Strategy',
    institution: 'Stephen M. Ross School of Business, University of Michigan',
    email: 'chenggao@umich.edu'
  },
  {
    name: 'Mark Mizruchi',
    title: 'Professor of Sociology',
    institution: 'College of Literature, Science and the Arts, University of Michigan',
    email: 'mizruchi@umich.edu'
  },
  {
    name: 'Priya Seetharaman',
    title: 'Professor of Management Information Systems',
    institution: 'Indian Institute of Management Calcutta',
    email: 'priyas@iimcal.ac.in'
  }
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>・CONTACT</span>
          <h2 className={styles.title}>GET IN TOUCH</h2>
        </motion.div>

        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.mainContact}>
            <motion.p 
              className={styles.message}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I'm always interested in discussing research collaborations, advisory opportunities, 
              and engaging with emerging researchers and entrepreneurs. Feel free to reach out!
            </motion.p>
            
            <div className={styles.contactMethods}>
              <motion.a
                href="mailto:contact@aseemsinha.com"
                className={styles.contactButton}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className={styles.icon}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </motion.span>
                <div>
                  <div className={styles.buttonLabel}>Email</div>
                  <div className={styles.buttonValue}>contact@aseemsinha.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/aseemsinha"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className={styles.icon}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"/>
                  </svg>
                </motion.span>
                <div>
                  <div className={styles.buttonLabel}>LinkedIn</div>
                  <div className={styles.buttonValue}>in/aseemsinha</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919910854466"
                className={styles.contactButton}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className={styles.icon}
                  whileHover={{ rotate: [0, 15, -15, 15, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                </motion.span>
                <div>
                  <div className={styles.buttonLabel}>Phone</div>
                  <div className={styles.buttonValue}>+91-9910854466</div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.referencesSection}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.referencesHeader}>
            <motion.h3 
              className={styles.referencesTitle}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Academic References
            </motion.h3>
            <motion.p 
              className={styles.referencesSubtitle}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Distinguished faculty members who can speak to my research and academic contributions
            </motion.p>
          </div>
          <div className={styles.references}>
            {references.map((ref, index) => (
              <motion.div
                key={index}
                className={styles.referenceCard}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(255, 179, 138, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={styles.refHeader}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={styles.refIconWrapper}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </motion.div>
                  <h4>{ref.name}</h4>
                </motion.div>
                <p className={styles.refTitle}>{ref.title}</p>
                <div className={styles.refInstitution}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/>
                  </svg>
                  <span>{ref.institution}</span>
                </div>
                <motion.a 
                  href={`mailto:${ref.email}`} 
                  className={styles.refEmail}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                  {ref.email}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>© 2025 Aseem Sinha. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  )
}
