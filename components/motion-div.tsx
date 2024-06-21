"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/helpers/motionConfig";
import { MotionProps } from "@/types/framer-motion.types";

export default function MotionDiv({
	children,
	direction,
	className,
	duration,
}: MotionProps) {
	return (
		<motion.div
			className={cn(`backdrop-blur-md bg-base-100/50`, className)}
			variants={fadeIn(`${direction}`, duration)}
			initial="hidden"
			animate="show"
			exit="hidden">
			{children}
		</motion.div>
	);
}
