'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Square, Scissors, Music2, TextCursor, Sparkles, Download, Palette, Upload, SlidersHorizontal } from 'lucide-react'
import { SidebarButton } from '../components/sidebar-button'
import { PropertyPanel } from '../components/property-panel'
import { TimelineBar } from '../components/timeline-bar'
import { CTAButton } from '../components/ui/cta-button'

const mockTracks = [
  { label: 'Main clip', progress: 0.36, color: 'bg-cyan-500' },
  { label: 'Voiceover', progress: 0.2, color: 'bg-violet-400' }
]

const tools = [
  { label: 'Upload', icon: Upload },
  { label: 'Trim', icon: Scissors },
  { label: 'Audio', icon: Music2 },
  { label: 'Captions', icon: TextCursor },
  { label: 'Effects', icon: Palette },
  { label: 'AI tools', icon: Sparkles }
]

export default function EditorPage() {
  const [activeTool, setActiveTool] = useState('Trim')
  const [clipDuration, setClipDuration] = useState(24)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(52)
  const [caption, setCaption] = useState('Add dramatic call-to-action copy here')

  const currentTool = useMemo(() => {
    return tools.find((item) => item.label === activeTool)
  }, [activeTool])

  return (
    <main className="min-h-screen bg-background text-white">
      <div className="grid min-h-screen grid-cols-1 gap-6 lg:grid-cols-[260px_1fr_340px] px-6 py-8 lg:px-10">
        <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Editor tools</p>
            <h2 className="text-2xl font-semibold">Workspace</h2>
          </div>
          <div className="grid gap-3">
            {tools.map((item) => (
              <SidebarButton key={item.label} active={item.label === activeTool} label={item.label} Icon={item.icon} onClick={() => setActiveTool(item.label)} />
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Export status</p>
            <div className="mt-4 rounded-3xl bg-[#06111b] p-5 text-sm text-white">
              <p className="font-semibold">Ready to render</p>
              <p className="mt-2 text-slate-400">Your clip is queued and can be exported anytime.</p>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-slate-400">Project</p>
                <h1 className="text-3xl font-semibold text-white">Summer launch teaser</h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/40 hover:bg-white/10">
                  <Play className="h-4 w-4 text-accent" /> Preview
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow hover:bg-[#4f68ff]">
                  <Download className="h-4 w-4" /> Export
                </button>
              </div>
            </div>

            <div className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-[#0f121c] p-5 shadow-soft">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#11131b] to-[#0d1019] p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Preview</p>
                    <div className="mt-4 h-64 rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(92,124,255,0.16),transparent_28%),linear-gradient(180deg,#121520_0%,#0d1017_100%)] p-5">
                      <div className="relative flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[#10131a] p-5">
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <span>00:00 / 00:24</span>
                          <span className="rounded-full bg-white/5 px-3 py-1">1080p</span>
                        </div>
                        <div className="mx-auto flex h-48 w-full max-w-md items-center justify-center rounded-3xl bg-slate-950/30">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                            <Play className="h-8 w-8 text-accent" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 rounded-full bg-white/5">
                            <div className="h-full w-3/5 rounded-full bg-accent" />
                          </div>
                          <div className="rounded-3xl bg-white/5 p-3 text-slate-300">
                            <p className="text-sm">{caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Duration</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{clipDuration}s</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Audio level</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{volume}%</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Filter</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Neo glow</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Caption style</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Bold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-accent/70">Timeline</p>
                <h2 className="text-xl font-semibold">Track layers</h2>
              </div>
              <div className="text-sm text-slate-400">Preview clips in sequence</div>
            </div>
            <div className="mt-6 space-y-4">
              {mockTracks.map((track) => (
                <TimelineBar key={track.label} label={track.label} progress={track.progress} color={track.color} />
              ))}
            </div>
          </div>
        </section>

        <PropertyPanel
          activeTool={currentTool?.label ?? 'Trim'}
          brightness={brightness}
          setBrightness={setBrightness}
          volume={volume}
          setVolume={setVolume}
          caption={caption}
          setCaption={setCaption}
          clipDuration={clipDuration}
          setClipDuration={setClipDuration}
        />
      </div>
    </main>
  )
}
