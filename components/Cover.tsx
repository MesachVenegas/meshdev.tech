'use client'

import { useCallback } from "react";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import  type { Engine } from "tsparticles-engine";

import { optionsParticles } from "@/lib/particlesOptions";

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
