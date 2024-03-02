'use client'

import { useState } from "react";

import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { useForm, SubmitHandler } from "react-hook-form";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Message } from "@/types/contact.types";
import ConfirmMessage from "@/components/ConfirmMesage";



export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Message>();

  const onSubmit : SubmitHandler<Message> = (formData: Message) => {
    setLoading(true);
    // emailjs.send(
    //   process.env.NEXT_PUBLIC_SERVICE_ID || "",
    //   process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
    //   formData,
    //   process.env.NEXT_PUBLIC_KEY
    // )
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     setLoading(false);
    //     setConfirm(true);
    //   }, (err) => {
    //     setLoading(false);
    //     console.log('FAILED...', err);
    //   });

  }


  return (
    <>
      <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-x-6">
          <div className="flex w-full justify-start items-center gap-x-6">
            <label className="w-28 font-semibold" htmlFor="name">Nombre: </label>
            <input
              id="name"
              className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
              type="text"
              autoFocus
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && <small className="italic text-red-500 dark:text-cyan-400 font-bold">Este campo es requerido</small>}
        </div>
        <div className="flex flex-col justify-start items-center gap-x-6">
          <div className="flex w-full justify-start items-center gap-x-6">
            <label className="w-28 font-semibold" htmlFor="email">Correo: </label>
            <input
              id="email"
              className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
              type="email"
              {...register("email", {required: true })}
            />
          </div>
          {errors.email && <small className="italic text-red-500 dark:text-cyan-400 font-bold">Este campo es requerido</small>}
        </div>
        <div className="flex justify-start items-center gap-x-6">
          <div className="flex w-full justify-start items-center gap-x-6">
            <label className="w-28 font-semibold" htmlFor="subject">Asunto: </label>
            <input
              id="subject"
              className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
              type="text"
              {...register("subject")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-x-6">
          <div className="flex w-full justify-start items-center gap-x-6">
            <label className="w-28 font-semibold" htmlFor="message">Asunto: </label>
            <textarea
              id="message"
              className="w-full rounded-md border-none bg-slate-200 dark:bg-slate-800 focus:outline-cyan-400 focus:border-none"
              rows={5}
              {...register("message", { required: true })}
            />
          </div>
          {errors.message && <small className="italic text-red-500 dark:text-cyan-400 font-bold">Este campo es requerido</small>}
        </div>
        <button className="flex justify-center items-center self-center w-full gap-2 rounded-lg bg-cyan-300 hover:bg-cyan-500 font-bold text-lg text-black py-3 mt-6" type="submit">
          Enviar
          <span>
            <ClipLoader
              color={"#000"}
              loading={loading}
              aria-label="Enviando mensaje..."
              data-testid="loading"
              size={20}
            />
          </span>
          {
            !loading && (
              <span>
                <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6"/>
              </span>
            )
          }
        </button>
        <button className="flex justify-center items-center self-center w-fit gap-2 font-bold text-sm italic underline hover:text-rose-600 py-3" type="reset">
          Limpiar
        </button>
      </form>
      {
        confirm && ( <ConfirmMessage /> )
      }
    </>
  )
}
