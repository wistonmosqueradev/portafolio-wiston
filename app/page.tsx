import Contacto from "./components/contacto";
import Navbar from "./components/navbar";
import Proyectos from "./components/proyectos";
import SobreMi from "./components/sobre-mi";



export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main
        id="inicio"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8 lg:py-16"
      >
        <section className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-[color:var(--surface)]/80 p-8 shadow-[0_20px_80px_rgba(5,10,25,0.35)] lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <p className="mb-4 w-fit rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
              Desarrollador Frontend
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Hola, soy Wiston y creo experiencias web modernas y memorables.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Me enfoco en interfaces limpias, rápidas y pensadas para que cada
              producto sea claro, usable y atractivo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Hablemos
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)]/70 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-xl font-semibold text-[var(--background)]">
                WM
              </div>
              <div>
                <p className="font-semibold text-[var(--foreground)]">
                  Wiston Mosquera
                </p>
                <p className="text-sm text-[var(--muted)]">
                  Frontend • UI • Performance
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm text-[var(--muted)]">
                  Proyectos entregados
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                  +12
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm text-[var(--muted)]">Enfoque principal</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                  UX
                </p>
              </div>
            </div>
          </div>
        </section>

        <SobreMi />

        <Proyectos />

        <Contacto />
      </main>
    </div>
  );
}
