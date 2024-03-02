import * as z from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  email: z.string().email({ message: 'Ingrese una dirección de correo valida' }),
  subject: z.string().min(1, { message: 'Proporciona un asunto para el correo' }),
  message: z.string().min(1, { message: 'El contenido del mensaje es requerido' }),
})