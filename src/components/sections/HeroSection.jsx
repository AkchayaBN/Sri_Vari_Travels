import { motion } from 'framer-motion'
import { Button } from '../common/Button'
import { heroStats } from '../../data/siteContent'

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-12 sm:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-hero-blend" aria-hidden="true" />
      <div className="section-shell">
        <div className="grid items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
              Van service for family trips and temple travel
            </span>
            <h1 className="mt-6 max-w-2xl font-display text-5xl leading-tight text-slate-900 sm:text-6xl">
              Sri Vari Travels for safe and comfortable travel.
            </h1>
            <p className="mt-3 max-w-2xl text-lg font-medium text-brand-700">
              குடும்ப பயணம் மற்றும் கோவில் சுற்றுலாவுக்கு நம்பகமான வாகன சேவை
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We provide simple and reliable travel service for family trips, temple tours, local rides, and
              outstation journeys.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#contact">
                Book Now
              </Button>
              <Button as="a" href="https://wa.me/919025257336" variant="whatsapp">
                WhatsApp Us
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="glass-card px-5 py-4">
                  <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-brand-100 blur-3xl" aria-hidden="true" />
            <div
              className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-accent-200 blur-3xl"
              aria-hidden="true"
            />
            <div className="glass-card relative overflow-hidden p-4 sm:p-6">
              <div className="overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-50 to-accent-50 p-3">
                <img
                  src="/images/svt-van-front.jpeg"
                  alt="Sri Vari Travels van front view"
                  className="mx-auto aspect-[4/5] w-full rounded-[20px] object-cover object-center"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-slate-900 px-5 py-4 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-brand-200">Featured vehicle</p>
                  <p className="mt-1 text-lg font-semibold">Sri Vari Travels van</p>
                </div>
                <a href="#vehicle" className="text-sm font-semibold text-accent-200 transition hover:text-accent-100">
                  View gallery
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
