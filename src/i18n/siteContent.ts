export type SiteLang = 'en' | 'fr' | 'ru'

export type PricingRow = {
  id: string
  name: string
  price: string
  note: string | null
}

export type SiteStrings = {
  nav: { about: string; pricing: string; contact: string }
  ariaLangSwitcher: string
  hero: {
    sectionLang: string
    eyebrow: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
    cards: { title: string; text: string }[]
  }
  pricing: {
    eyebrow: string
    title: string
    description: string
    rows: PricingRow[]
    footerBefore: string
    footerLink: string
    footerAfter: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    addressLabel: string
    address: string
  }
  footer: string
  footerSiren: string
}

export const siteContent: Record<SiteLang, SiteStrings> = {
  en: {
    nav: { about: 'About', pricing: 'Pricing', contact: 'Contact' },
    ariaLangSwitcher: 'Interface language',
    hero: {
      sectionLang: 'en',
      eyebrow: 'IT Consulting Services',
      title:
        "Hello, I'm Iuliia Vlasova — IT consulting from strategy to delivery, with clarity you can act on.",
      lead: 'Get in touch to discuss your context — timelines, scope, and contact details are easy to adapt.',
      ctaPrimary: 'About me',
      ctaSecondary: 'Contact me',
    },
    about: {
      eyebrow: 'About',
      title: 'How I work',
      description:
        'I combine attention to detail with a clear structure: meaning and scenarios first, then visuals and implementation.',
      cards: [
        {
          title: 'Discovery',
          text: 'I clarify audience and context so solutions are not arbitrary.',
        },
        {
          title: 'Design',
          text: 'Typography, grid, and colour as one system — not a loose set of images.',
        },
        {
          title: 'Delivery',
          text: 'Handover of files and assets so rollout goes smoothly.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Rates',
      title: 'Indicative pricing',
      description:
        'Budget and timeline guides — the final quote after we align on the scope.',
      rows: [
        {
          id: 'bank-sites',
          name: 'One-page / bank brochure sites',
          price: 'from €100',
          note: 'from 3 days',
        },
        {
          id: 'brand',
          name: 'Brand books & visual identity',
          price: 'from €2,400',
          note: null,
        },
        {
          id: 'care',
          name: 'Website maintenance',
          price: 'on request',
          note: null,
        },
        {
          id: 'pdf',
          name: 'PDF, brochures, presentations',
          price: 'on request',
          note: null,
        },
      ],
      footerBefore: 'Scope and terms are agreed individually — reach out via ',
      footerLink: 'contact',
      footerAfter: '.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's discuss your project",
      description:
        'Email or messenger — I usually reply within a couple of days.',
      addressLabel: 'Address',
      address: '113 Boulevard de la Croisette\n06400 Cannes, France',
    },
    footer: 'Iuliia VLASOVA — IT Consulting Services',
    footerSiren: 'SIREN 103014544',
  },
  fr: {
    nav: { about: 'À propos', pricing: 'Tarifs', contact: 'Contact' },
    ariaLangSwitcher: 'Langue de l’interface',
    hero: {
      sectionLang: 'fr',
      eyebrow: 'Services de conseil IT',
      title:
        'Bonjour, je suis Iuliia Vlasova — conseil IT, de la stratégie à la mise en œuvre, avec des livrables clairs.',
      lead: 'Écrivez-moi pour parler de votre contexte — les textes et coordonnées sont faciles à adapter.',
      ctaPrimary: 'À propos',
      ctaSecondary: 'Me contacter',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une approche structurée',
      description:
        'Je combine le souci du détail et une structure claire : le sens et les scénarios d’abord, puis le visuel et la mise en œuvre.',
      cards: [
        {
          title: 'Analyse',
          text: 'Je clarifie le public et le contexte pour que les choix ne soient pas arbitraires.',
        },
        {
          title: 'Design',
          text: 'Typographie, grille, couleur — un système cohérent, pas un empilement d’images.',
        },
        {
          title: 'Livraison',
          text: 'Remise des fichiers et assets pour un déploiement sans surprise.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Prix indicatifs',
      description:
        'Repères budget et délais — le devis final après discussion du périmètre.',
      rows: [
        {
          id: 'bank-sites',
          name: 'Sites vitrine / « carte de visite » pour banques',
          price: 'à partir de 100 €',
          note: 'délai dès 3 jours',
        },
        {
          id: 'brand',
          name: 'Brand books et identité visuelle',
          price: 'à partir de 2 400 €',
          note: null,
        },
        {
          id: 'care',
          name: 'Maintenance du site',
          price: 'sur demande',
          note: null,
        },
        {
          id: 'pdf',
          name: 'PDF, brochures, présentations',
          price: 'sur demande',
          note: null,
        },
      ],
      footerBefore: 'Les conditions et le périmètre se précisent au cas par cas — écrivez dans ',
      footerLink: 'les contacts',
      footerAfter: '.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre projet',
      description:
        'Par e-mail ou messagerie — je réponds en général sous quelques jours.',
      addressLabel: 'Adresse',
      address: '113 Boulevard de la Croisette\n06400 Cannes, France',
    },
    footer: 'Iuliia VLASOVA — Services de conseil IT',
    footerSiren: 'SIREN 103014544',
  },
  ru: {
    nav: { about: 'Обо мне', pricing: 'Цены', contact: 'Контакты' },
    ariaLangSwitcher: 'Язык интерфейса',
    hero: {
      sectionLang: 'ru',
      eyebrow: 'IT-консалтинг',
      title:
        'Здравствуйте, я Юлия Власова — консалтинг в IT: от стратегии до внедрения, с понятными результатами.',
      lead: 'Напишите, если хотите обсудить задачу — тексты и контакты легко заменить.',
      ctaPrimary: 'Обо мне',
      ctaSecondary: 'Написать мне',
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Кратко о подходе',
      description:
        'Сочетаю внимание к деталям с ясной структурой: сначала смысл и сценарии, затем визуал и реализация.',
      cards: [
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
      ],
    },
    pricing: {
      eyebrow: 'Прайс',
      title: 'Примерные цены',
      description:
        'Ориентиры по бюджету и срокам — итоговая смета после обсуждения задачи.',
      rows: [
        {
          id: 'bank-sites',
          name: 'Сайты-визитки для банка',
          price: 'от 100 €',
          note: 'срок от 3 дней',
        },
        {
          id: 'brand',
          name: 'Брендбуки и айдентика',
          price: 'от 2400 €',
          note: null,
        },
        {
          id: 'care',
          name: 'Обслуживание сайта',
          price: 'по запросу',
          note: null,
        },
        {
          id: 'pdf',
          name: 'PDF, брошюры, презентации',
          price: 'по запросу',
          note: null,
        },
      ],
      footerBefore: 'Условия и объём работ уточняются индивидуально — напишите в ',
      footerLink: 'контактах',
      footerAfter: '.',
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Давайте обсудим задачу',
      description:
        'Напишите на почту или в мессенджер — отвечу в течение пары дней.',
      addressLabel: 'Адрес',
      address: '113 Boulevard de la Croisette\n06400 Cannes, France',
    },
    footer: 'Iuliia VLASOVA — IT Consulting Services',
    footerSiren: 'SIREN 103014544',
  },
}
