import { LucideIcon } from 'lucide-react'

interface SidebarButtonProps {
  label: string
  Icon: LucideIcon
  active?: boolean
  onClick: () => void
}

export function SidebarButton({ label, Icon, active = false, onClick }: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-3xl px-4 py-4 text-left text-sm font-medium transition ${
        active ? 'bg-accent text-slate-950 shadow-glow' : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
      }`}>
      <Icon className="h-5 w-5" />
      {label}
    </button>
  )
}
