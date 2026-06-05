'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const classroomPhotos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%202-4DOsL28VlpDP0EYZeeajKqh3cKeJ4G.jpg',
    caption: '📸 First introductions',
    rotation: -3,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet1-rnVwAVyCIBgRz49y0V9DCjGYCNi5Wn.jpg',
    caption: '📸 Ice-breaking activities',
    rotation: 2,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%204-6EZIIG9u4sahQdy1iK7m5Al6gKIPH4.jpg',
    caption: '📸 A room full of unfamiliar faces',
    rotation: -2,
  },
]

const outdoorPhotos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%203-qIbq9USYD25JCP0EjzP5kkfWt2KD3B.jpg',
    caption: '📸 New friendships',
    rotation: 2,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%205-zLCx9WsyhEpXZdmniiXz5Zq0pRa8Zr.jpg',
    caption: '📸 Shared memories',
    rotation: -2,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20meet%201-NFfoxTYHw7T7J1AFXL5K1HkBBhs0HG.jpg',
    caption: '📸 Countless laughs',
    rotation: 3,
  },
]

export default function StorySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  const transitionRef = useRef(null)
  const isTransitionInView = useInView(transitionRef, { once: true, margin: '-100px' })
  
  const outdoorRef = useRef(null)
  const isOutdoorInView = useInView(outdoorRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 md:py-32 bg-[#FDF8F5]" ref={sectionRef}>
      {/* Section title */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2A32] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            One Year Ago...
          </h2>
          <p className="text-lg md:text-xl text-[#6B6574] max-w-2xl mx-auto leading-relaxed">
            One year ago, Batch 109 attended their First Meet.
            <br />
            Many walked into the room not knowing anyone.
            <br />
            Many felt nervous.
            <br />
            Many wondered what university life would be like.
          </p>
        </motion.div>

        {/* Classroom photos - Polaroid style */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {classroomPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: photo.rotation * 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: photo.rotation } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="polaroid mx-auto"
              style={{ '--rotation': `${photo.rotation}deg` } as React.CSSProperties}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <p 
                className="text-center text-[#6B6574] mt-4 text-sm md:text-base"
                style={{ fontFamily: 'var(--font-dancing)' }}
              >
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-[#6B6574] text-lg italic mb-16"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          📸 The beginning of something new
        </motion.p>

        {/* Transition text */}
        <motion.div
          ref={transitionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTransitionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 py-16"
        >
          <div 
            className="inline-block px-8 py-6 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(243, 108, 154, 0.1) 0%, rgba(168, 213, 229, 0.1) 100%)',
              border: '1px solid rgba(243, 108, 154, 0.2)',
            }}
          >
            <p 
              className="text-2xl md:text-3xl text-[#2D2A32] leading-relaxed"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              The same students.
              <br />
              <span className="text-[#F36C9A] font-semibold">One year later.</span>
            </p>
          </div>
        </motion.div>

        {/* Outdoor photos */}
        <div ref={outdoorRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {outdoorPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: photo.rotation * 2 }}
              animate={isOutdoorInView ? { opacity: 1, y: 0, rotate: photo.rotation } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="polaroid mx-auto"
              style={{ '--rotation': `${photo.rotation}deg` } as React.CSSProperties}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <p 
                className="text-center text-[#6B6574] mt-4 text-sm md:text-base"
                style={{ fontFamily: 'var(--font-dancing)' }}
              >
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isOutdoorInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-[#6B6574] text-lg italic mb-20"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          📸 A growing family
        </motion.p>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isOutdoorInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-[#6B6574] leading-relaxed mb-8">
            Some arrived knowing nobody.
            <br /><br />
            Today they share stories, challenges, achievements, celebrations, and friendships that continue beyond the classroom.
          </p>
          <p 
            className="text-2xl md:text-3xl text-[#F36C9A] font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Now it is your turn.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
