import { pricingCards, pricingNotes } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing for your travel needs."
            subtitle="உங்கள் பயணத்திற்கு எளிய கட்டண விவரம்"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {pricingCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="glass-card h-full p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">{card.title}</p>
                  <p className="mt-5 text-3xl font-extrabold text-slate-900">{card.price}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{card.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <aside className="glass-card h-full p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-600">Notes</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Important details</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {pricingNotes.map((note) => (
                  <li key={note} className="rounded-2xl bg-brand-50/80 px-4 py-4">
                    {note}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
