'use server'

import * as z from 'zod';
import { Resend } from 'resend';
import { ContactSchema } from '@/schemas';
import { EmailTemplate } from '@/components/email-template';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(values: z.infer<typeof ContactSchema>) {
  try {
    const validate = ContactSchema.safeParse(values);
    if (!validate.success) throw new Error(validate.error.message);

    const { name, email, subject, message } = validate.data;

    const { data, error } = await resend.emails.send({
      from: 'Meshdev Contacto <contact@meshdev.tech>',
      to: 'contact@meshdev.tech',
      subject: subject,
      text: `Tienes un nuevo mensaje de ${name} - ${email} - ${message}`,
      react: EmailTemplate({ name, email, subject, message })
    })

    if (error) throw error;

    if (!data) throw new Error('No se pudo enviar el correo');
    return { id: data.id, message: 'Su correo fue enviado' };
  } catch (error) {
    throw error;
  }
}