import type { Metadata } from 'next';
import '@/styles/globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cámara de Comercio Asia Pacífico – APCC',
  description: 'Membresías, eventos, misiones comerciales y recursos.',
  metadataBase: new URL('https://asiapacific-chamber.com'),
  icons: { icon: '/favicon.ico' },
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-neutral-300 hover:text-white">
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        {/* HEADER */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
          <nav className="container h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Cámara de Comercio Asia Pacífico – APCC
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/quienes-somos">Quiénes somos</NavLink>
              <NavLink href="/membresias">Membresías</NavLink>
              <NavLink href="/eventos">Eventos</NavLink>
              <NavLink href="/noticias">Noticias</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
              <Link
                href="https://join.asiapacific-chamber.com"
                className="btn btn-primary"
              >
                Hazte socio
              </Link>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-neutral-800">
          <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="font-medium text-neutral-300">
                Cámara de Comercio Asia Pacífico – APCC
              </div>
              <div>Santiago, Chile · Alianzas en LatAm y Asia</div>
              <div>info@asiapacific-chamber.com · +56 9 2008 0031</div>
            </div>

            {/* Links secundarios */}
            <div className="flex flex-wrap gap-4 text-xs">
              <NavLink href="/servicios">Servicios</NavLink>
              <NavLink href="/recursos">Recursos</NavLink>
              <NavLink href="/directorio">Directorio</NavLink>
              <NavLink href="/hklaba">HKLABA</NavLink>
            </div>

            <div className="text-xs">
              © {new Date().getFullYear()} APCC. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


