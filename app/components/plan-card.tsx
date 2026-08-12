interface PlanCardProps {
  name: string
  price: string
  description: string
  features: string[]
}

export function PlanCard({ name, price, description, features }: PlanCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-soft transition hover:-translate-y-1 hover:border-accent/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent/75">{name}</p>
          <h3 className="mt-4 text-4xl font-semibold text-white">{price}</h3>
        </div>
      </div>
      <p className="mt-6 text-slate-400">{description}</p>
      <ul className="mt-8 space-y-3 text-slate-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="block h-2 w-2 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full rounded-3xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-[#4f68ff]">Start free trial</button>
    </div>
  )
}
