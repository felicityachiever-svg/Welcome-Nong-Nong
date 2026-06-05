'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const messages = [
  {
    name: 'Kevin',
    message: `Welcome to Chula, 110s!! Wish you all the best in the beginning of a new chapter. Enjoy your freshmen year and dont hesitate to reach out to any of the seniors if you face any difficulties nong nongs ❤️❤️❤️

-Kevin`,
  },
  {
    name: 'Anton',
    message: `Study hard and party hard!

First year is one of the most fun and memorable parts of university life, so make the most of it 😉

-Anton`,
  },
  {
    name: 'Z.',
    message: `to our incoming freshies,

congratulations on getting into chula! 💌 we're so excited to have you here and hope you'll have the best time :)

adjusting to life in Thailand is not always easy, and i just want to let you all know that you can reach out to us whether you need advice or just somebody to talk to❣️ we're happy to support you always!

your life in uni will be filled with lots of new people and enriching experiences; above all, please remember to stay authentic and true to yourself, and to spread kindness wherever you can :) 🤍

wishing you all the best and lots of happiness,

-Z.`,
  },
  {
    name: 'Myo',
    message: `Congratulations and welcome all freshies!!

First year can sneakily slip by a lot faster than you think so make sure to make the most of it!

Wishing you all a wonderful year ahead! 💗

-Myo`,
  },
  {
    name: 'Teresa',
    message: `Welcome message for the Nongๆ

Entering a new environment is a lot to take in and it's totally normal to feel a bit nervous.

Just remember that you're here because you made a brave choice to grow.

If things ever get overwhelming, it's okay to slow down and give yourself some space.

We seniors are always just a message or phone call away.

Seriously, don't be shy and come find us or reach out whenever you need a hand.

We're so excited to have you here!

-Teresa`,
  },
  {
    name: 'Ell',
    message: `Try "Somtam Mahit"

-Ell (EBA)`,
  },
  {
    name: 'Jen ♡',
    message: `Congratulations on your admission to Chula, dear juniors!

As you begin this new chapter, remember that college is not just about grades: it's about growth.

Every success is a reward for your effort, and every failure is a chance to learn.

Don't compare yourself to others. There will always be people with different advantages, but you earned your place here too.

Be proud of how far you've come, and keep focusing on becoming a better version of yourself.

Enjoy the journey, stay curious, and make the most of every moment.

Take care, Nong Nongs. We're proud of you and can't wait to see what you'll become.

-Jen ♡`,
  },
]

export default function MessagesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section 
      className="relative py-24 md:py-32"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #FDF8F5 0%, #F5F0EB 50%, #FDF8F5 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">💌</span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2A32] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Messages from Seniors
          </h2>
          <p 
            className="text-xl text-[#6B6574] italic"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            Words from those who walked this path before you
          </p>
        </motion.div>

        {/* Message cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotate: index % 2 === 0 ? -1 : 1 
              } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="animate-letter-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div 
                className="letter-card rounded-3xl p-8 h-full"
                style={{
                  background: 'linear-gradient(145deg, #FFFFFF 0%, #FDF8F5 100%)',
                  border: '1px solid rgba(243, 108, 154, 0.15)',
                  boxShadow: '0 4px 20px rgba(243, 108, 154, 0.1)',
                }}
              >
                {/* Letter header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">💌</span>
                  <h3 
                    className="text-xl md:text-2xl font-semibold text-[#F36C9A]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {msg.name}
                  </h3>
                </div>
                
                {/* Decorative line */}
                <div 
                  className="w-full h-px mb-6"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(243, 108, 154, 0.3) 50%, transparent 100%)',
                  }}
                />
                
                {/* Message content */}
                <div className="relative">
                  {/* Handwritten accent */}
                  <div 
                    className="absolute -top-2 -left-2 text-6xl text-[#F36C9A]/10 pointer-events-none"
                    style={{ fontFamily: 'var(--font-dancing)' }}
                  >
                    &ldquo;
                  </div>
                  
                  <p className="text-[#2D2A32] leading-relaxed whitespace-pre-line pl-4">
                    {msg.message}
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 text-[#D4AF37]/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
