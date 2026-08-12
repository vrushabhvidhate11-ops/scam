'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Clock3, Heart, Sparkles, Smile, Star, Gift } from 'lucide-react'

type HeartBubble = {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

const stepStates = {
  PROPOSAL: 'proposal',
  CONFIRM: 'confirm',
  SCHEDULE: 'schedule',
  FINISH: 'finish'
} as const

type StepKey = (typeof stepStates)[keyof typeof stepStates]

const randomInRange = (min: number, max: number) => Math.round(Math.random() * (max - min) + min)

function formatFriendlyDate(value: string) {
  if (!value) return ''
  try {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }).format(new Date(value))
  } catch {
    return value
  }
}

function formatFriendlyTime(value: string) {
  if (!value) return ''
  try {
    return new Date(`1970-01-01T${value}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    })
  } catch {
    return value
  }
}

export default function HomePage() {
  const [step, setStep] = useState<StepKey>(stepStates.PROPOSAL)
  const [noPos, setNoPos] = useState({ top: 50, left: 58 })
  const [noTries, setNoTries] = useState(0)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [error, setError] = useState('')
  const [celebrating, setCelebrating] = useState(false)
  const [heartBubbles, setHeartBubbles] = useState<HeartBubble[]>([])

  const formattedDate = useMemo(() => formatFriendlyDate(selectedDate), [selectedDate])
  const formattedTime = useMemo(() => formatFriendlyTime(selectedTime), [selectedTime])

  const moveNoButton = () => {
    setNoTries((current) => current + 1)
    setNoPos((current) => {
      let nextLeft = randomInRange(5, 95)
      let nextTop = randomInRange(5, 95)

      if (Math.abs(nextLeft - current.left) < 18 && Math.abs(nextTop - current.top) < 18) {
        nextLeft = Math.min(95, Math.max(5, current.left + (randomInRange(20, 45) * (current.left > 50 ? -1 : 1))))
        nextTop = Math.min(95, Math.max(5, current.top + (randomInRange(20, 45) * (current.top > 50 ? -1 : 1))))
      }

      return {
        top: nextTop,
        left: nextLeft
      }
    })
  }

  useEffect(() => {
    setHeartBubbles(
      Array.from({ length: 10 }, () => ({
        left: `${randomInRange(5, 95)}%`,
        top: `${randomInRange(5, 90)}%`,
        animationDelay: `${randomInRange(0, 500)}ms`,
        animationDuration: `${randomInRange(9000, 17000)}ms`
      }))
    )
  }, [])

  const handleNoButton = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    moveNoButton()
  }

  const proceedToConfirm = () => setStep(stepStates.CONFIRM)
  const proceedToSchedule = () => {
    setStep(stepStates.SCHEDULE)
    setError('')
  }

  const proceedToFinish = () => {
    if (!selectedDate || !selectedTime) {
      setError('Please choose a day and a time so we can lock it in 💌')
      return
    }
    setError('')
    setStep(stepStates.FINISH)
  }

  const startCelebration = () => setCelebrating(true)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,212,221,0.85),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,244,247,0.9),_transparent_30%),linear-gradient(135deg,#fffafc_0%,#fff0f5_42%,#ffe4ec_100%)] text-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heartBubbles.map((bubble, index) => (
          <span
            key={`bg-heart-${index}`}
            className="absolute text-3xl opacity-70 animate-drift"
            style={{
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.animationDelay,
              animationDuration: bubble.animationDuration
            }}
          >
            {index % 2 === 0 ? '💗' : '🌸'}
          </span>
        ))}
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-3 py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full max-w-md overflow-hidden rounded-[30px] border border-pink-100/80 bg-white/80 p-4 shadow-[0_30px_70px_rgba(244,114,182,0.18)] backdrop-blur-sm sm:max-w-3xl sm:p-10"
        >
          <div className="absolute -left-12 top-8 h-28 w-28 rounded-full bg-pink-100/80 blur-3xl" />
          <div className="absolute right-0 top-12 h-32 w-32 rounded-full bg-rose-100/70 blur-3xl" />
          <div className="relative">
            <AnimatePresence mode="wait">
              {step === stepStates.PROPOSAL && (
                <motion.div
                  key="proposal"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,240,245,0.95))] p-5 shadow-[0_22px_60px_rgba(171,79,119,0.12)] sm:p-8"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-rose-50 to-pink-100 text-4xl shadow-[0_18px_35px_rgba(244,114,182,0.18)]">
                    <span>🥰</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.32em] text-black">a little question</p>
                    <h1 className="mt-4 text-2xl font-semibold leading-tight text-black sm:text-4xl">
                      Will you go on a date with me? <span className="inline-block">🌸</span>
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-black sm:text-base">
                      A sweet little surprise just for us — no pressure, just a yes if your heart wants it.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
                    <button
                      type="button"
                      onClick={proceedToConfirm}
                      className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white shadow-[0_18px_38px_rgba(17,17,17,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 sm:min-w-[170px] sm:w-auto"
                    >
                      YES
                    </button>

                    <div className="pointer-events-none relative h-24 w-full max-w-[260px] overflow-hidden rounded-[28px] border border-rose-100 bg-rose-50/80 px-4 py-3 shadow-soft sm:w-[260px]">
                      <button
                        type="button"
                        onMouseEnter={handleNoButton}
                        onTouchStart={handleNoButton}
                        onFocus={handleNoButton}
                        style={{ top: `${noPos.top}%`, left: `${noPos.left}%`, transform: 'translate(-50%, -50%)' }}
                        className="pointer-events-auto absolute z-20 inline-flex min-w-[120px] items-center justify-center rounded-full border border-rose-200 bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(219,39,119,0.18)] transition-all duration-300 ease-out hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-200 sm:min-w-[140px]"
                      >
                        NO 🙈
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-xs tracking-wide text-black sm:text-sm">
                    {noTries === 0 && 'Try your luck with the buttons...'}
                    {noTries > 0 && noTries < 4 && 'The NO button is feeling shy. Keep those fingers ready!'}
                    {noTries >= 4 && 'It’s trying its best to escape, but our date is already written in the stars.'}
                  </div>
                </motion.div>
              )}

              {step === stepStates.CONFIRM && (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,240,245,0.95))] p-5 sm:p-8"
                >
                  <div className="absolute -right-8 top-8 grid h-24 w-24 place-items-center rounded-full bg-pink-100/80 text-3xl text-rose-400 shadow-soft">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-rose-50 to-pink-100 text-4xl shadow-[0_18px_35px_rgba(244,114,182,0.18)]">
                    <span>🎉</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.32em] text-black">you did it</p>
                    <h1 className="mt-4 text-2xl font-semibold leading-tight text-black sm:text-4xl">
                      WAIT, YOU ACTUALLY SAID YES?? <span className="inline-block">😭</span>
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-black sm:text-base">
                      I was so ready for you to say no <span className="inline-block">🥹</span>
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center sm:mt-10">
                    <button
                      type="button"
                      onClick={proceedToSchedule}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(17,17,17,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 sm:w-auto"
                    >
                      okay okay! →
                    </button>
                  </div>
                </motion.div>
              )}

              {step === stepStates.SCHEDULE && (
                <motion.div
                  key="schedule"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,240,245,0.95))] p-5 sm:p-8"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-rose-50 to-pink-100 text-4xl shadow-[0_18px_35px_rgba(244,114,182,0.18)]">
                    <CalendarDays className="h-8 w-8 text-rose-500" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.32em] text-black">date planning</p>
                    <h1 className="mt-4 text-2xl font-semibold leading-tight text-black sm:text-4xl">
                      So... when are you free?
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-black sm:text-base">
                      Pick the perfect moment and I’ll be there with little surprises ready.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4 sm:space-y-6">
                    <div className="rounded-[24px] border border-rose-100 bg-gradient-to-r from-rose-50/80 to-pink-50/80 p-4 shadow-sm">
                      <div className="flex items-center gap-3 text-rose-700">
                        <span className="text-xl">📅</span>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.28em] text-black">Pick a Day</p>
                          <p className="mt-1 text-sm text-black">Choose a date we can celebrate together.</p>
                        </div>
                      </div>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(event) => setSelectedDate(event.target.value)}
                        className="mt-4 w-full rounded-2xl border border-rose-200 bg-white/90 px-4 py-3 text-base text-rose-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                        style={{ minHeight: '48px' }}
                      />
                    </div>

                    <div className="rounded-[24px] border border-rose-100 bg-gradient-to-r from-rose-50/80 to-pink-50/80 p-4 shadow-sm">
                      <div className="flex items-center gap-3 text-rose-700">
                        <span className="text-xl">⏰</span>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.28em] text-black">What Time?</p>
                          <p className="mt-1 text-sm text-black">Pick a time that feels just right.</p>
                        </div>
                      </div>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(event) => setSelectedTime(event.target.value)}
                        className="mt-4 w-full rounded-2xl border border-rose-200 bg-white/90 px-4 py-3 text-base text-rose-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                        style={{ minHeight: '48px' }}
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 rounded-3xl bg-rose-100/90 px-4 py-3 text-center text-sm text-black shadow-sm">
                      {error}
                    </p>
                  )}

                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={proceedToFinish}
                      className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_14px_32px_rgba(219,39,119,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 sm:w-auto"
                    >
                      set the date! ♥
                    </button>
                  </div>
                </motion.div>
              )}

              {step === stepStates.FINISH && (
                <motion.div
                  key="finish"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,240,245,0.95))] p-5 sm:p-8"
                >
                  <div className="absolute left-5 top-5 grid h-16 w-16 place-items-center rounded-3xl bg-pink-100/90 text-rose-600 shadow-soft">
                    <Smile className="h-7 w-7" />
                  </div>
                  <div className="absolute right-5 top-8 hidden h-16 w-16 items-center justify-center rounded-3xl bg-rose-50/90 text-rose-500 shadow-soft sm:flex">
                    <Gift className="h-7 w-7" />
                  </div>

                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.32em] text-black">it’s official</p>
                    <h1 className="mt-4 text-2xl font-semibold leading-tight text-black sm:text-4xl">
                      glad you didn&apos;t say no. be ready by {formattedTime || 'your chosen time'}, I&apos;m coming to get you <span className="inline-block">🚗</span>
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-black sm:text-base">
                      P.S. normal people text. I made you a website instead. <span className="inline-block">💗</span>
                    </p>
                  </div>

                  <div className="mt-8 space-y-4 rounded-[28px] border border-rose-100 bg-gradient-to-r from-rose-50/80 to-pink-50/80 px-4 py-5 text-center shadow-sm sm:px-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-black">Your date</p>
                    <p className="text-lg font-semibold text-black">{formattedDate || 'No date selected'}</p>
                    <p className="text-base text-black">{formattedTime || 'No time selected'}</p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={startCelebration}
                      className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(17,17,17,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 sm:w-auto"
                    >
                      ok I accept 💐
                    </button>
                  </div>

                  {celebrating && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2),_transparent_40%)]" />
                      <div className="relative z-10 grid gap-3 text-center">
                        <p className="text-sm uppercase tracking-[0.28em] text-black">celebration</p>
                        <h2 className="text-3xl font-semibold text-black">YAY! It&apos;s a date! 💕</h2>
                        <p className="text-sm text-black">We&apos;re locked in for {formattedDate} at {formattedTime}. I can&apos;t wait.</p>
                      </div>
                      {[...Array(16)].map((_, index) => (
                        <motion.span
                          key={`confetti-${index}`}
                          className="absolute text-2xl"
                          initial={{ opacity: 0, y: 0, scale: 0.8 }}
                          animate={{ opacity: [0, 1, 0], y: [-10, -90, -180], rotate: [0, 90, 180] }}
                          transition={{ duration: 1.4 + (index % 5) * 0.12, delay: index * 0.06, ease: 'easeOut' }}
                          style={{ left: `${randomInRange(10, 90)}%`, top: `${randomInRange(40, 80)}%` }}
                        >
                          {index % 2 === 0 ? '💗' : '✨'}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
