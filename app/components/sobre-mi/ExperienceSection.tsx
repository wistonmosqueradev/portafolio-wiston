import { Experiencia } from "./Experiencia";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="space-y-8 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),var(--background))] p-8 shadow-[0_20px_80px_rgba(5,10,25,0.25)]">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Trayectoria
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
          Experiencia profesional
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Un recorrido que combina desarrollo frontend, diseño de producto y trabajo en entornos reales.
        </p>
      </div>

      <Experiencia />
    </section>
  );
}
