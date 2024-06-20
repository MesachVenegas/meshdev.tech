"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fadeIn } from "@/helpers/motionConfig";
import SocialLinks from "@/components/social-links";

export default function Footer() {
	return (
		<motion.footer
			className="flex flex-col gap-8 w-full justify-center items-center py-6 bg-base-100/30 backdrop-blur-md "
			variants={fadeIn("up", 0.3)}
			initial="hidden"
			animate="show"
			exit="hidden">
			<Link
				href="/"
				className="flex gap-2 items-center justify-center h-16 w-[250px]">
				<Image
					src="/assets/logo_rose.svg"
					width={80}
					height={50}
					alt="meshdev_logo"
				/>
				<Image
					src="/assets/text_logo.svg"
					width={120}
					height={80}
					alt="meshdev_text"
				/>
			</Link>
			<SocialLinks isFooter />
			<p>
				Made with{" "}
				<span className="text-primary">
					<FontAwesomeIcon icon={faHeart} width={16} />
				</span>{" "}
				by MeshDev
			</p>
		</motion.footer>
	);
}
