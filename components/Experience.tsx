'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    type: 'Consulting & Advisory',
    location: 'India and USA',
    period: '2023 onwards',
    role: 'Recent and Ongoing Consulting Engagements',
    projects: [
      'Dev Poojan – devotional marketplace from inception to scale',
      'Linc Education – executive education program for a multinational university',
      'Builders + Backers – ecosystem research for AI-powered venture studio',
      'Venex – IP strategy and academic partnerships',
      'Impact Studio, Ross – design thinking curriculum and venture program support'
    ],
    color: 'pink'
  },
  {
    type: 'Corporate',
    company: 'Home Credit',
    location: 'Gurgaon',
    period: '2013-2015',
    role: 'Senior Manager, Strategy',
    achievements: [
      'Developed market entry strategy approved by Czech stakeholders',
      'Pilot launches improved city launch timeline by 40% and quarterly penetration by 110%',
      'Secured USD 100M investment for 4-year expansion',
      'Led Pune launch as proof-of-concept for scalable operations',
      'Managed cross-functional teams (up to 30 direct reports)'
    ],
    color: 'purple'
  },
  {
    type: 'Healthcare',
    company: 'Johnson & Johnson Medical',
    location: 'Mumbai',
    period: '2011-2013',
    role: 'Regional Head North and East India, Acclarent',
    achievements: [
      'Managed P&L for North and East India (9 states)',
      'Introduced new ENT surgical product line',
      'Pioneered proactive reimbursement strategy for medical devices',
      'Achieved 90% reimbursement from private and PSU insurance firms',
      'Set up nationwide distribution network (10 states)'
    ],
    color: 'blue'
  },
  {
    type: 'Technology',
    company: 'National Instruments',
    location: 'Austin',
    period: '2007-2009',
    role: 'Programmer Analyst',
    achievements: [
      'IT liaison and business analyst across Engineering and Research divisions',
      'Led distributed teams (USA, Hungary, China, Germany)',
      'Redesigned IT service tracking (30% improvement)',
      'Tested company\'s largest software release',
      'Developed custom-sales system for 41 countries'
    ],
    color: 'mint'
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>・EXPERIENCE</span>
          <h2 className={styles.title}>PROFESSIONAL JOURNEY</h2>
        </motion.div>

        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`${styles.expCard} ${styles[exp.color]}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.expHeader}>
                <div className={styles.expType}>{exp.type}</div>
                <div className={styles.expPeriod}>{exp.period}</div>
              </div>

              {exp.company && (
                <h3 className={styles.expCompany}>{exp.company}</h3>
              )}
              
              <h4 className={styles.expRole}>{exp.role}</h4>
              
              {exp.location && (
                <p className={styles.expLocation}>{exp.location}</p>
              )}

              {exp.projects && (
                <ul className={styles.expList}>
                  {exp.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              )}

              {exp.achievements && (
                <ul className={styles.expList}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
