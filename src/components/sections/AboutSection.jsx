import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { introCards } from '../../data/siteContent'

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Simple travel service you can trust."
            subtitle="எளிய மற்றும் நம்பகமான பயண சேவை"
            description="We focus on safe travel, clear communication, and easy booking for families and small groups."
          />
        </Reveal>

        <div className="section-grid mt-12 md:grid-cols-3">
          {introCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="glass-card h-full p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
