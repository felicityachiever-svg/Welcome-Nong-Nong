'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/hero-section'
import StorySection from '@/components/sections/story-section'
import MessagesSection from '@/components/sections/messages-section'
import AwaitsSection from '@/components/sections/awaits-section'
import LocationSection from '@/components/sections/location-section'
import FinalSection from '@/components/sections/final-section'
import FloatingParticles from '@/components/ui/floating-particles'
import HiddenQuotes from '@/components/ui/hidden-quotes'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#F36C9A] text-2xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Loading...
        </motion.div>
      </div>
    )
  }

  return (
    <main className="relative overflow-x-hidden bg-[#FDF8F5]">
      <FloatingParticles />
      <HiddenQuotes />
      <HeroSection />
      <StorySection />
      <MessagesSection />
      <AwaitsSection />
      <LocationSection />
      <FinalSection />
    </main>
  )
}
