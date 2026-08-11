'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Headphones,
  Sparkles,
  X,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/site'

const DIFFERENTIALS = [
  {
    icon: Cpu,
    title: 'Hardware & Software',
    text: 'Manutenção e upgrades',
    headline: 'Mais desempenho, segurança e vida útil para seu computador.',
    description:
      'Identificamos problemas de hardware e software e aplicamos as soluções necessárias para entregar um computador mais rápido, estável e confiável.',
    benefits: [
      'Diagnóstico completo do equipamento',
      'Limpeza física e preventiva',
      'Otimização de inicialização e desempenho',
      'Instalação de SSD, memória e componentes',
      'Formatação e configuração de programas',
      'Orientação transparente sobre custos',
    ],
    message:
      'Olá! Vi o serviço de Hardware e Software no site e gostaria de solicitar um orçamento.',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento',
    text: 'Sites e sistemas web',
    headline: 'Uma presença digital desenvolvida para gerar resultados.',
    description:
      'Criamos experiências digitais profissionais para apresentar sua marca, melhorar processos e transformar visitantes em oportunidades para o negócio.',
    benefits: [
      'Layout moderno e personalizado',
      'Funcionamento em celular e computador',
      'Integração com WhatsApp e redes sociais',
      'Catálogos, sites e landing pages',
      'Sistemas CRM, ERP e SaaS sob medida',
      'Estrutura preparada para crescimento',
    ],
    message:
      'Olá! Vi o serviço de Desenvolvimento no site e gostaria de conversar sobre um projeto.',
  },
  {
    icon: Headphones,
    title: 'Suporte',
    text: 'Atendimento personalizado',
    headline: 'Suporte próximo para resolver problemas com mais agilidade.',
    description:
      'Você não recebe apenas uma solução técnica. Entendemos sua necessidade, explicamos cada etapa e acompanhamos o serviço até a entrega.',
    benefits: [
      'Atendimento direto e humanizado',
      'Análise da necessidade do cliente',
      'Explicação clara do serviço',
      'Orçamento transparente',
      'Acompanhamento durante a execução',
      'Suporte após a entrega',
    ],
    message:
      'Olá! Vi a área de Suporte no site e gostaria de falar com a Allbino Tech.',
  },
]

export function HeroSection() {
    const [selectedService, setSelectedService] = useState<
    (typeof DIFFERENTIALS)[number] | null
  >(null)

  useEffect(() => {
    if (!selectedService) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedService])
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-violet-500/10 pt-24 lg:min-h-screen lg:pt-28"
    >
      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-32 h-[850px] w-[850px] rounded-full bg-violet-700/[0.16] blur-[170px]" />

        <div className="absolute -left-60 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-800/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute right-[7%] top-0 h-full w-px rotate-[34deg] bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />

        <div className="absolute right-[18%] top-0 h-full w-px rotate-[34deg] bg-gradient-to-b from-transparent via-purple-600/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-1 pb-6 lg:min-h-[650px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 lg:pb-0">
          {/* Texto */}
          <div className="relative z-20 min-w-0 pb-2 lg:pb-0">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5" />
                Tecnologia com confiança
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 max-w-2xl text-[clamp(2.35rem,10.5vw,3.05rem)] font-bold uppercase leading-[0.94] tracking-[-0.055em] text-white sm:mt-7 sm:text-6xl lg:text-[72px]">
                Tecnologia que
                <span className="block">resolve.</span>

                <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Resultados que
                </span>

                <span className="block bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  transformam.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[15px] leading-6 text-white/55 sm:mt-7 sm:text-lg sm:leading-7">
                Do desempenho do seu computador à presença digital da sua
                empresa. Hardware, software e projetos web desenvolvidos com
                estratégia e atenção aos detalhes.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:gap-3">
                <a
                  href={whatsappLink(
                    'Olá! Vim pelo site da Allbino Tech e gostaria de solicitar um orçamento.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-3 py-3 text-[11px] font-bold uppercase tracking-wide text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(168,85,247,0.25)] sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                >
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-transform duration-300 group-hover:translate-y-0" />

                  <span className="relative group-hover:text-white">
                    Solicitar orçamento
                  </span>

                  <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1 group-hover:text-white" />
                </a>

                <a
                  href="#portfolio"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/[0.07] px-3 py-3 text-[11px] font-semibold uppercase tracking-wide text-violet-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/15 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                >
                  Ver portfólio
                  <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/45 sm:mt-10 sm:gap-3 sm:text-sm">
                <BadgeCheck className="h-4 w-4 shrink-0 text-violet-400 sm:h-5 sm:w-5" />
                Soluções personalizadas para cada necessidade
              </div>
            </Reveal>
          </div>

          {/* Computador sem fundo */}
          <Reveal delay={160} className="relative -mt-2 min-w-0 lg:mt-0">
            <div className="pc-float-zone relative mx-auto h-[300px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[580px] lg:h-[690px] lg:max-w-[700px]">
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[110px]" />

              <div className="absolute bottom-[7%] left-1/2 h-14 w-[70%] -translate-x-1/2 rounded-[50%] bg-violet-500/30 blur-2xl" />

              <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[75px]" />

<div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

<video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.35)]"
>
  <source src="/videos/mascote.webm" type="video/webm" />
</video>

              {/* Detalhe flutuante */}
              <div className="absolute right-0 top-[25%] z-20 hidden rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                    <span className="absolute inset-0 animate-ping rounded-xl bg-violet-500/10" />
                    <Cpu className="relative h-4 w-4" />
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Bem vindos
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-white/35">
                      tecnologia de verdade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Diferenciais clicáveis */}
        <Reveal delay={380}>
          <div className="relative -mt-1 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl lg:-mt-2">
            {DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedService(item)}
                  className={`group relative flex min-w-0 flex-col items-center gap-2 px-1.5 py-3 text-center transition duration-300 hover:bg-violet-500/[0.09] sm:flex-row sm:gap-4 sm:px-6 sm:py-5 sm:text-left ${
                    index !== 2
                      ? 'border-r border-white/[0.07]'
                      : ''
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/[0.09] text-violet-400 transition duration-300 group-hover:scale-110 group-hover:border-violet-400/50 group-hover:bg-violet-500/20 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[9px] font-semibold uppercase leading-tight tracking-wide text-white sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-1 hidden text-xs text-white/40 sm:block">
                      {item.text}
                    </p>
                  </div>

                  <ArrowUpRight className="hidden h-4 w-4 text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400 sm:block" />

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>
      {/* Modal dos serviços */}
{selectedService && (
  <div
    className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 backdrop-blur-md sm:items-center sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-label={`Detalhes sobre ${selectedService.title}`}
    onClick={() => setSelectedService(null)}
  >
    <div
      className="animate-in slide-in-from-bottom-10 relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-t-[30px] border border-violet-500/20 bg-[#0d0a13] p-6 shadow-[0_-30px_100px_rgba(88,28,135,0.35)] duration-500 sm:rounded-[30px] sm:p-9"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Linha para puxar no celular */}
      <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-white/15 sm:hidden" />

      <button
        type="button"
        onClick={() => setSelectedService(null)}
        aria-label="Fechar"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:rotate-90 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
        <selectedService.icon className="h-6 w-6" />
      </div>

      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
        {selectedService.title}
      </p>

      <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
        {selectedService.headline}
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-white/55">
        {selectedService.description}
      </p>

      <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
          O que isso agrega para você
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {selectedService.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 text-sm text-white/65"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(selectedService.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white hover:shadow-[0_15px_45px_rgba(139,92,246,0.25)]"
              >
                Solicitar orçamento

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold text-white/60 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
              >
                Continuar explorando
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}