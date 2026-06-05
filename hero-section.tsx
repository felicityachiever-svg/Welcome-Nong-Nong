'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dreamy collage effect */}
      <div className="absolute inset-0">
        {/* Main background gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #FDF8F5 0%, #F899B7 30%, #F36C9A 50%, #A8D5E5 80%, #FDF8F5 100%)',
            opacity: 0.9,
          }}
        />
        
        {/* Photo collage layer */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-10 left-10 w-64 h-48 rounded-lg blur-sm transform -rotate-6"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet1-rnVwAVyCIBgRz49y0V9DCjGYCNi5Wn.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div 
            className="absolute top-20 right-20 w-56 h-40 rounded-lg blur-sm transform rotate-3"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%204-6EZIIG9u4sahQdy1iK7m5Al6gKIPH4.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-72 h-52 rounded-lg blur-sm transform rotate-2"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%203-qIbq9USYD25JCP0EjzP5kkfWt2KD3B.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div 
            className="absolute bottom-20 right-1/4 w-60 h-44 rounded-lg blur-sm transform -rotate-4"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%202-4DOsL28VlpDP0EYZeeajKqh3cKeJ4G.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Light rays */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, transparent 100%)',
              filter: 'blur(40px)',
              transform: 'translateX(-50%) scaleX(100)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-strong"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Welcome, Batch 110 💙
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 text-shadow"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          Your Chula Journey Begins Here
        </motion.p>

        {/* Welcome message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <div 
            className="mx-auto max-w-2xl p-8 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <p className="text-white/95 text-base md:text-lg leading-relaxed text-shadow">
              Every senior you see on this website once stood exactly where you are today.
              <br /><br />
              A new country. A new university. A new chapter.
              <br /><br />
              Perhaps excited. Perhaps nervous. Perhaps wondering what comes next.
              <br /><br />
              But one thing is certain:
              <br />
              <span className="font-semibold text-lg md:text-xl">You are not beginning this journey alone.</span>
              <br /><br />
              <span className="italic">A community is already waiting to welcome you.</span>
            </p>
          </div>
        </motion.div>

        {/* Event card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="mb-10"
        >
          <div 
            className="inline-block p-8 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 8px 32px rgba(243, 108, 154, 0.3)',
            }}
          >
            <div className="space-y-3 text-white text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <span className="text-lg">
                  <span className="font-semibold">Date:</span> Friday, 18 July 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕰️</span>
                <span className="text-lg">
                  <span className="font-semibold">Time:</span> 13:30 – 16:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">👔</span>
                <span className="text-lg">
                  <span className="font-semibold">Dress Code:</span> White Shirt
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-lg">
                  <span className="font-semibold">Location:</span> Room 305, Building 2, Faculty of Engineering
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/90 text-lg md:text-xl italic text-shadow"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          &ldquo;We can&apos;t wait to meet you.&rdquo;
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-indicator"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-sm">Scroll to explore</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-white/70"
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                transform="rotate(180 12 12)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
