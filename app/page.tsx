'use client'

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { encode_sans } from "@/app/ui/fonts";
import { fadeIn } from "@/app/libs/motionConfig";
import Cover from "@/components/Cover";
import TechWriter from "@/components/TechWriter";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
        <Cover />
        <main className="flex justify-center items-center p-6 w-full h-screen">
          <motion.div
            className="flex items-center justify-around bg-secondary/20 shadow-xl rounded-md w-full h-full backdrop-blur-sm px-4 py-2"
            variants={ fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-col gap-4">
              <h1 className={`${encode_sans.className} antialiased uppercase text-3xl md:text-4xl xl:text-6xl font-bold `}>
                Hola! <br /> Soy <span className="text-primary">Mesach Venegas</span>
              </h1>
              <h2 className="text-xl text-slate-800 tracking-wider font-bold">
                Desarrollador Web Full Stack
              </h2>
              <div className="text-2xl text-primary font-bold tracking-widest">
                <TechWriter />
              </div>
              <SocialLinks />
              <div className="flex flex-wrap gap-3 justify-around mt-8 xl:w-[400px]">
                <a href="/docs/Curriculum_MesachVenegas.pdf" download="Curriculum_MesachVenegas.pdf" className="flex gap-2 items-center border-2 font-bold py-3 px-2 xl:py-4 xl:px-6 rounded-md hover:outline-primary hover:text-primary hover:shadow-[0_10px_10px_rgba(0,0,0,.6)] transition-all ease-in-out">
                  Curriculum
                  <FontAwesomeIcon icon={faDownload}/>
                </a>
                <Link href="/contact" className="flex gap-2 items-center border-2 font-bold py-3 px-2 xl:py-4 xl:px-6 rounded-md hover:border-primary hover:text-primary hover:shadow-[0_10px_10px_rgba(0,0,0,.6)] transition-all ease-in-out">
                  Contácteme
                  <FontAwesomeIcon icon={faPaperPlane}/>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                className="drop-shadow-[0_25px_10px_rgba(0,0,0,.8)] floating-animation"
                src="/images/hero.png"
                width={700}
                height={500}
                alt="hero_image"
                priority
              />
            </div>
          </motion.div>
        </main>
    </>
  )
}
