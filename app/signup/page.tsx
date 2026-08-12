import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-12 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[2rem] border border-white/10 bg-surface p-10 shadow-soft lg:flex-row">
        <section className="space-y-8 flex-1">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-accent/75">Create account</p>
            <h1 className="text-4xl font-semibold text-white">Start editing with a professional AI video workflow.</h1>
            <p className="max-w-xl text-slate-400">Get instant access to premium tools, templates, and cloud-ready export from anywhere.</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 shadow-soft">
            <p className="text-sm font-semibold text-white">Why NovaCut?</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• AI-powered smart trims and captions</li>
              <li>• High contrast dark UI with smooth motion</li>
              <li>• One-click download-ready rendering</li>
            </ul>
          </div>
        </section>
        <section className="flex-1 rounded-[2rem] border border-white/10 bg-[#11131B] p-8 shadow-soft">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Full name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-accent" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-accent" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
              <input type="password" placeholder="Create password" className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-accent" />
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-[#4f68ff]">Create account</button>
            <p className="text-center text-sm text-slate-500">Already have an account? <Link href="/login" className="text-white underline">Sign in</Link></p>
          </form>
        </section>
      </div>
    </main>
  )
}
