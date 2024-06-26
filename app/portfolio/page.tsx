import { Metadata } from "next";

import { projects } from "@/lib/constants";
import { encode_sans } from "@/styles/fonts";
import MotionDiv from "@/components/motion-div";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
	title: "MeshDev | Portfolio",
	description:
		"Aquí puedes encontrar algunos de mis proyectos y trabajos realizados o en los que estoy trabajando actualmente.",
	keywords: [
		"desarrollo web",
		"web apps",
		"landingpages",
		"development",
		"mesach venegas",
		"meshdev",
		"presentación",
		"portfolio",
		"proyectos",
	],
};

export default function PortfolioPage() {
	return (
		<main className="md:container flex justify-center items-center p-0 py-6 lg:p-6 transition-all w-full duration-300 ease-in-out h-full m-auto">
			<MotionDiv
				direction="left"
				duration={0.1}
				className="flex items-center justify-around bg-base-100/50 w-full h-full shadow-xl rounded-md  backdrop-blur-sm md:px-6 py-2">
				<div className="flex flex-col justify-center items-center gap-6">
					<h1 className={`${encode_sans.className} text-4xl  font-medium`}>
						Proyectos
					</h1>
					{/* contenedor de las tarjetas */}
					<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 m-auto w-full  h-full gap-6 p-6 transition-all">
						{/* tarjeta */}
						{projects.map((project) => (
							<ProjectCard key={project.url} {...project} />
						))}
					</div>
				</div>
			</MotionDiv>
		</main>
	);
}
