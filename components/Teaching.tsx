'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Teaching.module.css'

export default function Teaching() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="teaching" className={styles.teaching} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>・TEACHING & MENTORSHIP</span>
          <h2 className={styles.title}>EDUCATION & IMPACT</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.interests}>
            <h3>Teaching Interests</h3>
            <div className={styles.tagCloud}>
              <span>Competitive Strategy</span>
              <span>Corporate Strategy</span>
              <span>Economic Sociology</span>
              <span>Entrepreneurship</span>
              <span>Global Institutional Environment</span>
              <span>Privacy and Technology Policy</span>
              <span>Technology and Society</span>
            </div>
          </div>

          <div className={styles.experienceCards}>
            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <h3>Primary Instructor</h3>
              <h4>Corporate Strategy (BBA Core)</h4>
              <p className={styles.institution}>Ross School of Business, University of Michigan</p>
              <p className={styles.details}>
                Taught 77-79 students in Fall 2017 and Fall 2018. Developed course curriculum, syllabi, and interactive case discussions.
              </p>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>4.2/5.0</span>
                  <span className={styles.metricLabel}>2017 Evaluation</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>4.6/5.0</span>
                  <span className={styles.metricLabel}>2018 Evaluation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                </svg>
              </div>
              <h3>Teaching Assistant</h3>
              <h4>Multiple MBA & Executive MBA Courses</h4>
              <p className={styles.institution}>Ross School of Business, University of Michigan</p>
              <div className={styles.courseList}>
                <p>• Leading People and Organizations (MBA)</p>
                <p>• Marketing Management (MBA and summer program)</p>
                <p>• Strategic Marketing Planning (Executive MBA)</p>
              </div>
              <p className={styles.details}>
                Graded and provided detailed feedback on essays, case analyses, and project reports. Designed grading rubrics and developed Visual Basic scripts for computational text analysis.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                </svg>
              </div>
              <h3>Mentorship</h3>
              <h4>Students, Peers & Professionals</h4>
              <p className={styles.details}>
                Mentored students and peers across academic levels on research, career navigation, and professional development.
              </p>
              <div className={styles.achievements}>
                <p>✓ Doctoral placements at top research institutions</p>
                <p>✓ Prestigious entrepreneurship research grants</p>
                <p>✓ Successful careers at leading firms</p>
                <p>✓ Founded successful ventures</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.engagement}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Scholarly Engagement</h3>
            <div className={styles.engagementGrid}>
              <div className={styles.engagementItem}>
                <h4>Conferences & Workshops</h4>
                <p>Invited participant and discussant at "Globalizing Organization Theory" conference</p>
                <p>Organizing team member for "The Choice II" workshop at Ross School of Business</p>
              </div>
              <div className={styles.engagementItem}>
                <h4>Methods Training</h4>
                <p>• Interviewing for Qualitative Research</p>
                <p>• Fuzzy Set Qualitative Comparative Analysis</p>
                <p>• Advanced Qualitative Analysis</p>
                <p>• Qualitative Methods/Ethnography</p>
              </div>
              <div className={styles.engagementItem}>
                <h4>Peer Review</h4>
                <p>Reviewer for Strategic Entrepreneurship Journal (2019-20)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
