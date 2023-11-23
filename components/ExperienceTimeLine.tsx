'use client';

import Image from 'next/image';
import { encode_sans } from '@/app/libs/fonts';
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';


export default function ExperienceTimeLine() {

  return (
    <>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className='text-rose-500 dark:text-cyan-400 font-medium'>
              Abril 2021 - Junio 2021
            </Timeline.Time>
            <Timeline.Title className={`${encode_sans.className} flex gap-2`}>
              <Image
                src="/assets/udemy.svg"
                width={40}
                height={40}
                alt='Academlo logo'
              />
              Universidad Python
            </Timeline.Title>
            <Timeline.Body className='text-black/70'>
              Curso de programacion con python desde las bases hasta avanzado, y frameworks para el desarrollo web y la creación de aplicaciones de escritorio con entorno gráfico.
              <ul className='flex flex-wrap gap-4 mt-2'>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Python</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Tkinter</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>POO</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Django</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Flask</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Jinja</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>PostgreSQL</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>PySide</li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className='text-rose-500 dark:text-cyan-400 font-medium'>
              Febrero 2022 - Marzo 2022
            </Timeline.Time>
            <Timeline.Title className={`${encode_sans.className} flex gap-2 items-center`} >
              <Image
                src="/assets/inovacion.webp"
                width={40}
                height={40}
                alt='Academlo logo'
              />
              Launch X
            </Timeline.Title>
            <Timeline.Body className='text-black/70'>
              Bootcamp en Linea impulsado por Github Education y Microsoft, impartido por Innovacion virtual en el cual se capacita desarrolladores FullStack
              <ul className='flex flex-wrap gap-4 mt-2'>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Git</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Github</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>CSS</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>HTML</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Python</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>JavaScript</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>POO</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Vue</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Angular</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Azure</li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className='text-rose-500 dark:text-cyan-400 font-medium'>
              Octubre 2022 - Junio 2023
            </Timeline.Time>
            <Timeline.Title className={`${encode_sans.className} flex gap-2 items-center`}>
              <Image
                src="/assets/academlo_logo.png"
                width={50}
                height={50}
                alt='Academlo logo'
              />
              Academlo
            </Timeline.Title>
            <Timeline.Body className='text-black/70'>
              Desarrollador Full Stack y Ciencias de la computación, escuela para la formacion de desarrolladores Web FullStack.
              <ul className='flex flex-wrap gap-4 mt-2'>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Git</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Github</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>CSS</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>HTML</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Responsive Desing</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>NodeJs</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>JavaScript</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>ExpressJs</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>React</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>PostgreSQL</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Sequelize</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>MVC</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>API Rest</li>
              </ul>
              <div className='flex flex-col gap-2 p-4'>
                <h4>Certificaciones</h4>
                <ul className='flex flex-wrap items-center justify-start gap-6 mt-2'>
                  <li>
                    <a
                      href="https://certificates.academlo.com/en/verify/61256560084358"
                      className='flex border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-2 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'
                      target='_blank'
                      rel='noopener'
                    >
                      Fundamentos Desarrollo Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://certificates.academlo.com/en/verify/48509592099651"
                      className='flex border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'
                      target='_blank'
                      rel='noopener'
                  >
                      Aplicaciones Web con React
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://certificates.academlo.com/en/verify/27296057226977"
                      className='flex border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'
                      target='_blank'
                      rel='noopener'
                    >
                      Back End con NodeJs
                    </a>
                  </li>
                </ul>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className='text-rose-500 dark:text-cyan-400 font-medium'>
              Enero 2023 - Abril 2023
            </Timeline.Time>
            <Timeline.Title className={`${encode_sans.className} flex gap-2 items-center`} >
              <Image
                src="/assets/codefy.png"
                width={60}
                height={60}
                alt='Academlo logo'
              />
              Codefy +
            </Timeline.Title>
            <Timeline.Body className='text-black/70'>
              Desarrolladora de software Peruana, desarrollo de sitios web, trabaje en un proyecto para una empresa chilena de consultoria que provee diferentes servicios a sus clientes en asesorías y cursos diversos.
              <ul className='flex flex-wrap gap-4 mt-2'>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>React</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Github</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>CSS</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>HTML</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>Firebase</li>
                <li className='border border-slate-500 hover:text-rose-500 hover:border-rose-500  py-1 px-3 rounded-lg dark:hover:border-cyan-400 dark:hover:text-cyan-400 font-medium hover:scale-110 transition-all ease-in-out cursor-pointer'>JavaScript</li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  )
}



