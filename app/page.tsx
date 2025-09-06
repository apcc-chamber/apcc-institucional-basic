import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Inicio' };

export default function Page() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(153,27,27,0.25),rgba(0,0,0,0)_70%)]" />
      <div className="relative container py-24 lg:py-28">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">El puente confiable entre Chile y Asia Pacífico</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Membresías 2026–2030 con beneficios reales para importadores y exportadores.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/membresias" className="btn btn-primary">Ver planes</Link>
          <a href="/#beneficios" className="btn btn-secondary">Beneficios</a>
        </div>
        <div className="mt-10 text-sm text-neutral-400">2 misiones comerciales al año · Webinars mensuales · Networking trimestral</div>
      </div>
      <section id="beneficios" className="container py-16 border-t border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-semibold">Beneficios transversales</h2>
        <p className="mt-2 text-neutral-400 max-w-2xl">Herramientas y espacios que impulsan tus negocios.</p>
        <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {['Biblioteca digital con guías', 'Grupos por sector', 'Difusión en web/newsletter', 'Acceso preferente a misiones'].map((b) => (
            <li key={b} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">{b}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
