'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function LocationSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const googleMapsUrl = 'https://maps.google.com/?q=Faculty+of+Engineering+Chulalongkorn+University'

  return (
    <section 
      className="relative py-24 md:py-32"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #FDF8F5 0%, #F5F0EB 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-4xl mb-4 block">📍</span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2A32] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            See You Here
          </h2>
        </motion.div>

        {/* Location card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div 
            className="inline-block p-10 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(243, 108, 154, 0.2)',
              boxShadow: '0 10px 40px rgba(243, 108, 154, 0.15)',
            }}
          >
            <div className="space-y-2">
              <p 
                className="text-3xl md:text-4xl font-bold text-[#F36C9A]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Room 305
              </p>
              <p className="text-xl md:text-2xl text-[#2D2A32]">
                Building 2
              </p>
              <p className="text-xl md:text-2xl text-[#2D2A32]">
                Faculty of Engineering
              </p>
              <p className="text-lg text-[#6B6574] mt-4">
                Chulalongkorn University
              </p>
            </div>

            {/* Google Maps button */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full text-white font-medium text-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #F36C9A 0%, #F899B7 100%)',
                boxShadow: '0 4px 20px rgba(243, 108, 154, 0.4)',
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>

        {/* Poetic message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p 
            className="text-xl md:text-2xl text-[#6B6574] italic leading-relaxed"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            One room.
            <br />
            A few conversations.
            <br />
            And the beginning of countless stories.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
