'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>・ABOUT</span>
          <h2 className={styles.title}>BIO</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.mainText}>
            <p className={styles.highlight}>
              I study how technology and institutions shape the organization of economic activity across diverse contexts.
            </p>
            
            <p>
              My work draws on <strong>Economic Sociology</strong>, <strong>History</strong>, and <strong>Computer Science</strong> to examine how technological disruptions unfold unevenly across institutional environments.
            </p>

            <p>
              My published research shows how the same technology embeds differently within institutional settings, generating distinct patterns of organizing—which, in turn, shape business models, competitive dynamics, and the effectiveness of policy interventions.
            </p>

            <p>
              Before entering academia, I worked across engineering technology, healthcare, and consumer finance. This experience informs both my advisory work with startups and educational institutions, and my engagement with emerging researchers, entrepreneurs, and professionals seeking to build meaningful careers.
            </p>
          </div>

          <div className={styles.sideInfo}>
            <div className={styles.infoCard}>
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Ph.D. in Strategy</strong>
                  <span>University of Michigan</span>
                </li>
                <li>
                  <strong>MBA</strong>
                  <span>IIM Calcutta</span>
                </li>
                <li>
                  <strong>B.S. Electrical Engineering</strong>
                  <span>St. Mary's University</span>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>Research Areas</h3>
              <div className={styles.tags}>
                <span>Entrepreneurship</span>
                <span>Organization Theory</span>
                <span>Strategy</span>
                <span>Technology & Society</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3>Contact</h3>
              <a href="mailto:contact@aseemsinha.com" className={styles.email}>
                contact@aseemsinha.com
              </a>
              <a href="https://linkedin.com/in/aseemsinha" className={styles.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Degrees</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>Multiple</div>
            <div className={styles.statLabel}>Publications</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>Global</div>
            <div className={styles.statLabel}>Impact</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
