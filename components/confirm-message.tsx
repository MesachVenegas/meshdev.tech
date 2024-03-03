'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";


interface DataProps {
  data: { id: string, message: string};
  error?: { name: string, statusCode: number, message: string }
}

const ConfirmMessage = ({ data, error } : DataProps ) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const closeModal = () => {
    setIsOpen(false);
    router.push("/");
  };


  return (
    <div>
      {
        isOpen && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">{ error ? `${error.name} ${error.statusCode}` : "Correo enviado" }</h2>
              <p>{error ? error.message : data.message}</p>
              <button
                type="button"
                onClick={closeModal}
                className="mt-4 bg-cyan-400 text-black px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ConfirmMessage;
