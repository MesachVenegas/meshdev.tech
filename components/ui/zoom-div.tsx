"use client";

import { motion } from "framer-motion";

import { zoom } from "@/helpers/motionConfig";
import { MotionProps } from "@/types/framer-motion.types";

export default function ZoomDiv({ children, styles }: MotionProps) {
	return (
		<motion.div
			className={`${styles}`}
			variants={zoom()}
			initial="offscreen"
			whileInView="onscreen">
			{children}
		</motion.div>
	);
}
