import React from 'react'

const Navbar = () => {
  return (
        <header className="sticky top-0 z-20 border-b border-[var(--border)]/70 bg-[var(--background)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#inicio"
            className="text-lg font-semibold tracking-[0.2em] text-[var(--foreground)]"
          >
            WISTON
          </a>
          <nav className="flex gap-4 text-sm text-[var(--muted)]">
            <a
              href="#sobre-mi"
              className="transition hover:text-[var(--foreground)]"
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className="transition hover:text-[var(--foreground)]"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="transition hover:text-[var(--foreground)]"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>
  )
}

export default Navbar
