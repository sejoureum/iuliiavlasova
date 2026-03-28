import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { useSiteLanguage } from '@/context/SiteLanguageContext'
import { siteContent } from '@/i18n/siteContent'
import {
  easeOut,
  staggerContainerFor,
  staggerItem,
  viewportOnce,
} from '@/lib/motion-variants'

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
      <section
        lang={hero.sectionLang}
        className="flex min-h-[100dvh] flex-col border-b border-neutral-200 bg-gradient-to-b from-white to-neutral-100"
      >
        <div className="flex flex-1 flex-col justify-center px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
          <motion.div
            className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center"
            variants={staggerParent}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500"
              variants={staggerItem}
              transition={itemTransition}
            >
              {hero.eyebrow}
            </motion.p>
            <motion.div
              className="h-px w-16 bg-neutral-900"
              aria-hidden
              variants={staggerItem}
              transition={itemTransition}
            />
            <motion.h1
              className="text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem] md:leading-tight"
              variants={staggerItem}
              transition={itemTransition}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg"
              variants={staggerItem}
              transition={itemTransition}
            >
              {hero.lead}
            </motion.p>
            <motion.div
              className="mt-4 flex flex-wrap items-center justify-center gap-3"
              variants={staggerItem}
              transition={itemTransition}
            >
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {hero.ctaSecondary}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        lang={hero.sectionLang}
        className="scroll-mt-24 border-b border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />
          </Reveal>
          <motion.div
            className="mt-10 grid gap-8 md:grid-cols-3"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {t.about.cards.map((item) => (
              <motion.article
                key={item.title}
                className="border border-neutral-200 bg-neutral-50 p-6"
                variants={staggerItem}
                transition={itemTransition}
                whileHover={reduce ? undefined : { y: -4 }}
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="pricing"
        lang={hero.sectionLang}
        className="scroll-mt-24 border-b border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={t.pricing.eyebrow}
              title={t.pricing.title}
              description={t.pricing.description}
            />
          </Reveal>
          <motion.ul
            className="mt-10 border border-neutral-200 bg-neutral-50"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {t.pricing.rows.map((row) => (
              <motion.li
                key={row.id}
                className="flex flex-col gap-2 border-b border-neutral-200 px-5 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                variants={staggerItem}
                transition={itemTransition}
              >
                <div>
                  <p className="font-semibold text-neutral-900">{row.name}</p>
                  {row.note ? (
                    <p className="mt-1 text-sm text-neutral-500">{row.note}</p>
                  ) : null}
                </div>
                <p className="shrink-0 text-sm font-semibold text-neutral-900 sm:text-base">
                  {row.price}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <Reveal className="mt-6 block" delay={0.06}>
            <p className="text-sm text-neutral-500">
              {t.pricing.footerBefore}
              <a
                href="#contact"
                className="font-medium text-neutral-900 underline underline-offset-2 hover:no-underline"
              >
                {t.pricing.footerLink}
              </a>
              {t.pricing.footerAfter}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        lang={hero.sectionLang}
        className="scroll-mt-24 bg-neutral-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="border border-neutral-200 bg-white p-8 sm:p-12">
              <SectionHeading
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                description={t.contact.description}
              />
              <motion.div
                className="mt-8 flex gap-3 border-b border-neutral-200 pb-8"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={itemTransition}
              >
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-neutral-500"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-neutral-900">
                    {t.contact.address}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.a
                  href="mailto:iuliiavlasova.fr@gmail.com"
                  className="inline-flex items-center justify-center gap-3 border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                  variants={staggerItem}
                  transition={itemTransition}
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <Mail className="size-4 shrink-0" />
                  iuliiavlasova.fr@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+33743679886"
                  className="inline-flex items-center justify-center gap-3 border-2 border-neutral-900 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
                  variants={staggerItem}
                  transition={itemTransition}
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <Phone className="size-4 shrink-0" />
                  +33 7 43 67 98 86
                </motion.a>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
