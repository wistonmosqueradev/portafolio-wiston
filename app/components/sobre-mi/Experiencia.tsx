const experience = [
  {
    period: "2022 - 2026 (3 años y medio)",
    role: "Desarrollador Frontend",
    company: "Longevo",
    description:
      "Trabajé 3 años y medio en una empresa internacional enfocada en preparación de entrenamiento y nutrición para una mejor salud. Construí interfaces dinámicas, amigables y fáciles de usar para mejorar la experiencia de los usuarios en productos digitales orientados al bienestar.",
  },
];

export const Experiencia = () => {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--accent)]/30 md:block" />
      <div className="space-y-6 md:space-y-8">
        {experience.map((item, index) => (
          <div
            key={`${item.company}-${item.role}-${item.period}`}
            className="grid gap-3 rounded-[1.25rem] border border-[var(--border)] bg-[var(--background)]/70 p-5 md:grid-cols-2 md:gap-10 md:p-6"
          >
            <div
              className={`text-left md:text-right ${index % 2 ? "md:order-2 md:text-left" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-[var(--foreground)]">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                {item.company}
              </p>
            </div>
            <div
              className={`text-sm leading-7 text-[var(--muted)] ${index % 2 ? "md:order-1 md:text-right" : ""}`}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
