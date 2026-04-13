'use client'

import { useState, useEffect, useRef } from 'react'

const PRESETS = [
  { name: 'Default',  dark: '#0B1437', teal: '#00BFA6', blue: '#1A56DB' },
  { name: 'Plum',     dark: '#451952', teal: '#f39f5a', blue: '#ae445a' },
  { name: 'Obsidian', dark: '#111318', teal: '#818cf8', blue: '#6366f1' },
  { name: 'Forest',   dark: '#0d1f1a', teal: '#34d399', blue: '#059669' },
]

type Theme = { dark: string; teal: string; blue: string }

const DEFAULT: Theme = { dark: '#0B1437', teal: '#00BFA6', blue: '#1A56DB' }

function hexToChannels(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r} ${g} ${b}`
}

function applyTheme({ dark, teal, blue }: Theme) {
  const root = document.documentElement
  root.style.setProperty('--color-brand-dark', hexToChannels(dark))
  root.style.setProperty('--color-brand-teal', hexToChannels(teal))
  root.style.setProperty('--color-brand-blue', hexToChannels(blue))
}

const PICKERS: { label: string; key: keyof Theme }[] = [
  { label: 'Background', key: 'dark' },
  { label: 'Accent',     key: 'teal' },
  { label: 'Secondary',  key: 'blue' },
]

export default function ThemeSwitcher() {
  const [open, setOpen]     = useState(false)
  const [theme, setTheme]   = useState<Theme>(DEFAULT)
  const panelRef            = useRef<HTMLDivElement>(null)

  // Load saved theme on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sh-theme')
      if (saved) {
        const parsed: Theme = JSON.parse(saved)
        setTheme(parsed)
        applyTheme(parsed)
      }
    } catch {}
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  function apply(next: Theme) {
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('sh-theme', JSON.stringify(next))
  }

  function isActive(p: Theme) {
    return theme.dark === p.dark && theme.teal === p.teal && theme.blue === p.blue
  }

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50">

      {/* Panel */}
      {open && (
        <div
          className="mb-3 w-[272px] rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden"
          style={{ background: 'rgba(6, 10, 22, 0.96)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <span
              className="text-[10px] font-mono tracking-[0.15em] uppercase"
              style={{ color: '#7B8DB0' }}
            >
              Theme Switcher
            </span>
            <button
              onClick={() => setOpen(false)}
              className="transition-colors"
              style={{ color: '#4A5E8A' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4A5E8A')}
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="px-5 pb-5">
            {/* Presets */}
            <p
              className="text-[9px] font-mono uppercase tracking-widest mb-2"
              style={{ color: '#4A5E8A' }}
            >
              Presets
            </p>
            <div className="grid grid-cols-2 gap-1.5 mb-5">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => apply(p)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all"
                  style={{
                    border: `1px solid ${isActive(p) ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.06)'}`,
                    background: isActive(p) ? 'rgba(255,255,255,0.07)' : 'transparent',
                  }}
                >
                  {/* Swatch */}
                  <div className="flex rounded overflow-hidden flex-shrink-0" style={{ gap: '1px' }}>
                    <div className="w-2.5 h-[18px]" style={{ background: p.dark }} />
                    <div className="w-2.5 h-[18px]" style={{ background: p.blue }} />
                    <div className="w-2.5 h-[18px]" style={{ background: p.teal }} />
                  </div>
                  <span className="text-[11px]" style={{ color: '#7B8DB0' }}>{p.name}</span>
                </button>
              ))}
            </div>

            {/* Custom pickers */}
            <p
              className="text-[9px] font-mono uppercase tracking-widest mb-3"
              style={{ color: '#4A5E8A' }}
            >
              Custom
            </p>
            <div className="space-y-3 mb-5">
              {PICKERS.map(({ label, key }) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: '#7B8DB0' }}>{label}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono" style={{ color: '#4A5E8A' }}>
                      {theme[key].toUpperCase()}
                    </span>
                    <label
                      className="relative w-7 h-7 rounded-lg cursor-pointer transition-colors"
                      style={{
                        background: theme[key],
                        border: '1px solid rgba(255,255,255,0.15)',
                        flexShrink: 0,
                      }}
                    >
                      <input
                        type="color"
                        value={theme[key]}
                        onChange={e => apply({ ...theme, [key]: e.target.value })}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>

            {/* Reset */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
              <button
                onClick={() => apply(DEFAULT)}
                className="w-full text-[10px] font-mono tracking-wider uppercase text-center transition-colors"
                style={{ color: '#4A5E8A' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7B8DB0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4A5E8A')}
              >
                Reset to default
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen(o => !o)}
        title="Theme switcher"
        className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
        style={{
          background: 'rgba(6, 10, 22, 0.9)',
          border: `1px solid ${open ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.09)'}`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Mini swatch of current theme */}
        <div className="flex rounded overflow-hidden" style={{ gap: '1px' }}>
          <div className="w-2 h-4" style={{ background: theme.dark, border: '0.5px solid rgba(255,255,255,0.1)' }} />
          <div className="w-2 h-4" style={{ background: theme.blue }} />
          <div className="w-2 h-4" style={{ background: theme.teal }} />
        </div>
      </button>
    </div>
  )
}
