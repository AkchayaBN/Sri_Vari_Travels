import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand, navLinks } from '../data/siteContent'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-brand-50 to-orange-50 p-1 shadow-soft ring-1 ring-amber-100">
            {logoError ? (
              <span className="grid h-full w-full place-items-center rounded-[14px] bg-white text-lg font-extrabold text-brand-800">
                SV
              </span>
            ) : (
              <img
                src={brand.logoPath}
                alt="Sri Vari Travels logo"
                className="h-full w-full rounded-[14px] object-contain"
                onError={() => setLogoError(true)}
              />
            )}
          </span>
          <div>
            <p className="font-display text-xl text-slate-900">{brand.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{brand.tagline}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-slate-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-brand-100 bg-white md:hidden"
          >
            <div className="section-shell flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
