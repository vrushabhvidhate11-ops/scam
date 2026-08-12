interface TemplateCardProps {
  title: string
  subtitle: string
  accent: string
}

export function TemplateCard({ title, subtitle, accent }: TemplateCardProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#11131b] to-[#0c0e16] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Template</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <div className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300">{accent}</div>
      </div>
      <p className="mt-6 text-slate-400">{subtitle}</p>
      <div className="mt-8 rounded-3xl bg-white/5 p-4 text-sm text-slate-300">Perfect for creating polished shorts and social videos with a pro look.</div>
    </div>
  )
}
