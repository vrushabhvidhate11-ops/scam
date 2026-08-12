import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-3xl px-6 py-3 text-sm font-semibold transition ${
        variant === 'primary'
          ? 'bg-accent text-slate-950 shadow-glow hover:bg-[#4f68ff]'
          : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
      }`}>
      {children}
    </Link>
  )
}
