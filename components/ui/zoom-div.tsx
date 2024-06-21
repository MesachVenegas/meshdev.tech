"use client";

import { motion } from "framer-motion";

import { zoom } from "@/helpers/motionConfig";
import { MotionProps } from "@/types/framer-motion.types";

export default function ZoomDiv({ children, className }: MotionProps) {
	return (
		<motion.div
			className={`${className}`}
			variants={zoom()}
			initial="offscreen"
			whileInView="onscreen">
			{children}
		</motion.div>
	);
}
