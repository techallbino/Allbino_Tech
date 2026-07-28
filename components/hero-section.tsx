'use client'

import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* brilho de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] animate-glow rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Tecnologia que resolve
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-pretty text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Cuidamos do seu <span className="text-primary">hardware, software</span> e da sua
              presença na web
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Manutenção, limpeza e reajustes de computadores com a mesma dedicação com que criamos
              landing pages, lojas virtuais e sistemas sob medida. Tudo em um só lugar.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Conheça os serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappLink(
                  'Olá! Vim pelo site da Allbino Tech e gostaria de saber mais sobre os serviços.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-2xl" />
            <Image
              src="/images/hero-tech.png"
              alt="Placa-mãe de computador com detalhes luminosos"
              width={640}
              height={640}
              priority
              className="rounded-3xl border border-border object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
