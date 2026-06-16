import { navLinks } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white/80 py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl text-slate-900">Sri Vari Travels</p>
          <p className="mt-1">Placeholder contact details for quick edits later.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand-700">
              {link.label}
            </a>
          ))}
        </div>
        <p>© 2026 Sri Vari Travels. All rights reserved.</p>
      </div>
    </footer>
  )
}
