"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Cover from "@/components/ui/cover";
import { encode_sans } from "@/styles/fonts";
import { fadeIn } from "@/helpers/motionConfig";
import TechWriter from "@/components/ui/tech-writer";
import SocialLinks from "@/components/social-links";

export default function Home() {
	return (
		<>
			<Cover />
			<main className="md:container flex justify-center items-center p-2 lg:p-6 w-full mx-auto z-10">
				<motion.div
					className="hero bg-base-100/50 backdrop-blur-sm rounded-md w-full h-full min-h-[calc(100vh-80px)]"
					variants={fadeIn("left", 0.1)}
					initial="hidden"
					animate="show"
					exit="hidden">
					<div className="hero-content flex-col xl:flex-row-reverse">
						<Image
							className="drop-shadow-[0_25px_10px_rgba(0,0,0,.8)] floating-animation"
							src="/images/hero.png"
							width={600}
							height={400}
							alt="hero_image"
							priority
						/>
						<div className="flex flex-col gap-2">
							<h1
								className={`${encode_sans.className} antialiased text-2xl text-center lg:text-left md:text-3xl xl:text-4xl font-bold space-y-2`}>
								Hola! <br /> Soy{" "}
								<span className="text-primary text-5xl md:text-7xl">
									Mesach Venegas
								</span>
							</h1>
							<div className="text-2xl font-bold tracking-wide m-auto lg:m-0">
								<TechWriter />
							</div>
							<SocialLinks className="flex justify-center lg:justify-start w-full" />
							<div className="flex flex-wrap lg:flex-nowrap gap-3 justify-around mt-8 xl:w-[400px]">
								<Link
									className="btn btn-primary btn-wide btn-outline hover:shadow-solid"
									href="/docs/Curriculum_MesachVenegas.pdf"
									download="Curriculum_MesachVenegas.pdf"
									prefetch={false}>
									Curriculum
									<FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
								</Link>
								<Link
									href="/contact"
									className="btn btn-primary btn-wide btn-outline hover:shadow-solid">
									Contacto
									<FontAwesomeIcon icon={faPaperPlane} />
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</main>
		</>
	);
}
