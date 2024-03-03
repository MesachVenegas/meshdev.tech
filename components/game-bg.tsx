'use client'

import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';

export default function GameBg({children} :{children: React.ReactNode}) {
  const pathname = usePathname();

  return (
    <div className={`flex flex-col w-full gap-4 dark:bg-slate-900 ${pathname !== "/" ? "bg-game" : ""}`}>
      {children}
      <Footer />
    </div>
  )
}
