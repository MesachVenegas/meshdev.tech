'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { fadeIn } from "@/app/libs/motionConfig";
import { navigationMenu } from "@/app/libs/iconsMenus";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="px-2 py-1 ml-0 mt-2 flex justify-between items-center h-[50px] text-black dark:text-white bg-secondary/20 backdrop-blur-sm sticky top-0 left-0 w-full md:h-screen md:flex-col md:justify-between md:py-6 md:w-[100px] md:mt-0 md:ml-2 font-bold z-50 rounded-md shadow-md shadow-black/50"
      variants={ fadeIn('right', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Link href="/" className="flex flex-wrap gap-1 w-fit h-full md:h-fit md:w-full justify-center items-center">
        <Image src="/assets/logo_rose.svg" width={60} height={50} alt="meshdev_logo"/>
        <Image src="/assets/text_logo.svg" width={80} height={50} alt="meshdev_text" className="hidden sm:block" />
      </Link>
      <div className="flex flex-row justify-center w-fit h-full gap-9 md:flex-col md:w-full">
        {
          navigationMenu.map( ({name, url, icon}) => (
            <Link key={name} href={url} className={`${pathname == url ? 'text-primary' : 'text-black'} flex flex-col gap-1 justify-center items-center hover:text-primary text-xs`}>
              <span className="flex w-[22px] h-[22px] items-center justify-center menu-icon ">
                {icon}
              </span>
              <span className="hidden md:inline">
                {name}
              </span>
            </Link>
          ))
        }
      </div>
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer  hover:text-primary">
        <span className="w-[22px] h-[22px] hover:rotate-180 transition-all ease-in menu-icon">
          <FontAwesomeIcon icon={faGear}/>
        </span>
        <span className="hidden md:inline text-sm">
          settings
        </span>
      </div>
    </motion.nav>
  )
}
