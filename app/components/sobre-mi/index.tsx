import React from 'react'
const habilidades = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Optimización web",
  "zustand",
  'React Query',
  "Redux",
  "TanStack Query",
];
const SobreMi = () => {
  return (
   <section
          id="sobre-mi"
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <article className="section-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Sobre mí
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
              Diseño interfaces que combinan claridad, modernidad y resultados.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Disfruto convertir ideas complejas en experiencias simples y
              atractivas. Trabajo con tecnologías actuales para construir sitios
              web rápidos, escalables y con una identidad visual sólida.
            </p>
          </article>

          <article className="section-card p-8">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Habilidades clave
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {
               habilidades.map((habilidades)=>{
                return(
                  <span
                  key={habilidades}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)]/70 px-3 py-2 text-sm text-[var(--foreground)]"
                >
                  {habilidades}
                </span>
                )
               })

              }
            </div>
          </article>
        </section>
  )
}

export default SobreMi
