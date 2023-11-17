import type { Metadata } from 'next';
import { inter } from '@/app/libs/fonts';
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import GameBg from '@/components/GameBg';


export const metadata: Metadata = {
  title: 'MeshDev | Inicio',
  description: 'Portfolio de proyectos de Mesach Venegas, desarrollador web, full stack, desarrollo de sitios web, estáticos y Web Apps',
  keywords: ["desarrollo web", "web apps","landingpages",'development','mesach venegas','meshdev',]
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={`${inter.className} relative antialiased bg-secondary grid grid-cols-1 md:grid-cols-layout md:grid-rows-1 w-full h-full min-h-screen dark:bg-slate-950`}>
        <Navbar />
        <GameBg>
          {children}
        </GameBg>
      </body>
    </html>
  )
}
