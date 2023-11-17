'use client'

import { CardProps } from "@/app/libs/definitions";
import { faCalendar, faClock, faLaptopFile, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup/";


const iconMap = {
  coding: <FontAwesomeIcon icon={faClock}  className="h-5 w-5 text-gray-700 dark:text-white"/>,
  frameworks: <FontAwesomeIcon icon={faScrewdriverWrench}  className="h-5 w-5 text-gray-700 dark:text-white"/>,
  projects: <FontAwesomeIcon icon={faLaptopFile}  className="h-5 w-5 text-gray-700 dark:text-white"/>,
  experience: <FontAwesomeIcon icon={faCalendar}  className="h-5 w-5 text-gray-700 dark:text-white"/>,
};

export default function Counter({ symbol, title, types,  end, duration, text } : CardProps ) {
  const Icon = iconMap[types];

  return (
      <div className="rounded-xl p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? Icon: null}
          <h3 className="ml-2 text-sm font-medium">{ title }</h3>
        </div>
        <p className=" flex justify-center items-center truncate rounded-xl backdrop-blur-xl gap-2 bg-slate-300/50 dark:bg-slate-700/70 px-4 py-8 text-center text-3xl">
          {symbol}
          <CountUp start={0} end={end} duration={duration} />
          {text}
        </p>
      </div>
  )
}
