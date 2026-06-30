import { motion } from 'framer-motion'
import { packageTravelInfo } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Travel packages for common trips."
            subtitle="பொதுவான பயணங்களுக்கு எளிய தொகுப்புகள்"
          />
        </Reveal>

        <div className="section-grid mt-12">
          <Reveal delay={0.12}>
            <motion.article whileHover={{ y: -6 }} className="glass-card h-full p-6 sm:p-8">
              <div className="flex h-full flex-col justify-between rounded-[24px] border border-brand-100/80 bg-gradient-to-br from-white via-brand-50/50 to-accent-50/80 p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Flexible routes
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
                    {packageTravelInfo.title} :
                  </h3>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {packageTravelInfo.places.map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                          <path d="M12 2.5a7 7 0 0 0-7 7c0 4.95 5.54 10.76 6.17 11.4a1.15 1.15 0 0 0 1.66 0C13.46 20.26 19 14.45 19 9.5a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                        </svg>
                      </span>
                      {place}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-slate-900 px-5 py-4 text-sm leading-7 text-white/90 sm:text-base">
                  {packageTravelInfo.note}
                </div>
              </div>
            </motion.article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
