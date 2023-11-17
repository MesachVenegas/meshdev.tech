import Counter from "@/components/Counter";
import MotionDiv from "@/components/MotionDiv";
import Image from "next/image";

const tech = [
  { name: "Git" , url: "/assets/git.svg"},
  { name: "Github" , url: "/assets/github.svg"},
  { name: "JavaScript" , url: "/assets/javascript.svg"},
  { name: "Python" , url: "/assets/python.svg"},
  { name: "TypeScript" , url: "/assets/typescript.svg"},
  { name: "NextJs" , url: "/assets/next.svg"},
  { name: "Redux" , url: "/assets/redux.svg"},
  { name: "HTML" , url: "/assets/html.svg"},
  { name: "CSS" , url: "/assets/css.svg"},
  { name: "TailwindCSS" , url: "/assets/tailwindcss.svg"},
  { name: "React" , url: "/assets/react.svg"},
  { name: "PostgreSQL" , url: "/assets/postgresql.svg"},
  { name: "Sequelize" , url: "/assets/sequelize.svg"},
  { name: "MySQL" , url: "/assets/mysql.svg"},
  { name: "ExpressJS" , url: "/assets/express.svg"},
  { name: "Manjaro Linux" , url: "/assets/manjaro.svg"},
]

export default function AboutPage() {
  return (
    <main className="flex justify-center items-center p-6 dark:text-white transition-all duration-300 ease-in-out h-full">
      <MotionDiv direction="left" duration={.1} styles="w-full min-h-full p-2">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          {/* Presentación */}
          <div className="flex justify-start items-start w-full max-w-7xl">
            <h1 className="text-3xl font-bold lg:text-6xl">Jonathan Mesach Venegas Santana</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-7xl">
            <Image
              className="rounded-md"
              src="/images/me.webp"
              width={200}
              height={200}
              alt="Mesach venegas"
            />
            <div className="flex flex-col gap-2 p-6">
              <h2 className="text-2xl font-medium lg:text-4xl">Desarrollador Full Stack</h2>
              <p className="font-medium">
                ¡Hola! Soy Mesach Venegas, un apasionado desarrollador Full Stack autodidacta con una firme convicción de aprendizaje continuo. A lo largo de mi viaje, he perfeccionado mis habilidades mediante la participación activa en bootcamps, donde he consolidado mi conocimiento técnico y he adquirido una perspectiva integral del desarrollo web. Esta experiencia práctica me ha permitido enfrentar desafíos del mundo real y encontrar soluciones creativas y eficientes.
              </p>
              <p className="font-medium">
                Mi entusiasmo por aprender se refleja en mi disposición para explorar nuevas tecnologías y metodologías. Estoy convencido de que la versatilidad es clave en el mundo del desarrollo, y estoy constantemente buscando maneras de mejorar y adaptarme a las últimas tendencias. En busca de mi primera oportunidad laboral, estoy emocionado por contribuir con mis conocimientos y habilidades a un equipo dinámico. Mi objetivo es no solo aportar al crecimiento de la empresa, sino también seguir evolucionando como desarrollador. ¡Estoy listo para sumergirme en nuevos retos y alcanzar nuevos horizontes en mi desarrollo profesional!
              </p>
            </div>
          </div>
          {/* Counters */}
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 lg:grid-cols-4 max-w-7xl">
            <Counter symbol="+" text="año" title="Experiencia" types="experience" end={2} duration={5} />
            <Counter symbol="+" text="hrs" title="Codificado 2023" types="coding" end={779} duration={5} />
            <Counter symbol="+" title="Tecnologías" types="frameworks" end={15} duration={5} />
            <Counter symbol="+" title="Proyectos" types="projects" end={4} duration={5} />
          </div>
          {/* Habilidades */}
          <h2 className="text-3xl">Skills</h2>
          <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4 lg:grid-cols-6 xl:grid-cols-8 py-4 max-w-7xl">
              {
                tech.map( ({name, url}) => (
                  <div key={name} className="flex flex-col justify-center items-center truncate rounded-xl backdrop-blur-xl gap-4 bg-slate-300/50 dark:bg-slate-700/70 px-4 py-4 text-center text-3xl hover:translate-y-[-5px] hover:bg-cyan-300/50 dark:hover:bg-cyan-700 dark:hover:text-black cursor-pointer">
                    <Image  src={url}  width={80} height={80} alt={`${name} logo` }/>
                    <small className="text-base">{name}</small>
                  </div>
                ))
              }
          </div>
        </div>
      </MotionDiv>
    </main>
  )
}
