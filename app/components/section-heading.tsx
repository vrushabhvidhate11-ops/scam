interface SectionHeadingProps {
  title: string
  description: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-accent/80">NovaCut Studio</p>
      <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  )
}
