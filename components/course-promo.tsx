'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Sparkles, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function CoursePromo() {
  const [closed, setClosed] = useState(false)
  const [expanded, setExpanded] = useState(false)

  if (closed) return null

  return (
    <>
      {/* Card flutuante recolhido */}
      <div
        className={cn(
          'fixed right-4 top-20 z-40 w-[190px] transition-all duration-500 sm:w-[220px]',
          expanded ? 'pointer-events-none scale-95 opacity-0' : 'scale-100 opacity-100',
        )}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-red-600/40 bg-black shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)]">
          {/* Botão fechar */}
          <button
            type="button"
            onClick={() => setClosed(true)}
            aria-label="Fechar anúncio"
            className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-red-600"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Etiqueta pulsante */}
          <div className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            <Sparkles className="h-3 w-3" />
            Novo curso
          </div>

          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Ver detalhes do curso"
            className="block w-full text-left"
          >
            <Image
              src="/images/curso-lento.png"
              alt="ALLBINOTECH Performance Pack - Guia de otimização para Windows por R$ 14,90"
              width={440}
              height={560}
              className="h-auto w-full object-cover"
            />
            <span className="flex items-center justify-center gap-1 bg-red-600 py-2 text-xs font-bold uppercase tracking-wide text-white transition group-hover:bg-red-500">
              Saiba mais
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </button>

          {/* Brilho animado */}
          <div className="pointer-events-none absolute inset-0 animate-pulse rounded-2xl ring-1 ring-inset ring-red-500/30" />
        </div>
      </div>

      {/* Modal expandido */}
      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Detalhes do Performance Pack"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative my-4 max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-red-600/40 bg-black shadow-[0_0_60px_-10px_rgba(220,38,38,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar */}
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-red-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 md:grid-cols-2">
              <Image
                src="/images/curso-lento.png"
                alt="ALLBINOTECH Performance Pack - Seu computador está lento?"
                width={880}
                height={1120}
                className="h-full w-full object-cover"
              />
              <Image
                src="/images/curso-softwares.png"
                alt="5 softwares de confiança: limpeza, monitoramento, diagnóstico, análise de armazenamento e remoção de programas"
                width={880}
                height={1120}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-4 p-6">
              <h3 className="text-balance text-xl font-bold text-white sm:text-2xl">
                Seu computador está lento, travando ou demorando para iniciar?
              </h3>
              <div className="space-y-3 text-pretty leading-relaxed text-white/70">
                <p>
                  Antes de pensar em formatar, descubra o que realmente está causando a lentidão.
                </p>
                <p>
                  O <span className="font-semibold text-red-500">ALLBINOTECH Performance Pack</span>{' '}
                  reúne 6 passos simples e objetivos para melhorar o desempenho do Windows, além de um
                  bônus com 5 softwares gratuitos para limpeza, monitoramento, diagnóstico, análise de
                  armazenamento e remoção de programas desnecessários.
                </p>
                <p>
                  Pare de testar dicas aleatórias e aplique apenas o que realmente pode fazer
                  diferença no seu computador.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-xl border border-red-600/30 bg-red-950/20 p-5 text-center">
                <p className="text-sm uppercase tracking-wide text-white/60">Por apenas</p>
                <p className="text-4xl font-extrabold text-red-500">
                  R$ 14<span className="text-2xl align-top">,90</span>
                </p>
                <a
                  href={SITE.courseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-500"
                >
                  Quero acessar o curso
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
