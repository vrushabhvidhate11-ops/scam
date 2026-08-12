'use client'

interface PropertyPanelProps {
  activeTool: string
  clipDuration: number
  setClipDuration: (value: number) => void
  volume: number
  setVolume: (value: number) => void
  brightness: number
  setBrightness: (value: number) => void
  caption: string
  setCaption: (value: string) => void
}

export function PropertyPanel({
  activeTool,
  clipDuration,
  setClipDuration,
  volume,
  setVolume,
  brightness,
  setBrightness,
  caption,
  setCaption
}: PropertyPanelProps) {
  return (
    <aside className="rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Properties</p>
        <h2 className="text-2xl font-semibold text-white">{activeTool}</h2>
      </div>

      <div className="mt-8 space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Trim duration</p>
          <div className="mt-4 flex items-center gap-4">
            <input
              type="range"
              min="5"
              max="60"
              value={clipDuration}
              onChange={(event) => setClipDuration(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-accent"
            />
            <span className="text-sm font-semibold text-white">{clipDuration}s</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Volume</p>
          <div className="mt-4 flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-accent"
            />
            <span className="text-sm font-semibold text-white">{volume}%</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Brightness</p>
          <div className="mt-4 flex items-center gap-4">
            <input
              type="range"
              min="20"
              max="100"
              value={brightness}
              onChange={(event) => setBrightness(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-accent"
            />
            <span className="text-sm font-semibold text-white">{brightness}%</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Caption text</p>
          <textarea
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            rows={4}
            className="mt-4 w-full rounded-3xl border border-white/10 bg-[#0f121c] p-4 text-sm text-white outline-none focus:border-accent"
          />
        </div>
      </div>
    </aside>
  )
}
