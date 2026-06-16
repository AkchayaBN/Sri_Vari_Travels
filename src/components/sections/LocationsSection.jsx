import { locations } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function LocationsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Locations"
            title="Places we travel to."
            subtitle="நாங்கள் செல்லும் இடங்கள்"
            description="You can show regular pickup and drop locations here."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {locations.map((location, index) => (
              <Reveal key={location} delay={index * 0.05}>
                <div className="glass-card flex items-center justify-between px-5 py-5">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{location}</p>
                    <p className="mt-1 text-sm text-slate-500">Regular travel location</p>
                  </div>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Available
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="glass-card h-full p-5">
              <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br from-brand-100 via-white to-accent-100 p-8">
                <div className="absolute inset-6 rounded-[22px] border border-dashed border-brand-300/80" />
                <div className="absolute left-[18%] top-[28%] h-4 w-4 rounded-full bg-brand-500 shadow-[0_0_0_10px_rgba(75,169,77,0.16)]" />
                <div className="absolute left-[52%] top-[42%] h-4 w-4 rounded-full bg-accent-500 shadow-[0_0_0_10px_rgba(255,116,36,0.14)]" />
                <div className="absolute left-[68%] top-[24%] h-4 w-4 rounded-full bg-brand-500 shadow-[0_0_0_10px_rgba(75,169,77,0.16)]" />
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Map Area</p>
                  <h3 className="mt-4 font-display text-3xl text-slate-900">Travel service in nearby cities.</h3>
                  <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600">
                    You can add a live map or route image here later.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
