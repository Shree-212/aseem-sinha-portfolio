'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Research.module.css'

const publications = [
  {
    title: 'Varieties of Uberization',
    subtitle: 'How technology and institutions change the organization(s) of late capitalism',
    authors: 'Davis, G. F. and Sinha, A.',
    year: '2021',
    journal: 'Organization Theory',
    volume: '2(1)',
    type: 'Published',
    color: 'pink'
  }
]

const workInProgress = [
  {
    title: 'Varieties of Financialization',
    subtitle: 'How stock exchanges metricized capital markets in the neoliberal decades',
    authors: 'With Gerald Davis',
    status: 'Working paper',
    color: 'purple'
  },
  {
    title: 'Varieties of Disintermediation',
    subtitle: 'Artificial intelligence, control, and coordination in the multipolar era',
    status: 'Model development',
    color: 'blue'
  }
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className={styles.research} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>・RESEARCH</span>
          <h2 className={styles.title}>SCHOLARLY WORK</h2>
        </motion.div>

        <motion.div
          className={styles.summary}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.summaryText}>
            I study the interplay of technology and society using a multidisciplinary approach. My research examines how information and communication technologies (ICTs) plug into the institutional landscape, changing how economic agents access and recruit key resources.
          </p>
          <p>
            Institutions and technologies are mutually constitutive—the soils and seasons that bring forth, sustain, and, in time, undo different organizational forms. The same technology produces different forms across distinct institutional configurations.
          </p>
        </motion.div>

        <motion.div
          className={styles.areas}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.areaCard}>
            <h3>Research Areas</h3>
            <ul>
              <li>Entrepreneurship</li>
              <li>Organization Theory</li>
              <li>Strategy</li>
              <li>Technology and Society</li>
            </ul>
          </div>
          <div className={styles.areaCard}>
            <h3>Methods</h3>
            <ul>
              <li>Case Studies</li>
              <li>Computational Models</li>
              <li>Qualitative Comparative Analysis</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className={styles.publications}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={styles.sectionTitle}>Publications</h3>
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className={`${styles.publicationCard} ${styles[pub.color]}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.pubType}>{pub.type}</div>
              <h4 className={styles.pubTitle}>{pub.title}</h4>
              <p className={styles.pubSubtitle}>{pub.subtitle}</p>
              <div className={styles.pubMeta}>
                <span className={styles.pubAuthors}>{pub.authors}</span>
                <span className={styles.pubJournal}>
                  {pub.journal}, {pub.volume} ({pub.year})
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.workInProgress}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className={styles.sectionTitle}>Work in Progress</h3>
          <div className={styles.wipGrid}>
            {workInProgress.map((work, index) => (
              <motion.div
                key={index}
                className={`${styles.wipCard} ${styles[work.color]}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.wipStatus}>{work.status}</div>
                <h4 className={styles.wipTitle}>{work.title}</h4>
                <p className={styles.wipSubtitle}>{work.subtitle}</p>
                {work.authors && (
                  <p className={styles.wipAuthors}>{work.authors}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
