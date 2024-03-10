'use client'

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fadeIn } from "@/lib/motionConfig";
import '@theme-toggles/react/css/Within.css';
import { navigationMenu } from "@/lib/iconsMenus";
import { faEarth, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


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
    setTheme(prev => !prev);
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
    <div className="text-black dark:text-white sticky top-0 left-0 z-50">
      <motion.nav className="nav-container" variants={ fadeIn('right', 0.3)} initial="hidden" animate="show" exit="hidden">
        <Link href="/" className="flex flex-wrap gap-1 w-fit md:h-fit md:w-full justify-center items-center">
          <div className="relative w-14 h-10">
            <Image src="/assets/logo_rose.svg" fill={true} alt="meshdev_logo" />
          </div>
          <div className="relative w-20 h-12 hidden sm:block">
            <Image src="/assets/text_logo.svg" fill={true} alt="meshdev_text"/>
          </div>
        </Link>
        <div className="flex flex-row justify-center w-full max-w-xs h-full gap-4 md:flex-col md:w-full">
          {
            navigationMenu.map( ({name, url, icon}) => (
              <Link key={name} href={url} aria-label={`button to navigate to ${name} `}
                className={`${pathname == url ? 'text-rose-500' : ""} flex flex-col gap-1 justify-center items-center hover:text-rose-500 text-xs`}
              >
                <span className="flex w-full h-full items-center justify-center menu-icon ">
                  <FontAwesomeIcon icon={icon} size="2xl" />
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
            <FontAwesomeIcon icon={theme ? faSun : faMoon} size="xl"  className="transition-all duration-300 ease-linear" />
            <small className="hidden md:block">{ themeName }</small>
          </div>
          {/* <div
            className="flex flex-row-reverse p-2 justify-center items-center gap-2 md:flex-row cursor-pointer"
            onClick={() => setLangChoose(prev => !prev)}
          >
              <FontAwesomeIcon icon={faEarth}  className="w-5 h-5 icon-config"/>
              <span>{ language }</span>
          </div> */}
        </div>
      </motion.nav>
    </div>
  )
}
