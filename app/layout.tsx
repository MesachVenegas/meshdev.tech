import Script from 'next/script';
import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import '@/styles/globals.css';
import { inter } from '@/styles/fonts';
import GameBg from '@/components/game-bg';
import NprogressProvider from '@/components/nprogressBar-provider';
import Navbar from '@/components/navbar';


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
      <body className={`${inter.className} antialiased bg-secondary flex flex-col md:flex-row w-full h-full min-h-screen dark:bg-slate-950`}>
        <NprogressProvider>
          <Navbar />
          <GameBg>
            {children}
          </GameBg>
        </NprogressProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
