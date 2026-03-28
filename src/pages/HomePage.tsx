import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

type HeroLang = 'en' | 'fr' | 'ru'

const heroCopy: Record<
  HeroLang,
  {
    sectionLang: string
    imageSrc: string
    imageAlt: string
    eyebrow: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
  }
> = {
  en: {
    sectionLang: 'en',
    imageSrc: '/hero.svg',
    imageAlt: 'Home — visual introduction',
    eyebrow: 'IT Consulting Services',
    title: "Hello, I'm Iuliia Vlasova — IT consulting from strategy to delivery, with clarity you can act on.",
    lead: 'Explore selected work and get in touch to discuss your context — timelines, scope, and contact details are easy to adapt.',
    ctaPrimary: 'View projects',
    ctaSecondary: 'Contact me',
  },
  fr: {
    sectionLang: 'fr',
    imageSrc: '/hero-fr.svg',
    imageAlt: 'Accueil — présentation visuelle',
    eyebrow: 'Services de conseil IT',
    title: 'Bonjour, je suis Iuliia Vlasova — conseil IT, de la stratégie à la mise en œuvre, avec des livrables clairs.',
    lead: 'Parcourez des exemples et écrivez-moi pour parler de votre contexte — les textes et coordonnées sont faciles à adapter.',
    ctaPrimary: 'Voir les projets',
    ctaSecondary: 'Me contacter',
  },
  ru: {
    sectionLang: 'ru',
    imageSrc: '/hero-ru.svg',
    imageAlt: 'Главный экран — визуальное представление',
    eyebrow: 'IT-консалтинг',
    title: 'Здравствуйте, я Иулия Власова — консалтинг в IT: от стратегии до внедрения, с понятными результатами.',
    lead: 'Посмотрите примеры работ и напишите, если хотите обсудить задачу — тексты и контакты легко заменить.',
    ctaPrimary: 'К проектам',
    ctaSecondary: 'Написать мне',
  },
}

const langTabs: { id: HeroLang; label: string }[] = [
  { id: 'en', label: 'ENG' },
  { id: 'fr', label: 'FR' },
  { id: 'ru', label: 'RU' },
]

const projects = [
  {
    title: 'Проект «Альфа»',
    tag: 'Веб',
    description: 'Лендинг и визуальная система для небольшого бренда.',
  },
  {
    title: 'Серия иллюстраций',
    tag: 'Графика',
    description: 'Набор работ в единой палитре для соцсетей и печати.',
  },
  {
    title: 'Редизайн портфолио',
    tag: 'UI',
    description: 'Структура страниц, типографика и адаптивная вёрстка.',
  },
]

export function HomePage() {
  const [heroLang, setHeroLang] = useState<HeroLang>('ru')
  const hero = heroCopy[heroLang]

  return (
    <>
      <section
        lang={hero.sectionLang}
        className="relative flex min-h-[100dvh] flex-col border-b border-[color:var(--color-accent-soft)]/80"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,var(--color-accent-soft)_0%,transparent_55%)] opacity-60" />
        <div
          className="absolute right-4 top-20 z-10 sm:right-6 sm:top-24"
          role="group"
          aria-label="Язык героя"
        >
          <div className="flex rounded-full border border-[color:var(--color-accent-soft)] bg-[color:var(--color-canvas)]/90 p-0.5 shadow-sm backdrop-blur-sm">
            {langTabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setHeroLang(id)}
                className={cn(
                  'min-w-[2.75rem] rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition',
                  heroLang === id
                    ? 'bg-[color:var(--color-accent)] text-white'
                    : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]',
                )}
                aria-pressed={heroLang === id}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-4 pt-20 pb-6 sm:px-6 sm:pt-24">
          <img
            key={hero.imageSrc}
            src={hero.imageSrc}
            alt={hero.imageAlt}
            className="h-auto w-full max-w-5xl object-contain object-center drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] [max-height:min(72vh,640px)]"
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 pb-12 pt-2 text-center sm:px-6 sm:pb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            {hero.eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[color:var(--color-ink)] sm:text-4xl md:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-base text-[color:var(--color-muted)] sm:text-lg">{hero.lead}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              {hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-accent-soft)] bg-white/80 px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-accent)]/50"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-b border-[color:var(--color-accent-soft)]/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Обо мне"
            title="Кратко о подходе"
            description="Сочетаю внимание к деталям с ясной структурой: сначала смысл и сценарии, затем визуал и реализация."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Исследование',
                text: 'Разбираю аудиторию и контекст, чтобы решения не были случайными.',
              },
              {
                title: 'Дизайн',
                text: 'Типографика, сетка, цвет — как единая система, а не набор картинок.',
              },
              {
                title: 'Сдача',
                text: 'Передаю макеты и ассеты так, чтобы внедрение прошло без сюрпризов.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[color:var(--color-accent-soft)]/80 bg-white/60 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-b border-[color:var(--color-accent-soft)]/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Работы"
            title="Избранные проекты"
            description="Заглушки под кейсы — замените заголовки, теги и описания на реальные."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <li
                key={p.title}
                className="group flex flex-col rounded-2xl border border-[color:var(--color-accent-soft)]/80 bg-gradient-to-br from-white to-[color:var(--color-canvas)] p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {p.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)] opacity-0 transition group-hover:opacity-100">
                  Подробнее <ArrowRight className="size-4" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-[color:var(--color-accent-soft)] bg-[linear-gradient(135deg,var(--color-accent-soft)_0%,transparent_55%)] p-8 sm:p-12">
            <SectionHeading
              eyebrow="Контакты"
              title="Давайте обсудим задачу"
              description="Напишите на почту или оставьте ссылку на мессенджер — отвечу в течение пары дней."
            />
            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-[color:var(--color-canvas)] transition hover:bg-[color:var(--color-accent)]"
            >
              <Mail className="size-4" />
              hello@example.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
