"use client";

import { motion } from "framer-motion";

import { slideBottom } from "@/helpers/motionConfig";
import { MotionProps } from "@/types/framer-motion.types";

export default function OnViewDiv({ children, className }: MotionProps) {
	return (
		<motion.div
			className={`${className}`}
			variants={slideBottom()}
			initial="offscreen"
			whileInView="onscreen">
			{children}
		</motion.div>
	);
}
