import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({ 
  variable: '--font-playfair', 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
const dancingScript = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Welcome Batch 110 💙 | Myanmar Undergraduate Community',
  description: 'Your Chula journey begins here. Join the Myanmar Undergraduate Community at Chulalongkorn University for First Meet 2025.',
  openGraph: {
    title: 'Welcome Batch 110 💙 | Myanmar Undergraduate Community',
    description: 'A community is already waiting to welcome you.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable} bg-[#FDF8F5]`}>
      <body className="font-sans antialiased bg-[#FDF8F5]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
