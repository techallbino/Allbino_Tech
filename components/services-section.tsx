'use client'

import Image from 'next/image'
import {
  Wrench,
  HardDrive,
  Cpu,
  ShieldCheck,
  Globe,
  ShoppingCart,
  UtensilsCrossed,
  LayoutDashboard,
  ArrowUpRight,
} from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'

type Service = {
  icon: React.ElementType
  title: string
  description: string
  message: string
}

const HARDWARE_SOFTWARE: Service[] = [
  {
    icon: Wrench,
    title: 'Manutenção completa',
    description: 'Diagnóstico, reparo e troca de peças para deixar sua máquina como nova.',
    message:
      'Olá! Tenho interesse no serviço de MANUTENÇÃO de hardware/software da Allbino Tech. Pode me passar mais detalhes e valores?',
  },
  {
    icon: HardDrive,
    title: 'Limpeza e otimização',
    description: 'Limpeza física, remoção de vírus e otimização para máxima performance.',
    message:
      'Olá! Quero saber mais sobre o serviço de LIMPEZA E OTIMIZAÇÃO da Allbino Tech. Quais são os valores?',
  },
  {
    icon: Cpu,
    title: 'Reajustes de hardware',
    description: 'Upgrades de memória, SSD e componentes com instalação e configuração.',
    message:
      'Olá! Gostaria de um orçamento para REAJUSTE / UPGRADE de hardware com a Allbino Tech.',
  },
  {
    icon: ShieldCheck,
    title: 'Ajustes de software',
    description: 'Formatação, instalação de sistemas e configuração de programas essenciais.',
    message:
      'Olá! Preciso de AJUSTES DE SOFTWARE (formatação/instalação) com a Allbino Tech. Pode me ajudar?',
  },
]

const WEB_PROJECTS: Service[] = [
  {
    icon: Globe,
    title: 'Landing pages & sites',
    description:
      'Páginas e sites pessoais em React, HTML, TypeScript e Tailwind, rápidos e responsivos.',
    message:
      'Olá! Tenho interesse na criação de uma LANDING PAGE / SITE com a Allbino Tech. Quais são os valores?',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cardápio virtual',
    description: 'Cardápio digital moderno para seu restaurante, com pedidos direto no WhatsApp.',
    message:
      'Olá! Quero saber mais sobre o CARDÁPIO VIRTUAL da Allbino Tech. Pode me passar os valores?',
  },
  {
    icon: ShoppingCart,
    title: 'Lojas virtuais',
    description: 'Loja de itens ou camisetas com catálogo, carrinho e checkout integrado.',
    message:
      'Olá! Tenho interesse em uma LOJA VIRTUAL (itens/camisetas) com a Allbino Tech. Quais os valores?',
  },
  {
    icon: LayoutDashboard,
    title: 'Sistemas SaaS & CRM',
    description: 'Sistemas web robustos, CRM e SaaS desenvolvidos com Java e PostgreSQL.',
    message:
      'Olá! Gostaria de um orçamento para um SISTEMA SAAS / CRM (Java + PostgreSQL) com a Allbino Tech.',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  return (
    <Reveal delay={index * 80}>
      <a
        href={whatsappLink(service.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_var(--color-primary)]"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </span>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
        <h4 className="mt-5 text-lg font-semibold">{service.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <span className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Ver valores no WhatsApp
        </span>
      </a>
    </Reveal>
  )
}

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Nossos serviços
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Do reparo do seu computador à criação do seu sistema online. Clique no que mais combina
            com você e fale direto no WhatsApp.
          </p>
        </Reveal>

        {/* Bloco 1: Hardware & Software */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
              <Image
                src="/images/hardware-software.png"
                alt="Técnico realizando manutenção em hardware de computador"
                width={620}
                height={460}
                className="rounded-3xl border border-border object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Informática
              </span>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">Hardware & Software</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Deixe seu equipamento em boas mãos. Cuidamos de cada detalhe com transparência.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {HARDWARE_SOFTWARE.map((s, i) => (
                <ServiceCard key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Bloco 2: Projetos Web */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Novidade
              </span>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">Criação de projetos web</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Landing pages, lojas, cardápios e sistemas SaaS/CRM feitos sob medida para o seu
                negócio.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WEB_PROJECTS.map((s, i) => (
                <ServiceCard key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
              <Image
                src="/images/web-projects.png"
                alt="Telas de sites, lojas virtuais e sistemas web modernos"
                width={620}
                height={460}
                className="rounded-3xl border border-border object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
