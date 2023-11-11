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
            'React',
            'Python',
            'TypeScript',
            "Next.Js",
            "PostgreSQL",
            "MySQL",
            "Sequelize",
            "Tailwind CSS",
            "JavaScript",
            "Node.Js",
            "Express.Js"
          ]
        }}
      />
    </>
  )
}
