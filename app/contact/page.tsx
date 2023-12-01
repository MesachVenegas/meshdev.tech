import Link  from 'next/link';
import MotionDiv from "@/components/MotionDiv";
import ContactForm from "@/components/ContactForm";
import { encode_sans } from "@/app/libs/fonts";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'MeshDev | Contact',
  description: 'Ponte en contacto con migo y trabajemos juntos.',
  keywords: ["desarrollo web", "web apps","landingpages",'development','mesach venegas','meshdev', 'presentación', 'cotizacion', 'trabajo', 'contacto', 'webapp']
}

export default function ContactPage() {

  return (
    <main className="flex w-full h-full justify-center items-center py-6 dark:text-white transition-all duration-300 ease-in-out m-auto">
      <MotionDiv direction="left" duration={.1} styles="w-full max-w-7xl min-h-full p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6">
          <h1 className={`${encode_sans.className} text-4xl font-medium col-span-full text-center`}>
            Contacta me
          </h1>
          <div className="flex flex-col w-full h-full justify-center items-center p-6 gap-6">
            <p className="col-span-full p-4">
              Hola!👋 estare encantado de atenderte, puedes ponerte en contacto con migo a traves de estas redes o bien mediante el formulario, estare en espera de tu mensaje y ansioso por poder empezar a trabajar contigo. Un saludo y nos vemos pronto.
            </p>
            <div className="flex w-full justify-around">
              <Link
                href="https://api.whatsapp.com/send?phone=5216631662698&"
                className="flex flex-col w-36 h-36 md:w-44 md:h-44 justify-center items-center text-black bg-green-400 shadow-2xl rounded-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out floating-animation">
                <FontAwesomeIcon icon={faWhatsapp} size='4x' />
                Whatsapp
              </Link>
              <Link
                href="https://www.linkedin.com/in/mesachvenegas/"
                className="flex flex-col w-36 h-36 md:w-44 md:h-44 justify-center items-center text-white bg-blue-600 shadow-2xl rounded-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out floating-animation"
              >
                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                LinkedInd
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-xl">Envíame un correo</h2>
              <ContactForm />
          </div>
        </div>

      </MotionDiv>
    </main>
  )
}
