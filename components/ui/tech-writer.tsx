'use client'

import TypewriterComponent from "typewriter-effect"

export default function TechWriter() {
  return (
    <>
      <TypewriterComponent
        options={{
          autoStart: true,
          loop: true,
          delay: 200,
          cursor: "_",
          strings: [
            "Desarrollador web",
            "React Js",
            "Next Js",
            "Node Js",
            "Express Js",
            "MongoDB",
            "Prisma",
            "TailwindCSS",
            "Typescript",
            "Javascript",
            "PostgreSQL",
          ]
        }}
      />
    </>
  )
}
