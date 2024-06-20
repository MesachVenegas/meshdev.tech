import Script from "next/script";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import GameBg from "@/components/game-bg";
import Navbar from "@/components/ui/navbar";
import NprogressProvider from "@/components/containers/nprogressBar-provider";

export const metadata: Metadata = {
	title: {
		default: "MeshDev",
		template: "%s | MeshDev",
	},
	description:
		"Portfolio de proyectos de Mesach Venegas, desarrollador web, full stack, desarrollo de sitios web, estáticos y Web Apps",
	icons: {
		icon: "/icons/favicon.png",
		shortcut: "/icons/logo_rose-384.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" data-theme="mesh">
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<body
				className={`${inter.className} antialiased bg-base-200 flex flex-col md:flex-row w-full h-full min-h-screen`}>
				<NprogressProvider>
					<Navbar />
					<GameBg>{children}</GameBg>
				</NprogressProvider>
				<Analytics />
				<SpeedInsights />
			</body>
			{/* Vercel analytics */}
			<Script strategy="lazyOnload" id="vercel-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('ts', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
			</Script>
			{/* Google analytics */}
			<Script
				id="google-analytics"
				strategy="lazyOnload"
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-JLDPEY8749">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JLDPEY8749');
        `}
			</Script>
		</html>
	);
}
