import { contactCards, contactLocation } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="pb-20 pt-20 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <div className="glass-card overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <Reveal>
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="Contact"
                  title="Contact us for booking."
                  subtitle="பதிவுக்கு எங்களை தொடர்பு கொள்ளுங்கள்"
                  description="Call or message us for trip details, price, and booking."
                />

                <div className="mt-8 space-y-4">
                  {contactCards.map((card) => (
                    <a
                      key={card.title}
                      href={card.href}
                      className="flex items-center justify-between rounded-[24px] border border-brand-100 bg-white px-5 py-5 transition hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                          {card.title}
                        </p>
                        <p className="mt-1 text-base text-slate-700">{card.value}</p>
                      </div>
                      <span className="text-accent-600">-&gt;</span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 rounded-[24px] border border-brand-100 bg-brand-50/50 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Address</p>
                  <p className="mt-2 text-base font-semibold leading-8 text-slate-900">
                    {contactLocation.address}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex h-full items-center justify-center rounded-[28px] border border-brand-100 bg-gradient-to-br from-brand-50/60 via-white to-accent-50/50 p-8 text-center shadow-soft">
                <div className="max-w-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Sri Vari Travels
                  </p>
                  <h3 className="mt-4 font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
                    Thank you for visiting us
                  </h3>
                  <p className="mt-6 text-base font-medium text-slate-700 sm:text-lg">
                    Second Phone number : 9025257336
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
