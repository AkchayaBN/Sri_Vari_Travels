import { driverHighlights } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'

export function DriverSection() {
  return (
    <section id="driver" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-card overflow-hidden p-4">
              <div className="rounded-[24px] bg-gradient-to-br from-brand-50 via-white to-accent-50 p-4">
                <img
                  src="/images/svt-van-driver-front.jpeg"
                  alt="Sri Vari Travels driver standing in front of the van"
                  className="mx-auto max-h-[620px] w-full rounded-[20px] object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Driver"
              title="Friendly and safe driver service."
              subtitle="நட்பு மனப்பான்மை மற்றும் பாதுகாப்பான ஓட்டுநர் சேவை"
              description="Use this section to show driver experience, local route knowledge, and safe service."
            />
            <div className="mt-8 space-y-4">
              {driverHighlights.map((highlight) => (
                <div key={highlight} className="glass-card flex items-start gap-4 px-5 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    *
                  </span>
                  <p className="text-base leading-7 text-slate-600">{highlight}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#contact">
                Contact Us
              </Button>
              <Button as="a" href="tel:+919043422294" variant="secondary">
                Call Now
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
