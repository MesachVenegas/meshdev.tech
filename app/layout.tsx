import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import Navbar from '@/app/ui/Navbar';
import Footer from '@/app/ui/Footer';
import './globals.css';


export const metadata: Metadata = {
  title: 'MeshDev | Inicio',
  description: 'Portfolio de proyectos de Mesach Venegas, desarrollador web, full stack, desarrollo de sitios web, estáticos y Web Apps',
  keywords: ["desarrollo web", "web apps","landingpages",'development','mesach venegas','meshdev',]
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-secondary text-black grid grid-cols-1 md:grid-cols-layout md:grid-rows-1 w-full min-h-screen`}>
        <Navbar />
        <div className='flex flex-col gap-4 min-h-screen'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
