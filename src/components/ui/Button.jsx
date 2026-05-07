function Button({ href, children, variant = 'primary' }) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-4 font-black uppercase text-sm transition text-center'

  const variants = {
    primary: 'bg-lime-400 text-black hover:bg-white',
    secondary:
      'border border-white/20 text-white hover:border-lime-400 hover:text-lime-400',
  }

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </a>
  )
}

export default Button
