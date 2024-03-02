'use client'

import { motion } from "framer-motion";

import { slideBottom } from "@/lib/motionConfig";
import { MotionProps } from "@/types/framer-motion.types";


export default function OnViewDiv({ children, styles } : MotionProps) {
  return (
    <motion.div
      className={`${styles}`}
      variants={ slideBottom() }
      initial="offscreen"
      whileInView="onscreen"
    >
      { children }
    </motion.div>
  )
}
