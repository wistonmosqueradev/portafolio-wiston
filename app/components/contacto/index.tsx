import React from "react";

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "mailto:wistonmosqueradev@gmail.com", label: "Email" },
  { href: "https://wa.me/+573016538303", label: "WhatsApp" }
];

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
      <div className="mt-8 flex flex-col items-center gap-4">
   <p
        className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
      >
        Escríbeme
      </p>
   
      <ul className="mt-8 flex flex-wrap items-center gap-8 text-lg text-slate-300">
        {socialLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-cyan-300 cursor-pointer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      </div>
   
    </section>
  );
};

export default Contacto;
