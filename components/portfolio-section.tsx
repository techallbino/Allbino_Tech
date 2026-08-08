    'use client'

    import { useEffect, useState } from 'react'
    import Image from 'next/image'
    import {
    ArrowUpRight,
    BookOpen,
    Code2,
    Cpu,
    Eye,
    MonitorSmartphone,
    Sparkles,
    Wrench,
    X,
    } from 'lucide-react'

    import { Reveal } from '@/components/reveal'
    import { SITE, whatsappLink } from '@/lib/site'

    type DevelopmentProject = {
    image: string
    title: string
    category: string
    description: string
    technologies: string[]
    }

    const HARDWARE_PROJECTS = [
    {
        image: '/images/portfolio/hardware-limpeza.png',
        title: 'Limpeza e manutenção interna',
        category: 'Manutenção preventiva',
        description:
        'Limpeza completa dos componentes, remoção de poeira e verificação das condições do equipamento.',
    },
    {
        image: '/images/portfolio/hardware-pasta-termica.png',
        title: 'Troca de pasta térmica',
        category: 'Controle de temperatura',
        description:
        'Substituição da pasta térmica para melhorar a dissipação de calor e evitar superaquecimento.',
    },
    {
        image: '/images/portfolio/hardware-montagem.png',
        title: 'Montagem de computadores',
        category: 'Hardware personalizado',
        description:
        'Montagem, organização e configuração de computadores conforme a necessidade do cliente.',
    },
    ]

    const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
    {
        image: '/images/portfolio/dev-crm.png',
        title: 'CRM para gestão de chamados',
        category: 'Sistema empresarial',
        description:
        'Sistema completo para controle de chamados, empresas, usuários, prioridades, equipamentos e relatórios.',
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    },
    {
        image: '/images/portfolio/dev-techline.png',
        title: 'Site institucional Techline',
        category: 'Presença digital',
        description:
        'Site moderno e responsivo para apresentar serviços de TI com clareza em computadores e celulares.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    },
    {
        image: '/images/portfolio/dev-pagban.png',
        title: 'Dashboard financeiro Pagban',
        category: 'Interface financeira',
        description:
        'Dashboard financeiro com saldo, ações rápidas, cartão, metas e visualização de movimentações.',
        technologies: ['React', 'TypeScript', 'Dashboard'],
    },
    ]

    export function PortfolioSection() {
    const [selectedProject, setSelectedProject] =
        useState<DevelopmentProject | null>(null)

    useEffect(() => {
        if (!selectedProject) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const closeOnEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setSelectedProject(null)
        }
        }

        window.addEventListener('keydown', closeOnEscape)

        return () => {
        document.body.style.overflow = previousOverflow
        window.removeEventListener('keydown', closeOnEscape)
        }
    }, [selectedProject])

    return (
        <section
        id="portfolio"
        className="relative scroll-mt-20 overflow-hidden bg-[#f5f3fa] py-24 text-[#111015] md:py-32"
        >
        {/* Decoração */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-56 -left-52 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            {/* Cabeçalho */}
            <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm">
                    <Sparkles className="h-4 w-4" />
                    Projetos realizados
                </span>

                <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
                    Nosso trabalho
                    <span className="block text-violet-700">
                    na prática.
                    </span>
                </h2>
                </div>

                <p className="max-w-lg text-base leading-7 text-black/55">
                Da manutenção de equipamentos ao desenvolvimento de sistemas:
                conheça alguns trabalhos que representam as soluções da Allbino
                Tech.
                </p>
            </div>
            </Reveal>

            {/* Hardware */}
            <div className="mt-20">
            <Reveal>
                <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-6">
                <div>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                    <Cpu className="h-4 w-4" />
                    Hardware & Software
                    </span>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    Serviços realizados
                    </h3>
                </div>

                <p className="hidden max-w-sm text-right text-sm leading-6 text-black/45 md:block">
                    Cuidado técnico para melhorar o desempenho, a temperatura e a
                    vida útil dos equipamentos.
                </p>
                </div>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {HARDWARE_PROJECTS.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                    <article className="h-full overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_15px_45px_rgba(40,25,70,0.07)]">
                    {/* Sem zoom e sem botão visualizar */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd9e4]">
                        <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        />

                        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        Trabalho realizado
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                            {project.category}
                            </p>

                            <h4 className="mt-3 text-xl font-bold">
                            {project.title}
                            </h4>
                        </div>

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                            <Wrench className="h-5 w-5" />
                        </span>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-black/50">
                        {project.description}
                        </p>
                    </div>
                    </article>
                </Reveal>
                ))}
            </div>
            </div>

            {/* Desenvolvimento */}
            <div className="mt-24">
            <Reveal>
                <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-6">
                <div>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                    <Code2 className="h-4 w-4" />
                    Desenvolvimento
                    </span>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    Sites e sistemas
                    </h3>
                </div>

                <p className="hidden max-w-sm text-right text-sm leading-6 text-black/45 md:block">
                    Passe o cursor sobre um projeto para visualizar os detalhes da
                    interface.
                </p>
                </div>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {DEVELOPMENT_PROJECTS.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                    <article className="group h-full overflow-hidden rounded-3xl border border-black/10 bg-[#0d0b12] text-white shadow-[0_20px_55px_rgba(35,15,65,0.15)] transition duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_30px_70px_rgba(88,28,135,0.22)]">
                    {/* Efeito somente nos projetos de desenvolvimento */}
                    <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="relative block aspect-[16/10] w-full overflow-hidden text-left"
                        aria-label={`Visualizar o projeto ${project.title}`}
                    >
                        <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-50 transition duration-500 group-hover:opacity-100" />

                        <div className="absolute inset-0 flex items-center justify-center bg-violet-950/10 opacity-0 backdrop-blur-[1px] transition duration-500 group-hover:opacity-100">
                        <span className="flex translate-y-4 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl transition duration-500 group-hover:translate-y-0">
                            <Eye className="h-4 w-4 text-violet-700" />
                            Visualizar projeto
                        </span>
                        </div>

                        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                        {project.category}
                        </span>
                    </button>

                    <div className="flex h-[250px] flex-col p-6">
                        <div className="flex items-start justify-between gap-4">
                        <h4 className="text-xl font-bold leading-tight transition group-hover:text-violet-300">
                            {project.title}
                        </h4>

                        <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            aria-label={`Abrir ${project.title}`}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-violet-500/50 hover:bg-violet-500/15 hover:text-violet-300"
                        >
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                        </div>

                        <p className="mt-4 flex-1 text-sm leading-6 text-white/45">
                        {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                            key={technology}
                            className="rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-3 py-1.5 text-[10px] font-medium text-violet-300"
                            >
                            {technology}
                            </span>
                        ))}
                        </div>
                    </div>
                    </article>
                </Reveal>
                ))}
            </div>
            </div>

            {/* Curso */}
            <div className="mt-24">
            <Reveal>
                <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-6">
                <div>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    <BookOpen className="h-4 w-4" />
                    Conteúdo digital
                    </span>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    Performance Pack
                    </h3>
                </div>

                <p className="hidden max-w-sm text-right text-sm leading-6 text-black/45 md:block">
                    Conteúdo prático para melhorar o desempenho do computador e identificar
                    problemas com mais facilidade.
                </p>
                </div>
            </Reveal>

            <Reveal delay={100}>
                <article className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-[26px] border border-red-950/20 bg-[#090909] text-white shadow-[0_25px_70px_rgba(80,0,0,0.18)] lg:grid-cols-[0.68fr_1.32fr]">
                {/* Imagem sem efeito de visualização */}
                <div className="relative min-h-[390px] overflow-hidden bg-black sm:min-h-[460px] lg:min-h-[510px]">
                    <Image
                    src="/images/portfolio/performance-pack.png"
                    alt="Performance Pack Allbino Tech"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="relative flex flex-col justify-center overflow-hidden p-6 sm:p-8 lg:p-10">
                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-700/20 blur-[120px]" />

                    <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-red-950/30 blur-[110px]" />

                    <div className="relative">
                    <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                        <Sparkles className="h-4 w-4" />
                        Guia prático + bônus
                    </span>

                    <h4 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                        Mais desempenho.
                        <span className="block text-red-500">
                        Mais controle.
                        </span>
                        Menos problemas.
                    </h4>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/55">
                        Um material desenvolvido para ajudar você a melhorar o desempenho
                        do Windows, identificar possíveis falhas e manter seu computador
                        mais organizado.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {[
                        'Limpeza de arquivos desnecessários',
                        'Monitoramento de desempenho',
                        'Diagnóstico de falhas',
                        'Análise de armazenamento',
                        'Remoção de programas',
                        'Orientação passo a passo',
                        ].map((benefit) => (
                        <div
                            key={benefit}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 py-3 text-sm text-white/65"
                        >
                            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                            {benefit}
                        </div>
                        ))}
                    </div>

                    <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                        <a
                        href="https://pay.kiwify.com.br/avC7FQL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_18px_50px_rgba(220,38,38,0.3)]"
                        >
                        Conhecer o Performance Pack

                        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>

                        <div>
                        <p className="text-xs uppercase tracking-wider text-white/35">
                            Acesso por apenas
                        </p>

                        <p className="mt-1 text-2xl font-bold text-white">
                            R$ 14
                            <span className="text-base text-red-500">,90</span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </article>
            </Reveal>
            </div>

            {/* Chamada final */}
            <Reveal>
            <div className="mt-20 flex flex-col items-center justify-between gap-7 rounded-[30px] bg-[#111015] px-7 py-9 text-white shadow-2xl md:flex-row md:px-10">
                <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    Tem um projeto em mente?
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                    Vamos transformar sua ideia em uma solução real.
                </h3>
                </div>

                <a
                href={whatsappLink(
                    'Olá! Vi os projetos da Allbino Tech e gostaria de solicitar um orçamento.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white"
                >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </div>
            </Reveal>
        </div>

        {/* Modal de visualização: somente desenvolvimento */}
        {selectedProject && (
            <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização de ${selectedProject.title}`}
            onClick={() => setSelectedProject(null)}
            >
            <div
                className="animate-in zoom-in-95 relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0b12] shadow-[0_40px_120px_rgba(0,0,0,0.8)] duration-300"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar visualização"
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition hover:rotate-90 hover:border-violet-500 hover:bg-violet-600"
                >
                <X className="h-5 w-5" />
                </button>

                <div className="relative aspect-video max-h-[75dvh]">
                <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                />
                </div>

                <div className="flex flex-col justify-between gap-5 border-t border-white/10 p-6 text-white sm:flex-row sm:items-center">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-400">
                    {selectedProject.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    {selectedProject.title}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/40">
                    <MonitorSmartphone className="h-4 w-4 text-violet-400" />
                    Interface desenvolvida para diferentes dispositivos
                </div>
                </div>
            </div>
            </div>
        )}
        </section>
    )
    }