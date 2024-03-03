'use client'

import CountUp from "react-countup/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faLaptopFile, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

import { CardProps } from "@/types/project-cards.types";




const iconMap = {
  coding: faClock,
  frameworks: faScrewdriverWrench,
  projects: faLaptopFile,
  experience: faCalendar,
};

export default function Counter({ symbol, title, types,  end, duration, text } : CardProps ) {
  const Icon = iconMap[types];

  return (
      <div className="rounded-xl p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <FontAwesomeIcon icon={Icon} size="lg"  className="text-gray-700 dark:text-white"/>: null}
          <h3 className="ml-2 text-sm font-medium">{ title }</h3>
        </div>
        <p className=" flex justify-center items-center truncate rounded-xl backdrop-blur-xl gap-2 bg-slate-300/50 dark:bg-slate-700/70 px-4 py-8 text-center text-3xl">
          {symbol}
            <CountUp start={0} end={end} duration={duration} enableScrollSpy useEasing />
          {text}
        </p>
      </div>
  )
}
