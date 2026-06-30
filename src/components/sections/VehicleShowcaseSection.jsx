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
  const activePreview = activeImage.isVideo ? activeImage.thumbnail : activeImage.image

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
            description="Browse real photos of our van in a clean gallery view. Tap any image to open it large."
          />
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <article className="glass-card overflow-hidden p-4 sm:p-5 lg:p-6">
              <div className="rounded-[28px] border border-white/80 bg-gradient-to-br from-brand-50/90 via-white to-accent-50/90 p-3 sm:p-4">
                <motion.button
                  type="button"
                  className="relative w-full cursor-grab overflow-hidden rounded-[24px] bg-white active:cursor-grabbing"
                  onClick={() => setIsLightboxOpen(true)}
                  drag="x"
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  dragConstraints={{ left: 0, right: 0 }}
                >
                  <motion.img
                    key={activePreview}
                    src={activePreview}
                    alt={activeImage.alt}
                    className="h-[300px] w-full rounded-[24px] object-cover sm:h-[420px] lg:h-[560px]"
                    initial={{ opacity: 0.2, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/55 to-transparent px-5 py-4 text-left">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                        Sri Vari Travels
                      </p>
                      <p className="mt-1 text-sm text-white/90">
                        {activeIndex + 1} / {vehicleGallery.length}
                      </p>
                      {activeImage.isVideo ? (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                          Inside Tour Video
                        </div>
                      ) : null}
                    </div>

                    {activeImage.isVideo ? (
                      <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                </motion.button>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Gallery strip
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Swipe the main image or choose any thumbnail below.</p>
                </div>
                <div className="hidden rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 sm:block">
                  {vehicleGallery.length} items
                </div>
              </div>

              <div className="mt-5 overflow-x-auto pb-2">
                <div className="flex min-w-max gap-4">
                  {vehicleGallery.map((item, index) => {
                    const preview = item.isVideo ? item.thumbnail : item.image

                    return (
                      <Reveal key={item.title} delay={index * 0.04}>
                        <button
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`relative h-24 w-28 shrink-0 overflow-hidden rounded-[22px] border-2 bg-white transition hover:-translate-y-1 sm:h-28 sm:w-36 ${
                            activeIndex === index
                              ? 'border-brand-400 shadow-soft'
                              : 'border-transparent opacity-80 hover:opacity-100'
                          }`}
                          aria-label={`Open gallery image ${index + 1}`}
                        >
                          <img src={preview} alt={item.alt} className="h-full w-full object-cover" />
                          {item.isVideo ? (
                            <>
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                              </div>
                              <div className="absolute bottom-2 left-2 rounded-full bg-slate-950/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                                Inside Tour
                              </div>
                            </>
                          ) : null}
                        </button>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </article>
          </Reveal>
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
