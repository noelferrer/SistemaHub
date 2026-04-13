'use client'

// Base provider shell — add global context providers here as the app grows
// (e.g. theme, analytics, toast notifications)
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
