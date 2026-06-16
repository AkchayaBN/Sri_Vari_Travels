import { motion } from 'framer-motion'
import { packages } from '../../data/siteContent'
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
            description="You can show temple trips, airport trips, and hill station travel here."
          />
        </Reveal>

        <div className="section-grid mt-12 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((travelPackage, index) => (
            <Reveal key={travelPackage.title} delay={index * 0.08}>
              <motion.article whileHover={{ y: -8 }} className="glass-card h-full overflow-hidden">
                <div className="bg-gradient-to-br from-brand-50 to-accent-50 p-5">
                  <img src={travelPackage.image} alt="" className="rounded-[22px]" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900">{travelPackage.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{travelPackage.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {travelPackage.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                          ✓
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
