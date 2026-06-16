import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import { vehicleGallery } from '../../data/siteContent'

export function VehicleShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isLightboxOpen])

  const activeImage = vehicleGallery[activeIndex]

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev + 1) % vehicleGallery.length)
    } else if (direction === 'right') {
      setActiveIndex((prev) => (prev - 1 + vehicleGallery.length) % vehicleGallery.length)
    }
  }

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      handleSwipe('right')
    } else if (info.offset.x < -swipeThreshold) {
      handleSwipe('left')
    }
  }

  return (
    <section id="vehicle" className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Vehicle"
            title="See our Sri Vari Travels van."
            subtitle="எங்கள் வாகனத்தை பாருங்கள்"
            description="These are real photos of our van. More photos can be added later."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <article className="glass-card overflow-hidden p-4 sm:p-5">
              <motion.button
                type="button"
                className="w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-50 to-accent-50 cursor-grab active:cursor-grabbing relative"
                onClick={() => setIsLightboxOpen(true)}
                drag="x"
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: 0, right: 0 }}
              >
                {activeImage.isVideo ? (
                  <>
                    <img
                      key={activeImage.thumbnail}
                      src={activeImage.thumbnail}
                      alt={activeImage.alt}
                      className="max-h-[560px] w-full rounded-[24px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[24px]">
                      <svg className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <motion.img
                    key={activeImage.image}
                    src={activeImage.image}
                    alt={activeImage.alt}
                    className="max-h-[560px] w-full rounded-[24px] object-cover"
                    initial={{ opacity: 0.2, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                )}
              </motion.button>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {vehicleGallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`glass-card flex h-full items-center gap-4 p-4 text-left transition hover:-translate-y-1 ${
                    activeIndex === index ? 'ring-2 ring-brand-300' : 'ring-1 ring-transparent'
                  }`}
                >
                  <div className="relative h-20 w-24 rounded-2xl overflow-hidden bg-slate-100">
                    {item.isVideo ? (
                      <>
                        <img src={item.thumbnail} alt={item.alt} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">Tap to see in large view.</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              className="w-full max-w-4xl overflow-hidden rounded-[28px] bg-white p-4 shadow-soft"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              drag="x"
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              dragConstraints={{ left: 0, right: 0 }}
            >
              {activeImage.isVideo ? (
                <video
                  src={activeImage.image}
                  className="max-h-[85vh] w-full rounded-[24px] object-contain"
                  controls
                  controlsList="nodownload"
                  autoPlay
                />
              ) : (
                <img
                  src={activeImage.image}
                  alt={activeImage.alt}
                  className="max-h-[85vh] w-full rounded-[24px] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
