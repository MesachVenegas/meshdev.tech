'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { Within } from "@theme-toggles/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { fadeIn } from "@/app/libs/motionConfig";
import { navigationMenu } from "@/app/libs/iconsMenus";
import '@theme-toggles/react/css/Within.css'


export default function Navbar() {
  const pathname = usePathname();
  const themePreference = typeof window !== 'undefined' ? localStorage.getItem('dark') : 'false';
  const [theme, setTheme] = useState( themePreference === 'true' ? true : false );
  const [langChoose, setLangChoose] = useState(false);
  const [language, setLanguage] = useState('ES')
  const [themeName, setThemeName] = useState("Dark");

  const handleTheme = () => {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('dark')
    localStorage.setItem("dark", `${!theme}`);
    setTheme(!theme)
  }

  useEffect( () => {
    const body = document.getElementsByTagName('body');

    if(themePreference == 'true'){
      body[0].classList.add('dark')
      setThemeName('Light')
    } else {
      body[0].classList.remove('dark')
      setThemeName('Dark')
    }

    langChoose ? setLanguage('EN') : setLanguage('ES')

  },[theme, themePreference, themeName, langChoose])

  return (
    <motion.nav
      className="px-2 py-1 flex justify-between items-center h-[70px] bg-white/20 text-black dark:text-white dark:bg-slate-950 backdrop-blur-sm sticky top-0 left-0 w-full md:h-screen md:flex-col md:justify-between md:py-6 md:w-[100px] font-bold z-50 shadow-md shadow-black/50"
      variants={ fadeIn('right', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Link href="/" className="flex flex-wrap gap-3 w-fit md:h-fit md:w-full justify-center items-center">
        <div className="relative w-14 h-10">
          <Image src="/assets/logo_rose.svg" fill={true} alt="meshdev_logo" />
        </div>
        <div className="relative w-20 h-12 hidden sm:block">
          <Image src="/assets/text_logo.svg" fill={true} alt="meshdev_text"/>
        </div>
      </Link>
      <div className="flex flex-row justify-center w-fit h-full gap-6 md:flex-col md:w-full">
        {
          navigationMenu.map( ({name, url, icon}) => (
            <Link
              key={name}
              href={url}
              aria-label={`button to navigate to ${name} `}
              className={`${pathname == url ? 'text-rose-500' : ""} flex flex-col gap-1 justify-center items-center hover:text-rose-500 text-xs`}
            >
              <span className="flex w-5 h-5 items-center justify-center menu-icon ">
                {icon}
              </span>
              <span className="hidden md:inline">
                {name}
              </span>
            </Link>
          ))
        }
      </div>
      <div className="flex flex-row-reverse justify-center items-center md:flex-col md:w-full md:items-start cursor-pointer">
        <div className="flex p-2 justify-center items-center gap-2" onClick={handleTheme}>
            <Within className="w-6 h-6 icon-config" toggled={theme} />
            <small className="hidden md:block">{ themeName }</small>
        </div>
        <div className="flex flex-row-reverse p-2 justify-center items-center gap-2 md:flex-row cursor-pointer" onClick={() => setLangChoose(!langChoose)}>
            <FontAwesomeIcon icon={faEarth}  className="w-5 h-5 icon-config"/>
            <span>{ language }</span>
        </div>
      </div>
    </motion.nav>
  )
}
