import { Metadata } from "next";

import { projects } from '@/lib/constants';
import { encode_sans } from '@/styles/fonts';
import MotionDiv from '@/components/MotionDiv';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'MeshDev | Portfolio',
  description: 'Aquí puedes encontrar algunos de mis proyectos y trabajos realizados o en los que estoy trabajando actualmente.',
  keywords: ["desarrollo web", "web apps","landingpages",'development','mesach venegas','meshdev', 'presentación', 'portfolio', 'proyectos']
}

export default function PortfolioPage() {
  return (
    <main className="flex justify-center items-center py-6 dark:text-white transition-all w-full duration-300 ease-in-out h-full m-auto">
      <MotionDiv direction="left" duration={.1} styles="w-full min-h-full p-6" >
        <div className='flex flex-col justify-center items-center gap-6'>
          <h1 className={`${encode_sans.className} text-4xl  font-medium`} >
            Proyectos
          </h1>
          {/* contenedor de las tarjetas */}
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-auto w-full  h-full gap-6 p-6 transition-all'>
            {/* tarjeta */}
            {
              projects.map(({title, description_es, techs, url, links}) => (
                <ProjectCard
                  key={title}
                  title={title}
                  description={description_es}
                  techs={techs}
                  imgUrl={url}
                  links={ links }
                />
              ))
            }
          </div>
        </div>
      </MotionDiv>
    </main>
  )
}
