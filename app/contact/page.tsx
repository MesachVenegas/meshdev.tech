import Link  from 'next/link';
import { Metadata } from "next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { encode_sans } from "@/styles/fonts";
import MotionDiv from "@/components/motion-div";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ponte en contacto con migo y trabajemos juntos.',
}

export default function ContactPage() {

  return (
		<main className="flex w-full h-full justify-center items-center py-6 transition-all duration-300 ease-in-out m-auto">
			<MotionDiv
				direction="left"
				duration={0.1}
				className="w-full max-w-7xl min-h-full p-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6">
					<h1
						className={`${encode_sans.className} text-4xl font-medium col-span-full text-center`}>
						Contacta me
					</h1>
					<div className="mockup-window border border-accent">
						<div className=" flex flex-col w-full h-full justify-center items-center p-6 gap-6 bg-base-300">
							<div className="chat chat-start w-full">
								<div className="chat-bubble shadow-solid">Hola!👋</div>
							</div>
							<div className="chat chat-start w-full">
								<div className="chat-bubble shadow-solid">
									Puedes ponerte en contacto conmigo mediante mi correo
									electrónico o redes
								</div>
							</div>
							<div className="chat chat-end w-full">
								<div className="chat-bubble shadow-solid">
									Puedes enviar un correo a{" "}
									<a
										href="mailto: contacto@meshdev.tech"
										className="text-accent italic">
										contacto@meshdev.tech
									</a>{" "}
									o llenando el formulario
								</div>
							</div>
							<div className="chat chat-start w-full">
								<div className="chat-bubble shadow-solid">
									o bien en cualquiera de los siguiente medios
								</div>
							</div>
              <div className='divider divider-accent'></div>
							<div className="flex w-full justify-around">
								<Link
									href="https://api.whatsapp.com/send?phone=5216631662698&"
									className="flex flex-col w-20 h-20 md:w-32 md:h-32 justify-center text-sm items-center text-black bg-emerald-500 hover:bg-emerald-400 shadow-2xl rounded-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out floating-animation">
									<FontAwesomeIcon icon={faWhatsapp} size="2x" />
									Whatsapp
								</Link>
								<Link
									href="https://www.linkedin.com/in/mesachvenegas/"
									className="flex flex-col w-20 h-20 md:w-32 md:h-32 justify-center text-sm items-center text-white bg-blue-600 hover:bg-blue-500 shadow-2xl rounded-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out floating-animation">
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
									LinkedInd
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="text-center text-xl">Envíame un correo</h2>
						<ContactForm />
					</div>
				</div>
			</MotionDiv>
		</main>
	);
}
