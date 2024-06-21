import Image from "next/image";
import { Metadata } from "next";

import { tech } from "@/lib/constants";
import { encode_sans } from "@/styles/fonts";
import TimeLine from "@/components/timeline";
import Counter from "@/components/ui/counter";
import ZoomDiv from "@/components/ui/zoom-div";
import MotionDiv from "@/components/motion-div";

export const metadata: Metadata = {
	title: "About",
	description:
		"Hola soy Mesach Venegas un desarrollador Full Stack, apasionado por el desarrollo web y la tecnología. Aquí puedes encontrar mi presentación, experiencia y habilidades.",
};

export default function AboutPage() {
	return (
		<main className=" container flex justify-center items-center  px-0 py-6 lg:p-6 transition-all duration-300 ease-in-out h-full m-auto">
			<MotionDiv direction="left" duration={0.1} className="p-6">
				<div className="flex flex-col justify-center items-center p-4 gap-6">
					{/* Presentación */}
					<div className="flex flex-col xl:flex-row gap-4 justify-center items-center max-w-7xl">
						<Image
							className="drop-shadow-[0_25px_10px_rgba(0,0,0,.8)] floating-animation"
							src="/assets/about_img.png"
							width={450}
							height={600}
							alt="Mesach venegas"
							priority
						/>
						<div className="flex flex-col gap-2 p-6">
							<h1
								className={`${encode_sans.className} text-3xl text-primary font-bold lg:text-6xl tracking-wide`}>
								Jonathan Mesach Venegas Santana
							</h1>
							<h2
								className={`
                ${encode_sans.className}
                text-2xl lg:text-4xl font-semibold text-accent tracking-wide
              `}>
								Desarrollador Full Stack
							</h2>
							<p className="font-medium">
								¡Hola! Soy Mesach Venegas, un apasionado desarrollador Full
								Stack autodidacta con una firme convicción de aprendizaje
								continuo. A lo largo de mi viaje, he perfeccionado mis
								habilidades mediante la participación activa en bootcamps, donde
								he consolidado mi conocimiento técnico y he adquirido una
								perspectiva integral del desarrollo web. Esta experiencia
								práctica me ha permitido enfrentar desafíos del mundo real y
								encontrar soluciones creativas y eficientes.
							</p>
							<p className="font-medium">
								Mi entusiasmo por aprender se refleja en mi disposición para
								explorar nuevas tecnologías y metodologías. Estoy convencido de
								que la versatilidad es clave en el mundo del desarrollo, y estoy
								constantemente buscando maneras de mejorar y adaptarme a las
								últimas tendencias. En busca de mi primera oportunidad laboral,
								estoy emocionado por contribuir con mis conocimientos y
								habilidades a un equipo dinámico. Mi objetivo es no solo aportar
								al crecimiento de la empresa, sino también seguir evolucionando
								como desarrollador. ¡Estoy listo para sumergirme en nuevos retos
								y alcanzar nuevos horizontes en mi desarrollo profesional!
							</p>
						</div>
					</div>
					{/* Counters */}
					<div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4 lg:grid-cols-4 max-w-7xl mt-4">
						<Counter
							symbol="+"
							text="años"
							title="Experiencia"
							types="experience"
							end={2}
							duration={5}
						/>
						<Counter
							symbol="+"
							text="hrs"
							title="Codificado"
							types="coding"
							end={1725}
							duration={5}
						/>
						<Counter
							symbol=""
							title="Tecnologías"
							types="frameworks"
							end={15}
							duration={5}
						/>
						<Counter
							symbol=""
							title="Proyectos"
							types="projects"
							end={7}
							duration={5}
						/>
					</div>
					{/* Experiencia */}
					<div className="flex flex-col gap-6 w-fit justify-center items-center max-w-4xl mt-20">
						<h2
							className={`${encode_sans.className} text-3xl font-semibold text-center tracking-widest mb-6`}>
							Experiencia y Cursos
						</h2>
						<TimeLine />
					</div>
					{/* Habilidades */}
					<h2
						className={`${encode_sans.className} text-3xl font-semibold tracking-widest`}>
						Tech Stack
					</h2>
					<div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4 lg:grid-cols-6 xl:grid-cols-8 py-4 max-w-7xl">
						{tech.map(({ name, url, backdrop }) => (
							<ZoomDiv
								key={name}
								className="flex flex-col justify-center items-center truncate rounded-xl backdrop-blur-xl gap-4 px-4 py-4 text-center text-3xl hover:translate-y-[-5px] hover:bg-base-200/80 cursor-pointer bg-base-300 group/tech"
								duration={0}>
								<Image src={url} width={80} height={80} alt={`${name} logo`} className={`group-hover/tech:drop-shadow-[0_0_5px_${backdrop}]`} />
								<small className="text-base">{name}</small>
							</ZoomDiv>
						))}
					</div>
				</div>
			</MotionDiv>
		</main>
	);
}
