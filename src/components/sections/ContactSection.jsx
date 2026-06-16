import { contactCards } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'

export function ContactSection() {
  return (
    <section id="contact" className="pb-20 pt-20 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <div className="glass-card overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <Reveal>
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
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{card.title}</p>
                      <p className="mt-1 text-base text-slate-700">{card.value}</p>
                    </div>
                    <span className="text-accent-600">-&gt;</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button as="a" href="tel:+919043422294">
                  Call Now
                </Button>
                <Button as="a" href="https://wa.me/919025257336" variant="whatsapp">
                  WhatsApp Us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex h-full min-h-[420px] flex-col rounded-[28px] bg-slate-900 p-6 text-white">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Address and Map</p>
                  <p className="mt-3 text-lg font-semibold">Sri Vari Travels address here</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Add your real office or pickup location here.
                  </p>
                </div>
                <div className="mt-5 flex-1 rounded-[24px] border border-dashed border-white/15 bg-gradient-to-br from-brand-900/40 to-accent-900/30 p-6">
                  <div className="flex h-full items-center justify-center rounded-[20px] border border-white/10 bg-slate-950/20">
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-[0.24em] text-brand-200">Map</p>
                      <p className="mt-4 max-w-sm text-base leading-7 text-slate-200">
                        You can add Google Maps or pickup instructions here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
