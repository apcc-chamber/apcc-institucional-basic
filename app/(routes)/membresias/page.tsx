import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membresías',
  description:
    'Membresías APCC 2026–2030: Essential, Business y Corporate. Beneficios reales para importadores y exportadores: misiones, roundtables, business matching e inteligencia de mercado.',
};

type Plan = {
  id: 'essential' | 'business' | 'corporate';
  name: string;
  price?: string; // si aún no tienes precio público, puedes dejar "A convenir"
  blurb: string;
  best?: boolean;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  note?: string;
};

const PLANS: Plan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'UF — A convenir',
    blurb:
      'Para emprendedores y PYMES que comienzan con Asia. Acceso a la red, contenidos y actividades base.',
    features: [
      'Acceso a la Red Asia Pacífico',
      '1 Roundtable sectorial / trimestre',
      'Webinars y seminarios (cupos estándar)',
      'Guías y reportes intro (biblioteca digital)',
      'Difusión básica en newsletter',
      'Orientación comercial inicial (1 sesión)',
    ],
    ctaHref: 'https://join.asiapacific-chamber.com',
    ctaLabel: 'Comenzar con Essential',
    note: 'Ideal para validar oportunidades y primeros contactos.',
  },
  {
    id: 'business',
    name: 'Business',
    price: 'UF — A convenir',
    blurb:
      'Para empresas en crecimiento con flujo estable de importación/exportación. Soporte y visibilidad ampliada.',
    best: true,
    features: [
      'Todo lo de Essential',
      '2 Roundtables sectoriales / trimestre',
      'Business Matching con proveedores verificados',
      'Agenda preferente en ferias / misiones',
      'Guías y reportes sectoriales avanzados',
      'Difusión destacada en web y newsletter',
      '2 reuniones ejecutivas de orientación / año',
    ],
    ctaHref: 'https://join.asiapacific-chamber.com',
    ctaLabel: 'Elegir Business',
    note: 'La membresía más elegida por PYMES y medianas.',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    price: 'UF — A convenir',
    blurb:
      'Para corporativos y grupos empresariales que requieren agenda a medida y presencia regional.',
    features: [
      'Todo lo de Business',
      'Agenda curada 1:1 en misiones y ferias',
      'Mesa de trabajo ejecutiva (C-level)',
      'Reportes a medida y alertas comerciales',
      'Branding corporativo en eventos seleccionados',
      'Capacitaciones in-house (hasta 2 / año)',
      'Reuniones trimestrales de seguimiento',
    ],
    ctaHref: 'https://join.asiapacific-chamber.com',
    ctaLabel: 'Hablar con APCC',
    note: 'Diseñada para impacto multipaís y equipos comerciales.',
  },
];

const COMPARISON = [
  { feature: 'Red Asia Pacífico', essential: 'Sí', business: 'Sí', corporate: 'Sí' },
  { feature: 'Roundtables por trimestre', essential: '1', business: '2', corporate: '2 + ejecutivas' },
  { feature: 'Webinars / Seminarios', essential: 'Acceso estándar', business: 'Preferencia de cupos', corporate: 'Preferencia + branding' },
  { feature: 'Business Matching', essential: '—', business: 'Sí', corporate: 'Sí (curado 1:1)' },
  { feature: 'Misiones a Asia', essential: 'Cupos estándar', business: 'Preferente', corporate: 'Curada 1:1' },
  { feature: 'Reportes / Guías', essential: 'Intro', business: 'Sectoriales', corporate: 'A medida' },
  { feature: 'Difusión', essential: 'Newsletter (básica)', business: 'Web + Newsletter', corporate: 'Destacada / eventos' },
  { feature: 'Orientación ejecutiva', essential: '1 sesión', business: '2 / año', corporate: 'Trimestral' },
  { feature: 'Capacitaciones in-house', essential: '—', business: '—', corporate: 'Hasta 2 / año' },
];

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Membresías APCC 2026–2030</h1>
        <p className="mt-3 text-neutral-300">
          Programas diseñados para entregar <strong>valor real y renovable</strong> a importadores y exportadores: inteligencia de mercado,
          networking sectorial, business matching y acceso a misiones y ferias en Asia.
        </p>
        <div className="mt-6 text-sm text-neutral-400">
          ¿Tienes dudas? <Link href="/contacto" className="underline underline-offset-4 hover:text-neutral-200">Agenda una llamada</Link>.
        </div>
      </header>

      {/* PLANES */}
      <section className="mt-10 grid md:grid-cols-3 gap-4">
        {PLANS.map((p) => (
          <article
            key={p.id}
            className={`rounded-2xl border ${p.best ? 'border-red-900' : 'border-neutral-800'} bg-neutral-900 p-6 flex flex-col`}
          >
            <div className="text-xs uppercase tracking-wider text-neutral-500">
              {p.best ? 'Recomendado' : 'Membresía'}
            </div>
            <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
            <div className="mt-2 text-sm text-neutral-400 min-h-[48px]">{p.blurb}</div>

            <div className="mt-4 text-2xl font-semibold">{p.price}</div>

            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden>✓</span>
                  <span className="text-neutral-300">{f}</span>
                </li>
              ))}
            </ul>

            {p.note && <div className="mt-4 text-xs text-neutral-500">{p.note}</div>}

            <div className="mt-6">
              <Link
                href={p.ctaHref}
                className={`btn ${p.best ? 'btn-primary' : 'btn-secondary'}`}
                target="_blank"
              >
                {p.ctaLabel}
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* SELLOS / BENEFICIOS TRANSVERSALES */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h3 className="text-lg font-semibold">Beneficios transversales</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Todos los planes incluyen soporte del equipo APCC, calendario editorial con <em>inteligencia comercial</em> y acceso a la Red Asia Pacífico.
          </p>
          <ul className="mt-4 grid md:grid-cols-3 gap-2 text-sm">
            {[
              'Acompañamiento del equipo gremial y comercial',
              'Calendario de contenidos: guías, alertas y radar de ferias',
              'Acceso a la Red Asia Pacífico y HKLABA',
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span aria-hidden>•</span>
                <span className="text-neutral-300">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TABLA COMPARATIVA */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold">Comparativa rápida</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-800">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-950/60">
              <tr className="border-b border-neutral-800">
                <th className="text-left p-3">Característica</th>
                <th className="text-left p-3">Essential</th>
                <th className="text-left p-3">Business</th>
                <th className="text-left p-3">Corporate</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-neutral-800">
                  <td className="p-3 text-neutral-300">{row.feature}</td>
                  <td className="p-3 text-neutral-400">{row.essential}</td>
                  <td className="p-3 text-neutral-400">{row.business}</td>
                  <td className="p-3 text-neutral-400">{row.corporate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-neutral-500">
          *Las agendas y cupos en ferias/misiones están sujetas a disponibilidad y calendario oficial.
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 grid md:grid-cols-2 gap-4">
        {[
          {
            q: '¿Puedo cambiar de plan más adelante?',
            a: 'Sí. Puedes subir o bajar de plan previo aviso y ajuste proporcional.',
          },
          {
            q: '¿Las misiones incluyen pasajes y hotel?',
            a: 'No, esos costos son del participante. APCC gestiona agendas, ferias y reuniones.',
          },
          {
            q: '¿Hacen facturación en Chile?',
            a: 'Sí. Emitimos documentos tributarios conforme a normativa vigente.',
          },
          {
            q: '¿Puedo sumar a mi equipo a los webinars?',
            a: 'Sí. Los cupos varían por plan y disponibilidad. En Corporate se pueden coordinar sesiones in-house.',
          },
        ].map((item) => (
          <article key={item.q} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h4 className="text-sm font-semibold">{item.q}</h4>
            <p className="mt-2 text-sm text-neutral-400">{item.a}</p>
          </article>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">¿Listo para elegir tu membresía?</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Te ayudamos a seleccionar el plan ideal según tu sector, volumen y metas con Asia.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="https://join.asiapacific-chamber.com" className="btn btn-primary" target="_blank">
              Unirme ahora
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              Hablar con APCC
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
