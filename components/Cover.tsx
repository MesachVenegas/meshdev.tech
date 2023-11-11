'use client'

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import  type { Engine } from "tsparticles-engine";
import { optionsParticles } from "@/app/libs/particlesOptions";
import Particles from "react-tsparticles";

export default function Cover() {

  const particlesInit = useCallback(async (engine : Engine) => {
    await loadFull(engine)
  },[])

  const particlesLoad = useCallback(async () => {}, [])

  return (
    <>
      <Particles
        id="tsparticles"
        className="absolute h-full translate-z-0"
        init={particlesInit}
        loaded={particlesLoad}
        options={ optionsParticles}
      />
    </>
  )
}
