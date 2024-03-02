import React from 'react'
import { MessageProps } from '@/types/contact.types'

export const EmailTemplate: React.FC<Readonly<MessageProps>> = ( { name, email, subject, message } ) => {
  return (
    <div>
      <h1>Hola tienes un nuevo mensaje</h1>
      <p>El nombre es: { name }</p>
      <p>El correo de contacto es: { email }</p>
      <p>El mensaje es: { message }</p>
    </div>
  )
}
