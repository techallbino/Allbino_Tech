'use server'

import { Resend } from 'resend'
import { SITE } from '@/lib/site'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Preencha nome, e-mail e mensagem.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: 'error',
      message: 'Serviço de e-mail indisponível no momento. Tente pelo WhatsApp.',
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Allbino Tech <onboarding@resend.dev>',
      to: [SITE.email],
      replyTo: email,
      subject: `Novo contato pelo site - ${name}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone || 'não informado'}`,
        '',
        'Mensagem:',
        message,
      ].join('\n'),
    })

    if (error) {
      return { status: 'error', message: 'Não foi possível enviar. Tente novamente.' }
    }

    return { status: 'success', message: 'Mensagem enviada com sucesso! Retornaremos em breve.' }
  } catch {
    return { status: 'error', message: 'Ocorreu um erro no envio. Tente novamente.' }
  }
}
