'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  "Every friendship begins with a hello.",
  "You belong here.",
  "The best chapters haven't been written yet.",
  "One day, you may be the senior welcoming the next generation.",
  "Sometimes the people you meet on your first day become part of your life story.",
]

export default function HiddenQuotes() {
  const [currentQuote, setCurrentQuote] = useState<string | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const showQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      const x = Math.random() * (window.innerWidth - 400) + 50
      const y = Math.random() * (window.innerHeight - 100) + 50
      
      setPosition({ x, y })
      setCurrentQuote(randomQuote)
      
      setTimeout(() => {
        setCurrentQuote(null)
      }, 5000)
    }

    // Show first quote after 10 seconds
    const initialTimeout = setTimeout(showQuote, 10000)
    
    // Then show quotes randomly every 30-60 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        showQuote()
      }
    }, 30000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {currentQuote && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed z-50 pointer-events-none"
          style={{ left: position.x, top: position.y }}
        >
          <div 
            className="px-6 py-4 rounded-2xl max-w-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(243, 108, 154, 0.3)',
              boxShadow: '0 8px 32px rgba(243, 108, 154, 0.2)',
            }}
          >
            <p 
              className="text-[#2D2A32] text-lg italic"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              &ldquo;{currentQuote}&rdquo;
            </p>
            <div className="mt-2 flex justify-end">
              <span className="text-[#F36C9A] text-sm">✨</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
