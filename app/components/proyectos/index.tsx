import React from 'react'

const proyectos = [
  {
    title: "E-commerce moderno",
    description:
      "Tienda online con catálogo dinámico, buscador y flujo de pago optimizado para móviles.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Plataforma SaaS",
    description:
      "Panel administrativo con métricas, autenticación y experiencia de usuario muy clara.",
    stack: ["React", "Node.js", "CSS Modules"],
  },
  {
    title: "Landing premium",
    description:
      "Sitio de presentación con enfoque visual, animaciones suaves y estructura pensada para conversiones.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const Proyectos = () => {
  return (
          <section id="proyectos" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Proyectos
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                Trabajos que reflejan mi forma de trabajar.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {proyectos.map((proyecto) => (
              <article key={proyecto.title} className="section-card p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {proyecto.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {proyecto.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {proyecto.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
  )
}

export default Proyectos
