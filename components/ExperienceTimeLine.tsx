'use client';

import Image from 'next/image';

import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

import { encode_sans } from '@/styles/fonts';


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
                <li className='timeline-item-list'>Python</li>
                <li className='timeline-item-list'>Tkinter</li>
                <li className='timeline-item-list'>POO</li>
                <li className='timeline-item-list'>Django</li>
                <li className='timeline-item-list'>Flask</li>
                <li className='timeline-item-list'>Jinja</li>
                <li className='timeline-item-list'>PostgreSQL</li>
                <li className='timeline-item-list'>PySide</li>
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
                <li className='timeline-item-list'>Git</li>
                <li className='timeline-item-list'>Github</li>
                <li className='timeline-item-list'>CSS</li>
                <li className='timeline-item-list'>HTML</li>
                <li className='timeline-item-list'>Python</li>
                <li className='timeline-item-list'>JavaScript</li>
                <li className='timeline-item-list'>POO</li>
                <li className='timeline-item-list'>Vue</li>
                <li className='timeline-item-list'>Angular</li>
                <li className='timeline-item-list'>Azure</li>
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
                <li className='timeline-item-list'>Git</li>
                <li className='timeline-item-list'>Github</li>
                <li className='timeline-item-list'>CSS</li>
                <li className='timeline-item-list'>HTML</li>
                <li className='timeline-item-list'>Responsive Desing</li>
                <li className='timeline-item-list'>NodeJs</li>
                <li className='timeline-item-list'>JavaScript</li>
                <li className='timeline-item-list'>ExpressJs</li>
                <li className='timeline-item-list'>React</li>
                <li className='timeline-item-list'>PostgreSQL</li>
                <li className='timeline-item-list'>Sequelize</li>
                <li className='timeline-item-list'>MVC</li>
                <li className='timeline-item-list'>API Rest</li>
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
                      className='flex timeline-item-list'
                      target='_blank'
                      rel='noopener'
                  >
                      Aplicaciones Web con React
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://certificates.academlo.com/en/verify/27296057226977"
                      className='flex timeline-item-list'
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
                <li className='timeline-item-list'>React</li>
                <li className='timeline-item-list'>Github</li>
                <li className='timeline-item-list'>CSS</li>
                <li className='timeline-item-list'>HTML</li>
                <li className='timeline-item-list'>Firebase</li>
                <li className='timeline-item-list'>JavaScript</li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  )
}



