'use client'

import { motion } from 'framer-motion';
import { MotionProps } from '@/app/libs/definitions'
import { zoom } from '@/app/libs/motionConfig';

export default function ZoomDiv({ children, styles }: MotionProps ) {
  return (
    <motion.div
      className={`${styles}`}
      variants={zoom()}
      initial="offscreen"
      whileInView="onscreen"
    >
      { children }
    </motion.div>
  )
}
