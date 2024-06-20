'use client'

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";


export default function NprogressProvider({ children }: { children: React.ReactNode}) {
  return (
    <>
      <ProgressBar
        color="#f43f5e"
        height="5px"
        options={{ showSpinner: false }}
        shallowRouting={true}
      />
      {children}
    </>
  )
}