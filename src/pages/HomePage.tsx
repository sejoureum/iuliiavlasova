import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/motion/Reveal'
import { RotatingCubes } from '@/components/RotatingCubes'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'
import {
  easeOut,
  staggerContainerFor,
  staggerItem,
  viewportOnce,
} from '@/lib/motion-variants'

function SectionDivider({
  number,
  label,
  dark = false,
}: {
  number: string
  label: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-4">
      <span className={`font-mono text-[10px] font-semibold tracking-[0.25em] ${dark ? 'text-white/30' : 'text-neutral-400'}`}>
        {number}
      </span>
      <div className={`h-px flex-1 ${dark ? 'bg-white/10' : 'bg-neutral-200'}`} />
      <span className={`font-mono text-[10px] font-semibold tracking-[0.25em] ${dark ? 'text-white/30' : 'text-neutral-400'}`}>
        /{label}
      </span>
    </div>
  )
}

export function HomePage() {
  const { lang } = useSiteLanguage()
  const t = siteContent[lang]
  const hero = t.hero
  const reduce = useReducedMotion()
  const dur = reduce ? 0 : 0.48
  const staggerParent = staggerContainerFor(!!reduce)
  const itemTransition = { duration: dur, ease: easeOut }

  return (
    <>
      {/* ── HERO — white ── */}
      <section lang={hero.sectionLang} className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
          <Reveal>
            <SectionDivider number="001" label="INTRO" />
          </Reveal>

          <div className="mt-12 grid items-center gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400"
              variants={staggerItem}
              transition={itemTransition}
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              className="font-display mt-5 max-w-4xl whitespace-pre-line text-6xl font-black leading-[0.95] tracking-tight text-neutral-900 sm:text-7xl md:text-8xl lg:text-[7rem]"
              variants={staggerItem}
              transition={itemTransition}
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              className="mt-8 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base"
              variants={staggerItem}
              transition={itemTransition}
            >
              {hero.title}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              variants={staggerItem}
              transition={itemTransition}
            >
              <motion.a
                href="#about"
                className="group inline-flex items-center gap-2.5 border border-neutral-900 bg-neutral-900 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-700"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {hero.ctaPrimary}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border border-neutral-300 bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {hero.ctaSecondary}
                <ArrowUpRight className="size-3.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* cube illustration */}
          <Reveal className="flex justify-center lg:justify-end">
            <RotatingCubes />
          </Reveal>

          </div>
        </div>
      </section>

      {/* ── SÉJOUH — flagship product ── */}
      <section id="sejouh" lang="fr" className="scroll-mt-16 bg-[#1C1D24]">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
          <Reveal>
            <SectionDivider number="002" label="SÉJOUH" dark />
          </Reveal>

          <div className="mt-12 sm:mt-16">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.55_0.28_350)]/70">
                {t.sejouh.eyebrow}
              </p>

              {/* Product name */}
              <div className="mt-5 flex items-center gap-4">
                {/* Lozenge brand mark */}
                <span
                  className="inline-block shrink-0 rounded-full"
                  style={{ width: 18, height: 18, backgroundColor: 'oklch(0.55 0.28 350)' }}
                  aria-hidden
                />
                <h2 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl">
                  {t.sejouh.label}
                </h2>
              </div>

              <p className="font-display mt-4 whitespace-pre-line text-3xl font-bold leading-tight tracking-tight text-white/80 sm:text-4xl">
                {t.sejouh.headline}
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                {t.sejouh.sub}
              </p>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55">
                {t.sejouh.description}
              </p>

              {/* Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[t.sejouh.pill1, t.sejouh.pill2, t.sejouh.pill3].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <a
                href="https://sejouh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 border border-[oklch(0.55_0.28_350)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.75_0.18_350)] transition-colors hover:bg-[oklch(0.55_0.28_350)] hover:text-white"
              >
                {t.sejouh.cta}
              </a>
            </Reveal>

            {/* Stats row */}
            <motion.div
              className="mt-14 grid grid-cols-3 divide-x divide-white/10 border border-white/10"
              variants={staggerContainerFor(!!reduce)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {[
                { value: t.sejouh.stat1value, label: t.sejouh.stat1label },
                { value: t.sejouh.stat2value, label: t.sejouh.stat2label },
                { value: t.sejouh.stat3value, label: t.sejouh.stat3label },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="px-6 py-8 text-center"
                  variants={staggerItem}
                  transition={{ duration: dur, ease: easeOut }}
                >
                  <p
                    className="text-4xl font-black tracking-tight sm:text-5xl"
                    style={{ color: 'oklch(0.55 0.28 350)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] leading-snug text-white/35">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT — black ── */}
      <section id="about" lang={hero.sectionLang} className="scroll-mt-16 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
          <Reveal>
            <SectionDivider number="003" label="ABOUT" dark />
          </Reveal>

          <div className="mt-12 grid gap-12 sm:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                {t.about.eyebrow}
              </p>
              <h2 className="font-display mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl">
                {t.about.title}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/55">
                {t.about.description}
              </p>
            </Reveal>

            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {t.about.cards.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="flex gap-6 border-t border-white/10 py-6 last:border-b last:border-white/10"
                  variants={staggerItem}
                  transition={itemTransition}
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold tracking-[0.2em] text-white/20">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRICING — light gray ── */}
      <section id="pricing" lang={hero.sectionLang} className="scroll-mt-16 border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
          <Reveal>
            <SectionDivider number="004" label="RATES" />
          </Reveal>

          <div className="mt-12 sm:mt-16">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {t.pricing.eyebrow}
              </p>
              <h2 className="font-display mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-neutral-900 sm:text-6xl">
                {t.pricing.title}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
                {t.pricing.description}
              </p>
            </Reveal>

            <motion.div
              className="mt-10 border border-neutral-200 bg-white"
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {t.pricing.rows.map((row, i) => (
                <motion.div
                  key={row.id}
                  className="flex flex-col gap-1 border-b border-neutral-100 px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                  variants={staggerItem}
                  transition={itemTransition}
                >
                  <div className="flex items-start gap-5">
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold tracking-[0.2em] text-neutral-300">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{row.name}</p>
                      {row.note && (
                        <p className="mt-0.5 text-xs text-neutral-400">{row.note}</p>
                      )}
                    </div>
                  </div>
                  <p className="ml-10 shrink-0 text-sm font-bold uppercase tracking-[0.12em] text-neutral-900 sm:ml-0">
                    {row.price}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <Reveal className="mt-5" delay={0.06}>
              <p className="text-xs text-neutral-400">
                {t.pricing.footerBefore}
                <a
                  href="#contact"
                  className="font-semibold text-neutral-700 underline underline-offset-2 hover:no-underline"
                >
                  {t.pricing.footerLink}
                </a>
                {t.pricing.footerAfter}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT — white ── */}
      <section id="contact" lang={hero.sectionLang} className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
          <Reveal>
            <SectionDivider number="005" label="CONTACT" />
          </Reveal>

          <div className="mt-12 grid gap-12 sm:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {t.contact.eyebrow}
              </p>
              <h2 className="font-display mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-neutral-900 sm:text-6xl">
                {t.contact.title}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-neutral-500">
                {t.contact.description}
              </p>
            </Reveal>

            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div
                className="flex items-start justify-between border-t border-neutral-200 py-6"
                variants={staggerItem}
                transition={itemTransition}
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    <Mail className="mb-0.5 mr-1.5 inline size-3" aria-hidden />
                    Email
                  </p>
                  <a
                    href="mailto:iuliiavlasova.fr@gmail.com"
                    className="mt-2 block text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-500"
                  >
                    iuliiavlasova.fr@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:iuliiavlasova.fr@gmail.com"
                  aria-label="Send email"
                  className="mt-0.5 flex size-8 shrink-0 items-center justify-center border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <ArrowUpRight className="size-3.5" />
                </a>
              </motion.div>

              <motion.div
                className="flex items-start justify-between border-t border-neutral-200 py-6"
                variants={staggerItem}
                transition={itemTransition}
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    <Phone className="mb-0.5 mr-1.5 inline size-3" aria-hidden />
                    Phone
                  </p>
                  <a
                    href="tel:+33743679886"
                    className="mt-2 block text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-500"
                  >
                    +33 7 43 67 98 86
                  </a>
                </div>
                <a
                  href="tel:+33743679886"
                  aria-label="Call"
                  className="mt-0.5 flex size-8 shrink-0 items-center justify-center border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <ArrowUpRight className="size-3.5" />
                </a>
              </motion.div>

              <motion.div
                className="flex items-start justify-between border-t border-b border-neutral-200 py-6"
                variants={staggerItem}
                transition={itemTransition}
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    <MapPin className="mb-0.5 mr-1.5 inline size-3" aria-hidden />
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm font-semibold leading-relaxed text-neutral-900">
                    {t.contact.address}
                  </p>
                </div>
                <MapPin className="mt-0.5 size-4 shrink-0 text-neutral-300" aria-hidden />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
