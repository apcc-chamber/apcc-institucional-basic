import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membresías',
};

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Membresías</h1>
      <p className="mt-2 text-neutral-400">Contenido institucional en preparación.</p>
      <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <p className="text-sm">Agrega aquí secciones, cards y tablas según el contenido oficial.</p>
      </div>
    </section>
  );
}
