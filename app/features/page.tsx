import Link from 'next/link'
import { SectionHeading } from '../components/section-heading'
import { FeatureCard } from '../components/feature-card'
import { ArrowRight, Cpu, Music2, ShieldCheck, Sparkles, Video, Layers, MessageSquare } from 'lucide-react'

const features = [
  { title: 'AI Storyboarding', description: 'Generate quick scene layouts for your video idea.', icon: Sparkles },
  { title: 'Auto Captions', description: 'Fast speech-to-text captions with editable timings.', icon: MessageSquare },
  { title: 'Background Removal', description: 'Remove distractions and isolate talent instantly.', icon: Layers },
  { title: 'Audio Mixer', description: 'Layer music, voiceovers, and effects for richer sound.', icon: Music2 },
  { title: 'Smart Filters', description: 'Cinematic color grades and motion presets in one click.', icon: Cpu },
  { title: 'Secure Export', description: 'Save high-quality video files with CDN-ready delivery.', icon: ShieldCheck }
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Features" description="Every tool you need in one premium video editor." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} Icon={feature.icon} />
          ))}
        </div>
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-surface p-10 shadow-soft">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/75">Powerful workflow</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Designed for creators who demand speed and polish.</h2>
              <p className="mt-4 max-w-xl text-slate-400">From upload to render, the editor is optimized for fast iteration, collaborative storyboarding, and one-click polished exports.</p>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-[#4f68ff]">Choose your plan <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
