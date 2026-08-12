'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '../components/section-heading'
import { TemplateCard } from '../components/template-card'

const templates = [
  { title: 'Launch Promo', subtitle: 'Perfect for product reveals', accent: 'Tech blue' },
  { title: 'Daily Vlog', subtitle: 'Quick storytelling format', accent: 'Sunset glow' },
  { title: 'Music Teaser', subtitle: 'Dynamic cuts for tracks', accent: 'Neon purple' },
  { title: 'Social Reel', subtitle: 'Engagement-first vertical posts', accent: 'Pulse cyan' }
]

export default function TemplatesPage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Template gallery" description="Start with premium layouts designed for social video." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <motion.div whileHover={{ y: -8 }} key={template.title}>
              <TemplateCard {...template} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
