export function SectionHeading({ eyebrow, title, subtitle, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-base font-medium text-brand-700 sm:text-lg">{subtitle}</p>
      ) : null}
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  )
}
