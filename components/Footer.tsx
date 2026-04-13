import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/logo/option-b/logo-dark.svg"
            alt="SistemaHub"
            width={128}
            height={26}
          />
          <p className="text-xs text-n-500 max-w-xs text-center md:text-left leading-relaxed">
            Software built for real work.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="mailto:hello@sistemahub.com"
            className="text-sm text-n-400 hover:text-brand-teal transition-colors"
          >
            hello@sistemahub.com
          </a>
          <p className="text-xs text-n-500">
            © {year} SistemaHub
          </p>
        </div>

      </div>
    </footer>
  )
}
