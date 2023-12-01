import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { inter } from '@/app/libs/fonts';
import Navbar from '@/components/Navbar';
import GameBg from '@/components/GameBg';
import Script from 'next/script';
import NprogressProvider from '@/components/context/NprogressProvider';
import './globals.css';


export const metadata: Metadata = {
  title: 'MeshDev | Inicio',
  description: 'Portfolio de proyectos de Mesach Venegas, desarrollador web, full stack, desarrollo de sitios web, estáticos y Web Apps',
  keywords: ["desarrollo web", "web apps","landingpages",'development','mesach venegas','meshdev',]
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('ts', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={`${inter.className} relative antialiased bg-secondary grid grid-cols-1 md:grid-cols-layout md:grid-rows-1 w-full h-full min-h-screen dark:bg-slate-950`}>
        <NprogressProvider>
          <Navbar />
          <GameBg>
            {children}
          </GameBg>
        </NprogressProvider>
        <Analytics />
      </body>
    </html>
  )
}
