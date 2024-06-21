"use client";

import Image from "next/image";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CardProjectProps } from "@/types/project-cards.types";
import Link from "next/link";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ url, title, image, description_en, description_es, techs, links  }: CardProjectProps) {
	return (
		<div className="mockup-browser border border-accent bg-base-300">
			<div className="mockup-browser-toolbar">
				<Link href={url} className="input" target="_blank">{url}</Link>
			</div>
			<div className="relative group w-full min-h-[230px] sm:min-h-[320px] lg:min-h-[300px] m-auto bg-base-100 transition-all duration-200 ease-linear shadow-2xl overflow-hidden text-white">
				<Image
					className="group-hover:scale-105 transition-all ease-linear object-fill md:object-fit"
					src={image}
					fill={true}
					alt="project preview"
					sizes="(max-width: 100%)"
					priority={true}
				/>
				{/* Descripcion del proyecto y enlaces  */}
				<figcaption className="flex flex-wrap text-[.8rem] py-6 h-0 group-hover:h-fit px-4 group-hover:absolute group-hover:flex items-end text-white left-0 bottom-0 bg-gradient gap-1 transition-all ease-in duration-300">
		 		<h3 className="w-full text-base text-white">{title}</h3>
		 		<p className="w-full">{description_es}</p>
		 		<div className="flex flex-row justify-between items-center w-full ">
		 			<ul className="flex flex-row flex-wrap gap-2 relative">
		 				{techs.map((tech) => (
		 					<li
		 						key={tech}
		 						className="grid place-content-center gap-2 w-6 h-6 relative">
		 						<Image
		 							className="hidden group-hover:block"
		 							src={`/assets/${tech}.svg`}
		 							fill={true}
		 							alt={`${tech} logo`}
		 							sizes="(max-width: 24px, max-height: 24px) 100vw, 24px"
		 						/>
		 					</li>
		 				))}
		 			</ul>
		 			<ul className="flex flex-wrap gap-4 justify-center items-center">
		 				{links.map(({ name, url }) => {
							if(url.length > 0){
								return (
									<li key={name}>
										<Link
											className="flex  justify-center items-center bg-secondary text-secondary-content hover:bg-accent p-1.5 rounded-lg font-bold text-sm cursor-pointer gap-1"
											href={url}
											target="_blank">
											<FontAwesomeIcon icon={name === "git" ? faGithub : faFigma} className="w-6 h-6" />
										</Link>
									</li>
								);
							}
		 				})}
		 			</ul>
		 		</div>
		 	</figcaption>
			</div>
		</div>
	);
}
