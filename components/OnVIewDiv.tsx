'use client'

import { MotionProps } from "@/app/libs/definitions";
import { slideBottom } from "@/app/libs/motionConfig";
import { motion } from "framer-motion";


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
