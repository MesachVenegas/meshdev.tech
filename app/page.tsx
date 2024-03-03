'use client'

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Cover from "@/components/Cover";
import { fadeIn } from "@/lib/motionConfig";
import { encode_sans } from "@/styles/fonts";
import TechWriter from "@/components/tech-writer";
import SocialLinks from "@/components/social-links";


export default function Home() {

  return (
    <>
        <Cover />
        <main className="flex justify-center items-center p-0 lg:p-6 w-full max-w-[1580px] mx-auto h-screen dark:bg-slate-900 dark:text-white transition-all duration-300 ease-in-out">
          <motion.div
            className="flex flex-col-reverse lg:flex-row items-center justify-around bg-white/30 dark:bg-slate-950/30 w-full h-full shadow-xl rounded-md  backdrop-blur-sm px-4 md:px-6 py-2"
            variants={ fadeIn('left', 0.1) }
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-col gap-6 justify-center items-center lg:items-start w-full  xl:max-w-2xl p-2">
              <h1 className={`${encode_sans.className} antialiased text-3xl text-center lg:text-left md:text-4xl xl:text-5xl font-bold space-y-2`}>
                Hola! <br /> Soy <span className="text-rose-500 text-5xl md:text-7xl">Mesach Venegas</span>
              </h1>
              <div className="text-2xl font-bold tracking-wide">
                <TechWriter />
              </div>
              <SocialLinks />

              <div className="flex flex-wrap gap-3 justify-around mt-8 xl:w-[400px]">
                <a
                  className="flex gap-2 items-center border-2 font-bold py-3 px-2 xl:py-4 xl:px-6 border-black dark:border-white rounded-md hover:border-rose-500 dark:hover:border-rose-500 hover:text-rose-500 hover:shadow-[0_10px_10px_rgba(0,0,0,.6)] transition-all ease-in-out dark:hover:shadow-[0_10px_10px_rgba(225,50,50,.8)]"
                  href="/docs/Curriculum_MesachVenegas.pdf"
                  download="Curriculum_MesachVenegas.pdf"
                >
                  Curriculum
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4"/>
                </a>
                <Link href="/contact" className="flex gap-2 items-center border-2 font-bold py-3 px-2 xl:py-4 xl:px-6 border-black dark:border-white rounded-md hover:border-rose-500 dark:hover:border-rose-500 hover:text-rose-500 hover:shadow-[0_10px_10px_rgba(0,0,0,.6)] transition-all ease-in-out dark:hover:shadow-[0_10px_10px_rgba(225,50,50,.8)]">
                  Contácteme
                  <FontAwesomeIcon icon={faPaperPlane}/>
                </Link>
              </div>
            </div>

            <div className="">
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
