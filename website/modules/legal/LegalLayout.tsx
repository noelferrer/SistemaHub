import Link from 'next/link'

interface Props {
  badge: string
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ badge, title, lastUpdated, children }: Props) {
  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-32 pb-28">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-n-500 hover:text-brand-teal transition-colors mb-12 uppercase tracking-widest"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          sistemahub.com
        </Link>

        {/* Header */}
        <div className="mb-12 pb-10 border-b border-white/[0.07]">
          <p className="text-[11px] font-mono text-brand-teal tracking-[0.14em] uppercase mb-5">{badge}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-5">
            {title}
          </h1>
          <p className="text-sm text-n-500 font-mono">Last updated: {lastUpdated}</p>
        </div>

        {/* Prose */}
        <div className="legal-prose">
          {children}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-n-500">
            Questions? Email us at{' '}
            <a href="mailto:sistemahub1@gmail.com" className="text-brand-teal hover:underline">
              sistemahub1@gmail.com
            </a>
          </p>
          <div className="flex gap-5 text-xs text-n-500">
            <Link href="/terms" className="hover:text-n-300 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-n-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
