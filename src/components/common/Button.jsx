export function Button({
  as: Component = 'button',
  href,
  children,
  className = '',
  variant = 'primary',
  ...props
}) {
  const variants = {
    primary:
      'bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:outline-brand-600',
    secondary:
      'bg-white text-slate-800 ring-1 ring-brand-200 hover:bg-brand-50 focus-visible:outline-brand-500',
    whatsapp:
      'bg-accent-400 text-slate-900 shadow-glow hover:bg-accent-500 focus-visible:outline-accent-400',
  }

  return (
    <Component
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
