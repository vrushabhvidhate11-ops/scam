interface TestimonialCardProps {
  name: string
  role: string
  feedback: string
  company: string
}

export function TestimonialCard({ name, role, feedback, company }: TestimonialCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-soft backdrop-blur-xl">
      <p className="text-lg leading-8 text-slate-200">“{feedback}”</p>
      <div className="mt-6">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-slate-400">{role}, {company}</p>
      </div>
    </div>
  )
}
