"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useStorage from "@/hooks/useStorage";
import { fadeIn } from "@/helpers/motionConfig";
import { navigationMenu } from "@/lib/iconsMenus";

export default function Navbar() {
	const pathname = usePathname();
	const toggleRef = useRef<HTMLInputElement>(null);
	const [theme, setTheme] = useStorage('darkMode', false);

	useEffect(() => {

		if(toggleRef.current) toggleRef.current.checked = theme;
	},[theme])

	return (
		<div className="sticky group/container top-0 left-0 z-50 min-w-[100px]">
			<motion.nav
				className="nav-container group/nav grid grid-cols-8 md:grid-cols-1 md:grid-rows-6 place-content-center w-full md:fixed md:top-0 md:left-0"
				variants={fadeIn("right", 0.3)}
				initial="hidden"
				animate="show"
				exit="hidden">
				{/* Brand */}
				<Link
					href="/"
					className="flex flex-wrap items-center justify-center w-full h-fit gap-x-2 transition-all duration-300 ease-in-out col-span-2 md:row-span-1">
					<div className="relative w-16 h-10">
						<Image src="/assets/logo_rose.svg" fill={true} alt="meshdev_logo" />
					</div>
					<div className="relative w-20 h-12 hidden sm:block">
						<Image src="/assets/text_logo.svg" fill={true} alt="meshdev_text" />
					</div>
				</Link>

				{/* Navigation menu */}
				<div className="flex flex-row justify-center w-full max-w-xs h-full gap-4 md:flex-col col-span-5 md:row-span-4">
					{navigationMenu.map(({ name, url, icon }) => (
						<Link
							key={name}
							href={url}
							aria-label={`button to navigate to ${name} `}
							className={`grid grid-cols-2 place-content-center hover:text-primary group/menu p-2 ${
								pathname == url ? "text-primary" : "text-current"
							}`}>
							<span className="flex w-full h-full items-center justify-center col-span-2 md:group-hover/nav:col-span-1">
								<FontAwesomeIcon
									icon={icon}
									size="xl"
									className="group-hover/menu:scale-110"
								/>
							</span>
							<span className="hidden md:group-hover/nav:inline">{name}</span>
						</Link>
					))}
				</div>

				{/* Theme toggler */}
				<div className="flex items-center md:justify-center gap-2 col-span-1 md:row-span-1">
					<label className="swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input
							type="checkbox"
							className="theme-controller"
							ref={toggleRef}
							checked={theme}
							value="meshDark"
							onChange={(e) => setTheme(e.target.checked)}
						/>

						{/* moon icon */}
						<svg
							className="swap-on fill-current w-8 h-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
						</svg>

						{/* sun icon */}
						<svg
							className="swap-off fill-current w-8 h-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
						</svg>
					</label>
					<span className="hidden text-sm md:group-hover/nav:inline">
						{theme ? "Dark" : "Light"}
					</span>
				</div>
			</motion.nav>
		</div>
	);
}
