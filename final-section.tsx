'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function FinalSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={sectionRef}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%203-qIbq9USYD25JCP0EjzP5kkfWt2KD3B.jpg"
          alt="Community group photo"
          fill
          className="object-cover"
          priority
        />
        {/* Cinematic dark overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(45, 42, 50, 0.7) 0%, rgba(45, 42, 50, 0.85) 50%, rgba(45, 42, 50, 0.95) 100%)',
          }}
        />
        {/* Pink tint overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, #F36C9A 0%, transparent 50%, #A8D5E5 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 text-shadow-strong"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Next Year, This Could Be You.
        </motion.h2>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-shadow max-w-2xl mx-auto">
            The students in these photos were once newcomers too.
            <br /><br />
            They attended their First Meet.
            <br />
            Made their first friends.
            <br />
            Found their community.
            <br />
            Created memories.
            <br /><br />
            And now they are here to welcome you.
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16"
        >
          <div 
            className="inline-block px-10 py-6 rounded-3xl"
            style={{
              background: 'rgba(243, 108, 154, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(243, 108, 154, 0.4)',
            }}
          >
            <p 
              className="text-2xl md:text-3xl text-white font-semibold text-shadow"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              It&apos;s your turn.
            </p>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-16"
        >
          <p 
            className="text-xl md:text-2xl text-white/90 italic text-shadow"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            We can&apos;t wait to meet you.
          </p>
          <p 
            className="text-2xl md:text-3xl text-white font-semibold mt-4 text-shadow"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            See you on July 18, Batch 110 💙
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-8 border-t border-white/20"
        >
          <p 
            className="text-lg text-white/80 italic mb-2"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            With love,
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            Myanmar Undergraduate Community 🇲🇲
          </p>
          <p className="text-white/70 mt-1">
            Chulalongkorn University
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        >
          <span className="text-2xl opacity-50">💙</span>
          <span className="text-2xl opacity-70">💗</span>
          <span className="text-2xl opacity-50">💙</span>
        </motion.div>
      </div>
    </section>
  )
}
