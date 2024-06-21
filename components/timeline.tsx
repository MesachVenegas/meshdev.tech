"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { slideBottom } from "@/helpers/motionConfig";

export default function TimeLine() {
	return (
		<motion.ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
			<motion.li
				variants={slideBottom()}
				initial="offscreen"
				whileInView="onscreen">
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						className="h-5 w-5 fill-primary">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-start md:text-end mb-10">
					<time className="font-mono italic">Abril 2021 - Jun 2021</time>
					<div className="flex justify-end items-center gap-2 text-lg font-black">
						<Image src="/assets/udemy.svg" width={24} height={24} alt="udemy" />
						Curso de Python
					</div>
					Curso de programación con python desde las bases hasta avanzado, y
					frameworks para el desarrollo web y la creación de aplicaciones de
					escritorio con entorno gráfico con la libreria Tkinter.
					<ul className="flex flex-wrap gap-2 mt-2">
						<li className="timeline-item-list">Python</li>
						<li className="timeline-item-list">Tkinter</li>
						<li className="timeline-item-list">PostgreSQL</li>
						<li className="timeline-item-list">POO</li>
						<li className="timeline-item-list">SQL</li>
					</ul>
				</div>
				<hr className="bg-primary" />
			</motion.li>

			<motion.li
				variants={slideBottom()}
				initial="offscreen"
				whileInView="onscreen">
				<hr className="bg-primary" />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						className="h-5 w-5 fill-primary">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-end mb-10">
					<time className="font-mono italic">Feb 2022 - Jun 2022</time>
					<div className="flex justify-start items-center gap-2 text-lg font-black">
						<Image
							src="/assets/inovacion.webp"
							width={24}
							height={24}
							alt="Innovacion Virtual"
						/>
						LaunchX
					</div>
					BootCamp de desarrollo web LaunchX by Microsoft e impulsado por
					Innovacion Virtual, en el cual se imparte un curso intensivo de
					desarrollo web fullstack. En diversas tecnologías como Angular, Vue
					ademas de acercar a los desarrolladores a la plataforma de Microsoft
					Azure para el manejo de la nube. Y al finalizar se ofertaron vacantes
					con los socios de Microsoft.
					<ul className="flex flex-wrap gap-4 mt-2">
						<li className="timeline-item-list">Git</li>
						<li className="timeline-item-list">Github</li>
						<li className="timeline-item-list">CSS</li>
						<li className="timeline-item-list">HTML</li>
						<li className="timeline-item-list">Python</li>
						<li className="timeline-item-list">JavaScript</li>
						<li className="timeline-item-list">POO</li>
						<li className="timeline-item-list">Vue</li>
						<li className="timeline-item-list">Angular</li>
						<li className="timeline-item-list">Azure</li>
					</ul>
				</div>
				<hr className="bg-primary" />
			</motion.li>

			<motion.li
				variants={slideBottom()}
				initial="offscreen"
				whileInView="onscreen">
				<hr className="bg-primary" />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						className="h-5 w-5 fill-primary">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-start md:text-end mb-10">
					<time className="font-mono italic">Oct 2022 - Ene 2023</time>
					<div className="flex justify-end items-center gap-2 text-lg font-black">
						<Image
							src="/assets/codefy.png"
							width={36}
							height={36}
							alt="Innovacion Virtual"
						/>
						Codefy+
					</div>
					Equipo de Desarrollodares web creado por estudiantes de Academlo, en
					la cual participe en algunos de los proyectos que realizaron para
					otras empresa en la que desempeñe el rol de desarrollador de backend,
					con NodeJs y Express. Seguí participando en el proyecto de la Startup
					de Software mas adelante realizado otros sitios como fullstack.
					<ul className="flex flex-wrap gap-4 mt-2">
						<li className="timeline-item-list">Git</li>
						<li className="timeline-item-list">Github</li>
						<li className="timeline-item-list">React</li>
						<li className="timeline-item-list">Firebase</li>
						<li className="timeline-item-list">JavaScript</li>
					</ul>
				</div>
				<hr className="bg-primary" />
			</motion.li>

			<motion.li
				variants={slideBottom()}
				initial="offscreen"
				whileInView="onscreen">
				<hr className="bg-primary" />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						className="h-5 w-5 fill-primary">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-end mb-10">
					<time className="font-mono italic">Oct 2022 - Jun 2023</time>
					<div className="flex justify-start items-center gap-2 text-lg font-black">
						<Image
							src="/assets/academlo_logo.png"
							width={32}
							height={32}
							alt="Innovacion Virtual"
						/>
						Academlo
					</div>
					Academlo es una plataforma de aprendizaje que proporciona un curso de
					Desarrollo web Fullstack y Ciencias de la computación, en el cual se
					imparten conocimientos en programaciones básica, python, javascript,
					react, etc.
					<ul className="flex flex-wrap gap-4 mt-2">
						<li className="timeline-item-list">Git</li>
						<li className="timeline-item-list">Github</li>
						<li className="timeline-item-list">CSS</li>
						<li className="timeline-item-list">HTML</li>
						<li className="timeline-item-list">Responsive Desing</li>
						<li className="timeline-item-list">NodeJs</li>
						<li className="timeline-item-list">JavaScript</li>
						<li className="timeline-item-list">ExpressJs</li>
						<li className="timeline-item-list">React</li>
						<li className="timeline-item-list">PostgreSQL</li>
						<li className="timeline-item-list">Sequelize</li>
						<li className="timeline-item-list">Redux</li>
						<li className="timeline-item-list">Railway</li>
						<li className="timeline-item-list">MVC</li>
						<li className="timeline-item-list">API Rest</li>
					</ul>
				</div>
				<hr className="bg-primary" />
			</motion.li>
			<motion.li
				variants={slideBottom()}
				initial="offscreen"
				whileInView="onscreen">
				<hr className="bg-primary" />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						className="h-5 w-5 fill-primary">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-start md:text-end mb-10">
					<time className="font-mono italic">Oct 2023 - Ene 2024</time>
					<div className="flex justify-end gap-2 text-lg font-black">
						<Image
							src="/assets/logo_start.ico"
							width={24}
							height={18}
							alt="Innovacion Virtual"
						/>
						Paqueteria 5 Estrellas
					</div>
					Paqueteria 5 Estrellas es una empresa de paqueteria establecida en
					Tijuana, Mx, para la cual realize un sitio web y un sistema de
					administración. En los cuales les permitiera a los clientes realizar
					cotizaciones sobre los pedidos, asi como a la empresa llevar un
					control de ventas, registros y reportes de ganancias.
					<ul className="flex flex-wrap gap-4 mt-2">
						<li className="timeline-item-list">Git</li>
						<li className="timeline-item-list">Github</li>
						<li className="timeline-item-list">TypeScript</li>
						<li className="timeline-item-list">NextJs</li>
						<li className="timeline-item-list">TailwindCSS</li>
						<li className="timeline-item-list">PostgreSQL</li>
						<li className="timeline-item-list">Redux</li>
						<li className="timeline-item-list">Prisma</li>
						<li className="timeline-item-list">Vercel</li>
					</ul>
				</div>
				<hr className="bg-primary" />
			</motion.li>

			<motion.li
				variants={slideBottom()}
				initial="offscreen"
				whileInView="onscreen">
				<hr className="bg-primary" />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5 fill-primary">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-end mb-10">
					<time className="font-mono italic">Abril 2024 - Actualidad</time>
					<div className="flex justify-start gap-2 text-lg font-black">
						<Image
							src="/assets/no_country.svg"
							width={24}
							height={18}
							alt="Innovacion Virtual"
						/>
						No Country
					</div>
					No Country es un proyecto que busca otorgar experiencia en un ámbito laboral, mediante simulaciones laborales y hackatones para startups mediante equipos para impulsar el trabajo en equipo, la creatividad y el aprendizaje. De igual forma se busca que los participantes se desempeñen de forma creativa y productiva. Y que demuestren sus habilidades blandas y técnicas.
					<ul className="flex flex-wrap gap-4 mt-2">
						<li className="timeline-item-list">Kazu Moda</li>
						<li className="timeline-item-list">ET: Expense Tracker</li>
					</ul>
				</div>
				<hr />
			</motion.li>
		</motion.ul>
	);
}
