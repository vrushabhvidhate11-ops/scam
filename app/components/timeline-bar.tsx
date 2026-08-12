interface TimelineBarProps {
  label: string
  progress: number
  color: string
}

export function TimelineBar({ label, progress, color }: TimelineBarProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{label}</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  )
}
