'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const awaitsCards = [
  {
    icon: '🤝',
    title: 'New Friends',
    description: 'People who may become your closest companions throughout university.',
    gradient: 'from-[#F36C9A]/20 to-[#F899B7]/20',
    borderColor: 'rgba(243, 108, 154, 0.3)',
  },
  {
    icon: '🎓',
    title: 'New Opportunities',
    description: 'Experiences that challenge and shape who you become.',
    gradient: 'from-[#A8D5E5]/20 to-[#D1EBF3]/20',
    borderColor: 'rgba(168, 213, 229, 0.3)',
  },
  {
    icon: '🌏',
    title: 'A Home Away From Home',
    description: 'A community ready to support you whenever you need it.',
    gradient: 'from-[#D4AF37]/20 to-[#F5E6B3]/20',
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  {
    icon: '✨',
    title: 'Unforgettable Memories',
    description: "Moments that you'll still remember years from now.",
    gradient: 'from-[#F36C9A]/20 to-[#A8D5E5]/20',
    borderColor: 'rgba(243, 108, 154, 0.3)',
  },
]

export default function AwaitsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 md:py-32 bg-[#FDF8F5]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2A32] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What Awaits You
          </h2>
          <p 
            className="text-xl text-[#6B6574] italic"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            Your journey is just beginning
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {awaitsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="group cursor-default"
            >
              <div 
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} overflow-hidden h-full`}
                style={{
                  border: `1px solid ${card.borderColor}`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Animated background glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${card.borderColor} 0%, transparent 70%)`,
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.span 
                    className="text-5xl block mb-4"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    {card.icon}
                  </motion.span>
                  
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-[#2D2A32] mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {card.title}
                  </h3>
                  
                  <p className="text-[#6B6574] text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                {/* Decorative sparkle */}
                <div className="absolute top-4 right-4 text-[#D4AF37]/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
