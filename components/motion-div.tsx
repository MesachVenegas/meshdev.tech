"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/helpers/motionConfig";
import { MotionProps } from "@/types/framer-motion.types";

export default function MotionDiv({
	children,
	direction,
	styles,
	duration,
}: MotionProps) {
	return (
		<motion.div
			className={`backdrop-blur-md bg-white/70 dark:bg-slate-900/30 ${styles}`}
			variants={fadeIn(`${direction}`, duration)}
			initial="hidden"
			animate="show"
			exit="hidden">
			{children}
		</motion.div>
	);
}
