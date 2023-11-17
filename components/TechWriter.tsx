'use client'

import TypewriterComponent from "typewriter-effect"

export default function TechWriter() {
  return (
    <>
      <TypewriterComponent
        options={{
          autoStart: true,
          loop: true,
          strings: [
            "Front End Developer",
            "Back End Developer",
            "Web App Developer"
          ]
        }}
      />
    </>
  )
}
