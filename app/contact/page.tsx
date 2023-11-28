import MotionDiv from "@/components/MotionDiv";
import { encode_sans } from "@/app/libs/fonts";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
              <div className="flex flex-col w-44 h-44 justify-center items-center text-black bg-green-400 shadow-2xl rounded-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out floating-animation">
                <FontAwesomeIcon icon={faWhatsapp} className="w-20 h-20" />
                Whatsapp
              </div>
              <div className="flex flex-col w-44 h-44 justify-center items-center text-white bg-blue-600 shadow-2xl rounded-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out floating-animation">
                <FontAwesomeIcon icon={faLinkedin} className="w-20 h-20" />
                LinkedInd
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-xl">Envíame un correo</h2>
            <form className="flex flex-col gap-4  p-4">
              <div className="flex justify-start items-center gap-6">
                <label className="w-28 font-semibold" htmlFor="name">Nombre: </label>
                <input
                  id="name"
                  className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
                  type="text"
                  autoFocus
                />
              </div>
              <div className="flex justify-start items-center gap-6">
                <label className="w-28 font-semibold" htmlFor="email">Correo: </label>
                <input
                  id="email"
                  className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
                  type="email"
                />
              </div>
              <div className="flex justify-start items-center gap-6">
                <label className="w-28 font-semibold" htmlFor="subject">Asunto: </label>
                <input
                  id="subject"
                  className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
                  type="text"
                />
              </div>
              <div className="flex justify-start items-center gap-6">
                <label className="w-28 font-semibold" htmlFor="message">Asunto: </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
                  rows={5}
                />
              </div>
              <button className="flex justify-center items-center self-center w-full gap-2 rounded-lg bg-cyan-300 hover:bg-cyan-500 font-bold text-lg text-black py-3 mt-6">
                Enviar
                <span>
                  <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6"/>
                </span>
              </button>
              <button className="flex justify-center items-center self-center w-fit gap-2 font-bold text-sm italic underline hover:text-rose-600 py-3" type="reset">
                Limpiar
              </button>
            </form>
          </div>
        </div>

      </MotionDiv>
    </main>
  )
}
