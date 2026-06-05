'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.1,
}))

const sparkles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 5,
}))

export default function FloatingParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft gradient orbs */}
      <div 
        className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, #F36C9A 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, #A8D5E5 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.id % 3 === 0 
              ? 'rgba(243, 108, 154, 0.6)' 
              : particle.id % 3 === 1 
                ? 'rgba(168, 213, 229, 0.6)' 
                : 'rgba(212, 175, 55, 0.6)',
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#D4AF37]"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
