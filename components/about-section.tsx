'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Send, CheckCircle2, AlertCircle, Target, Users, Zap } from 'lucide-react'
import { sendContactEmail, type ContactState } from '@/app/actions/send-email'
import { Reveal } from '@/components/reveal'

const initialState: ContactState = { status: 'idle', message: '' }

const HIGHLIGHTS = [
  { icon: Target, title: 'Foco no cliente', text: 'Soluções sob medida para cada necessidade.' },
  { icon: Zap, title: 'Agilidade', text: 'Atendimento rápido e entregas no prazo.' },
  { icon: Users, title: 'Confiança', text: 'Transparência do orçamento à entrega final.' },
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Enviando...' : 'Enviar mensagem'}
      {!pending && <Send className="h-4 w-4" />}
    </button>
  )
}

export function AboutSection() {
  const [state, formAction] = useActionState(sendContactEmail, initialState)

  return (
    <section id="sobre" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Sobre nós
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Tecnologia com atenção aos detalhes
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A Allbino Tech nasceu do cuidado com a tecnologia do dia a dia. Começamos com
              manutenção, limpeza e reajustes de hardware e software, e hoje ampliamos nossos
              serviços para a criação de landing pages, lojas virtuais, cardápios digitais e
              sistemas web como SaaS e CRM.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nosso compromisso é entregar soluções confiáveis, modernas e acessíveis, unindo o
              melhor do hardware e do software em um só lugar.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon
              return (
                <Reveal key={h.title} delay={i * 80}>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <Icon className="h-5 w-5 text-primary" />
                    <h4 className="mt-3 text-sm font-semibold">{h.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Envie uma mensagem</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha o formulário e retornaremos por e-mail.
            </p>

            <form action={formAction} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-muted-foreground">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="(11) 90000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              {state.status !== 'idle' && (
                <div
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${
                    state.status === 'success'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-destructive/10 text-destructive'
                  }`}
                >
                  {state.status === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  {state.message}
                </div>
              )}

              <SubmitButton />
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
