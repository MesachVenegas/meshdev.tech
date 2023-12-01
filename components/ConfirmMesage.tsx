'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const ConfirmMessage = () => {
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
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Correo enviado</h2>
              <p>Tu correo ha sido enviado correctamente.</p>
              <button onClick={closeModal} className="mt-4 bg-cyan-400 text-black px-4 py-2 rounded">
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
