import React from 'react'

const Contacto = () => {
  return (
          <section
          id="contacto"
          className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),var(--background))] p-8 shadow-[0_20px_80px_rgba(5,10,25,0.25)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
            Listo para construir algo increíble contigo.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Si buscas una propuesta clara, visualmente cuidada y técnicamente
            sólida, me encantaría saber más de tu proyecto.
          </p>
          <a
            href="mailto:contacto@wiston.dev"
            className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
          >
            Escríbeme
          </a>
        </section>
  )
}

export default Contacto
