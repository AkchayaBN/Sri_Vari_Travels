import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/siteContent'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What customers say."
            subtitle="எங்கள் வாடிக்கையாளர்கள் சொல்வது"
            description="These are sample reviews. Real customer reviews can be added later."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <div className="glass-card mx-auto max-w-4xl overflow-hidden p-8 sm:p-10">
            <div className="mb-6 text-5xl leading-none text-accent-300">"</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xl leading-9 text-slate-700 sm:text-2xl">{activeTestimonial.quote}</p>
                <div className="mt-8">
                  <p className="text-lg font-bold text-slate-900">{activeTestimonial.name}</p>
                  <p className="text-sm uppercase tracking-[0.22em] text-brand-700">{activeTestimonial.trip}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    activeIndex === index ? 'bg-brand-600' : 'bg-brand-100'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
