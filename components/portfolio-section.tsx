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
        image: '/images/portfolio/hardware-limpeza.webp',
        title: 'Limpeza e manutenção interna',
        category: 'Manutenção preventiva',
        description:
        'Limpeza completa dos componentes, remoção de poeira e verificação das condições do equipamento.',
    },
    {
        image: '/images/portfolio/hardware-pasta-termica.webp',
        title: 'Troca de pasta térmica',
        category: 'Controle de temperatura',
        description:
        'Substituição da pasta térmica para melhorar a dissipação de calor e evitar superaquecimento.',
    },
    {
        image: '/images/portfolio/hardware-montagem.webp',
        title: 'Montagem de computadores',
        category: 'Hardware personalizado',
        description:
        'Montagem, organização e configuração de computadores conforme a necessidade do cliente.',
    },
    ]

    const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
    {
        image: '/images/portfolio/dev-crm.webp',
        title: 'CRM para gestão de chamados',
        category: 'Sistema empresarial',
        description:
        'Sistema completo para controle de chamados, empresas, usuários, prioridades, equipamentos e relatórios.',
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    },
    {
        image: '/images/portfolio/dev-techline.webp',
        title: 'Site institucional Techline',
        category: 'Presença digital',
        description:
        'Site moderno e responsivo para apresentar serviços de TI com clareza em computadores e celulares.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    },
    {
        image: '/images/portfolio/dev-pagban.webp',
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
        className="relative scroll-mt-20 overflow-hidden bg-[#f5f3fa] py-14 text-[#111015] md:py-32"
        >
        {/* Decoração */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-56 -left-52 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            {/* Cabeçalho */}
            <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
                <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700 shadow-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
                    <Sparkles className="h-4 w-4" />
                    Projetos realizados
                </span>

                <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:mt-6 sm:text-5xl md:text-6xl">
                    Nosso trabalho
                    <span className="block text-violet-700">
                    na prática.
                    </span>
                </h2>
                </div>

                <p className="max-w-lg text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
                Da manutenção de equipamentos ao desenvolvimento de sistemas:
                conheça alguns trabalhos que representam as soluções da Allbino
                Tech.
                </p>
            </div>
            </Reveal>

            {/* Hardware */}
            <div className="mt-12 md:mt-20">
            <Reveal>
                <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-4 md:gap-6 md:pb-6">
                <div>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                    <Cpu className="h-4 w-4" />
                    Hardware & Software
                    </span>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">
                    Serviços realizados
                    </h3>
                </div>

                <p className="hidden max-w-sm text-right text-sm leading-6 text-black/45 md:block">
                    Cuidado técnico para melhorar o desempenho, a temperatura e a
                    vida útil dos equipamentos.
                </p>
                </div>
            </Reveal>

            <div className="mobile-card-rail mt-5 grid snap-x snap-mandatory grid-flow-col auto-cols-[86%] gap-4 overflow-x-auto pb-3 md:mt-8 md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
                {HARDWARE_PROJECTS.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                    <article className="h-full snap-start overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_15px_45px_rgba(40,25,70,0.07)] sm:rounded-3xl">
                    {/* Sem zoom e sem botão visualizar */}
                    <div className="relative h-[220px] overflow-hidden bg-[#ddd9e4] sm:h-auto sm:aspect-[4/3]">
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

                    <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                            {project.category}
                            </p>

                            <h4 className="mt-2 text-lg font-bold sm:mt-3 sm:text-xl">
                            {project.title}
                            </h4>
                        </div>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 sm:h-11 sm:w-11">
                            <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        </div>

                        <p className="mt-3 line-clamp-2 text-[13px] leading-5 text-black/50 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-6">
                        {project.description}
                        </p>
                    </div>
                    </article>
                </Reveal>
                ))}
            </div>
            </div>

            {/* Desenvolvimento */}
            <div className="mt-14 md:mt-24">
            <Reveal>
                <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-4 md:gap-6 md:pb-6">
                <div>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                    <Code2 className="h-4 w-4" />
                    Desenvolvimento
                    </span>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">
                    Sites e sistemas
                    </h3>
                </div>

                <p className="hidden max-w-sm text-right text-sm leading-6 text-black/45 md:block">
                    Passe o cursor sobre um projeto para visualizar os detalhes da
                    interface.
                </p>
                </div>
            </Reveal>

            <div className="mobile-card-rail mt-5 grid snap-x snap-mandatory grid-flow-col auto-cols-[88%] gap-4 overflow-x-auto pb-3 lg:mt-8 lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
                {DEVELOPMENT_PROJECTS.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                    <article className="group h-full snap-start overflow-hidden rounded-2xl border border-black/10 bg-[#0d0b12] text-white shadow-[0_20px_55px_rgba(35,15,65,0.15)] transition duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_30px_70px_rgba(88,28,135,0.22)] sm:rounded-3xl">
                    {/* Efeito somente nos projetos de desenvolvimento */}
                    <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="relative block h-[210px] w-full overflow-hidden text-left sm:h-auto sm:aspect-[16/10]"
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

                    <div className="flex min-h-[190px] flex-col p-4 sm:h-[250px] sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                        <h4 className="text-lg font-bold leading-tight transition group-hover:text-violet-300 sm:text-xl">
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

                        <p className="mt-3 line-clamp-2 flex-1 text-[13px] leading-5 text-white/45 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-6">
                        {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                        {project.technologies.map((technology) => (
                            <span
                            key={technology}
                            className="rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-2.5 py-1 text-[9px] font-medium text-violet-300 sm:px-3 sm:py-1.5 sm:text-[10px]"
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

            {/* Chamada final */}
            <Reveal>
            <div className="mt-14 flex flex-col items-stretch justify-between gap-5 rounded-2xl bg-[#111015] px-5 py-6 text-white shadow-2xl sm:rounded-[30px] md:mt-20 md:flex-row md:items-center md:gap-7 md:px-10 md:py-9">
                <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    Tem um projeto em mente?
                </p>

                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    Vamos transformar sua ideia em uma solução real.
                </h3>
                </div>

                <a
                href={whatsappLink(
                    'Olá! Vi os projetos da Allbino Tech e gostaria de solicitar um orçamento.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white sm:py-4"
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
            className="fixed inset-0 z-[120] flex items-end justify-center bg-black/85 p-0 backdrop-blur-md sm:items-center sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização de ${selectedProject.title}`}
            onClick={() => setSelectedProject(null)}
            >
            <div
                className="animate-in slide-in-from-bottom-6 relative max-h-[92dvh] w-full max-w-6xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0d0b12] shadow-[0_40px_120px_rgba(0,0,0,0.8)] duration-300 sm:zoom-in-95 sm:overflow-hidden sm:rounded-3xl"
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

                <div className="relative h-[42dvh] sm:h-auto sm:aspect-video sm:max-h-[75dvh]">
                <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                />
                </div>

                <div className="flex flex-col justify-between gap-3 border-t border-white/10 p-4 text-white sm:flex-row sm:items-center sm:gap-5 sm:p-6">
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