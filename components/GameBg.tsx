'use client'

import { usePathname } from 'next/navigation';
import Footer from './Footer'

export default function GameBg({children} :{children: React.ReactNode}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className={`flex flex-col gap-4 min-h-screen dark:bg-slate-950 ${pathname !== "/" ? "bg-game" : ""}`}>
        {children}
        <Footer />
      </div>
    </>
  )
}
