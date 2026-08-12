import Link from 'next/link'
import { Lock, Mail, ShieldCheck } from 'lucide-react'
import { CTAButton } from '../components/ui/cta-button'

export default function LoginPage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-12 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[2rem] border border-white/10 bg-surface p-10 shadow-soft lg:flex-row">
        <section className="space-y-8 flex-1">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-accent/75">Access your editor</p>
            <h1 className="text-4xl font-semibold text-white">Sign in and continue your premium video workflow.</h1>
            <p className="max-w-xl text-slate-400">Save projects, access templates, and export with powerful AI tools from any device.</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-white/5 p-6 shadow-soft">
              <div className="flex items-center gap-4 text-slate-200">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-white">Secure login</p>
                  <p className="text-sm text-slate-400">Passwordless sign-in and SSO ready.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 shadow-soft">
              <div className="flex items-center gap-4 text-slate-200">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-white">Project sync</p>
                  <p className="text-sm text-slate-400">Your videos and settings available across devices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-1 rounded-[2rem] border border-white/10 bg-[#11131B] p-8 shadow-soft">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input type="email" placeholder="you@example.com" className="w-full bg-transparent pl-10 text-white outline-none" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input type="password" placeholder="Enter password" className="w-full bg-transparent pl-10 text-white outline-none" />
              </div>
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-[#4f68ff]">Sign in</button>
            <p className="text-center text-sm text-slate-500">New to NovaCut? <Link href="/signup" className="text-white underline">Create an account</Link></p>
          </form>
        </section>
      </div>
    </main>
  )
}
