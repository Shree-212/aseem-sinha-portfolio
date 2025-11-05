'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Education.module.css'

const education = [
  {
    degree: 'Ph.D. in Business Administration (Strategy)',
    institution: 'University of Michigan, Ross School of Business',
    year: 'August 2024',
    thesis: 'A comparative and configurational framework for organizing and organizations',
    committee: 'Gerald Davis (Co-chair), Brian Wu (Co-chair), Mark Mizruchi, Cheng Gao',
    color: 'pink'
  },
  {
    degree: 'Post-graduate Diploma in Computer-aided Management (MBA)',
    institution: 'Indian Institute of Management Calcutta',
    year: 'April 2011',
    thesis: 'Information flow and value linkages at Spencer\'s Retail',
    advisor: 'Priya Seetharaman',
    color: 'purple'
  },
  {
    degree: 'Bachelor of Science in Electrical Engineering',
    institution: 'St. Mary\'s University, San Antonio',
    year: 'December 2007',
    capstone: 'Three-dimensional object-path rendering using radio frequency communication',
    color: 'blue'
  }
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className={styles.education} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>・EDUCATION</span>
          <h2 className={styles.title}>ACADEMIC JOURNEY</h2>
        </motion.div>

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${styles[edu.color]}`}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.year}>{edu.year}</div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                {edu.thesis && (
                  <p className={styles.thesisInfo}>
                    <strong>Thesis:</strong> {edu.thesis}
                  </p>
                )}
                {edu.capstone && (
                  <p className={styles.thesisInfo}>
                    <strong>Capstone:</strong> {edu.capstone}
                  </p>
                )}
                {edu.committee && (
                  <p className={styles.committee}>
                    <strong>Committee:</strong> {edu.committee}
                  </p>
                )}
                {edu.advisor && (
                  <p className={styles.committee}>
                    <strong>Advisor:</strong> {edu.advisor}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
