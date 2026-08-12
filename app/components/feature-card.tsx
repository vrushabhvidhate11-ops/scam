import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/20">
      <div className="inline-flex items-center justify-center rounded-3xl bg-white/5 p-4 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-400">{description}</p>
    </div>
  )
}
