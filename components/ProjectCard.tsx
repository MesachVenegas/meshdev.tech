'use client'

import Image from 'next/image';

import { motion } from 'framer-motion';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { zoom } from '@/lib/motionConfig';
import { CardProjectProps } from '@/types/project-cards.types';


export default function ProjectCard({ title, description, techs, imgUrl, links} : CardProjectProps) {
  return (
    <motion.figure
      className='relative group w-full min-h-[300px] md:max-w-[500px]  m-auto bg-slate-100 rounded-lg transition-all duration-200 ease-linear shadow-2xl overflow-hidden outline outline-1 outline-slate-200 dark:outline-slate-800 text-white hover:translate-y-[-5px]'
      variants={ zoom() }
      initial="offscreen"
      whileInView="onscreen"
    >

      <Image
        className='group-hover:scale-105 transition-all ease-linear object-cover md:object-fit'
        src={imgUrl}
        fill={true}
        alt='project preview'
        sizes='(max-width: 768px) 100vw, 500px'
        priority={true}
      />
      {/* Descripcion del proyecto y enlaces  */}
      <figcaption
        className='flex flex-wrap text-[.8rem] py-6 h-0 group-hover:h-fit px-4 group-hover:absolute group-hover:flex items-end text-white left-0 bottom-0 bg-gradient gap-1 transition-all ease-in duration-300'
      >
        <h3 className='w-full text-base text-white'>{ title }</h3>
        <p className='w-full'>{ description }</p>
        <div className='flex flex-row justify-between items-center w-full '>
          <ul className='flex flex-row flex-wrap gap-2 relative'>
            {
              techs.map( tech => (
                <li key={tech} className='grid place-content-center gap-2 w-8 h-8 relative'>
                  <Image
                    className='hidden group-hover:block'
                    src={`/assets/${tech}.svg`}
                    fill={true}
                    alt='tech logo'
                    sizes='(max-width: 32px, max-height: 32px) 100vw, 32px'
                  />
                </li>
              ))
            }
          </ul>
          <ul className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            {
              links.map( link => {
                if(link.url.length > 0){
                  return (
                    <li key={link.name}>
                      <a className='flex  justify-center items-center bg-rose-700 hover:bg-rose-500 py-2 px-3 rounded-lg font-bold text-sm cursor-pointer gap-1' href={link.url} target='_blank'>
                        <FontAwesomeIcon icon={faLink} className='w-4 h-4'/>
                        {link.name}
                      </a>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </figcaption>
    </motion.figure>
  )
}
