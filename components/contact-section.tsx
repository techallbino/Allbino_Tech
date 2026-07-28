'use client'

import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { SITE, whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { InstagramIcon } from '@/components/icons'

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Vamos conversar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Escolha o canal que preferir. Respondemos rápido para tirar suas dúvidas e montar seu
            orçamento.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <a
              href={whatsappLink('Olá! Vim pelo site da Allbino Tech e gostaria de conversar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1 font-semibold">
                  WhatsApp
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">(11) 91194-3125</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <InstagramIcon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1 font-semibold">
                  Instagram
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="truncate text-sm text-muted-foreground">@allbinotech</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
