const socialLinks = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "mailto:alex@email.com", label: "Email" },
];

export default function SiteFooter() {
  return (
    <>
   
      <footer className="border-t border-cyan-500/10 px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-wide text-slate-100">Frontend.Dev</p>
            <p className="mt-2 text-base text-slate-300">
              Copyright 2026 Frontend Engineer Portfolio. Built with Precision.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-8 text-lg text-slate-300">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition-colors hover:text-cyan-300 cursor-pointer  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}