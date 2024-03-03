'use client'

import CountUp from "react-countup/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faLaptopFile, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "@/types/project-cards.types";
import Image from "next/image";



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
          {Icon ? <FontAwesomeIcon icon={Icon}  className="h-5 w-5 text-gray-700 dark:text-white"/>: null}
          <h3 className="ml-2 text-sm font-medium">{ title }</h3>
        </div>
        <p className=" flex justify-center items-center truncate rounded-xl backdrop-blur-xl gap-2 bg-slate-300/50 dark:bg-slate-700/70 px-4 py-8 text-center text-3xl">
          {
            types === 'coding' ? <Image src="https://wakatime.com/badge/user/2920fe85-aa29-4c92-ba4d-1573de119aed.svg" alt="Total time coded since Feb 14 2022" width={300} height={50} /> 
            : (
              <>
              {symbol}
                <CountUp start={0} end={end} duration={duration} />
              {text}
              </>
            )
          }
        </p>
      </div>
  )
}
