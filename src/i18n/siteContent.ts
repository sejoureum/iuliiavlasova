export type SiteLang = 'en' | 'fr' | 'ru'

export type PricingRow = {
  id: string
  name: string
  price: string
  note: string | null
}

export type SiteStrings = {
  nav: { sejouh: string; about: string; pricing: string; contact: string }
  ariaLangSwitcher: string
  ariaWhatsApp: string
  ariaTelegram: string
  sejouh: {
    eyebrow: string
    label: string
    headline: string
    sub: string
    description: string
    pill1: string
    pill2: string
    pill3: string
    cta: string
    stat1value: string
    stat1label: string
    stat2value: string
    stat2label: string
    stat3value: string
    stat3label: string
  }
  hero: {
    sectionLang: string
    eyebrow: string
    headline: string
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
    nav: { sejouh: 'Séjouh', about: 'About', pricing: 'Pricing', contact: 'Contact' },
    ariaLangSwitcher: 'Interface language',
    ariaWhatsApp: 'Chat on WhatsApp',
    ariaTelegram: 'Chat on Telegram',
    sejouh: {
      eyebrow: 'Flagship product',
      label: 'Séjouh',
      headline: 'The digital Welcome Board\nfor independent hotels.',
      sub: 'SaaS · Hospitality · France',
      description:
        'Séjouh replaces paper welcome folders with a personalised digital board — WiFi, check-in times, local recommendations, contacts — all accessible via one link or QR code. No app. No friction. No paper.',
      pill1: 'Ready in 5 minutes',
      pill2: 'Zero paper',
      pill3: 'No credit card',
      cta: 'Discover Séjouh →',
      stat1value: '−45 %',
      stat1label: 'calls to reception',
      stat2value: '5 min',
      stat2label: 'to go live',
      stat3value: '0 kg',
      stat3label: 'paper printed per week',
    },
    hero: {
      sectionLang: 'en',
      eyebrow: 'IT Consulting Services',
      headline: 'Strategy\nto delivery.',
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
      title: "Get in touch.",
      description:
        'Email or messenger — I usually reply within a couple of days.',
      addressLabel: 'Address',
      address: '113 Boulevard de la Croisette\n06400 Cannes, France',
    },
    footer: 'Iuliia VLASOVA — IT Consulting Services',
    footerSiren: 'SIREN 103014544',
  },
  fr: {
    nav: { sejouh: "Séjouh", about: "À propos", pricing: "Tarifs", contact: "Contact" },
    ariaLangSwitcher: "Langue de l’interface",
    ariaWhatsApp: "Discuter sur WhatsApp",
    ariaTelegram: "Discuter sur Telegram",
    sejouh: {
      eyebrow: "Produit phare",
      label: "Séjouh",
      headline: "Le Welcome Board digital\npour les hôtels indépendants.",
      sub: "SaaS · Hôtellerie · France",
      description:
        "Séjouh remplace les livrets d’accueil papier par un board digital personnalisé — WiFi, horaires, recommandations locales, contacts — accessible en un lien ou un QR code. Sans appli. Sans friction. Sans papier.",
      pill1: "Prêt en 5 minutes",
      pill2: "Zéro papier",
      pill3: "Sans carte bancaire",
      cta: "Découvrir Séjouh →",
      stat1value: "−45 %",
      stat1label: "d’appels à la réception",
      stat2value: "5 min",
      stat2label: "pour être opérationnel",
      stat3value: "0 kg",
      stat3label: "de papier imprimé par semaine",
    },
    hero: {
      sectionLang: 'fr',
      eyebrow: 'Services de conseil IT',
      headline: 'Stratégie\net réalisation.',
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
      title: 'Écrivez-moi.',
      description:
        'Par e-mail ou messagerie — je réponds en général sous quelques jours.',
      addressLabel: 'Adresse',
      address: '113 Boulevard de la Croisette\n06400 Cannes, France',
    },
    footer: 'Iuliia VLASOVA — Services de conseil IT',
    footerSiren: 'SIREN 103014544',
  },
  ru: {
    nav: { sejouh: 'Séjouh', about: 'Обо мне', pricing: 'Цены', contact: 'Контакты' },
    ariaLangSwitcher: 'Язык интерфейса',
    ariaWhatsApp: 'Написать в WhatsApp',
    ariaTelegram: 'Написать в Telegram',
    sejouh: {
      eyebrow: 'Главный продукт',
      label: 'Séjouh',
      headline: 'Цифровой Welcome Board\nдля независимых отелей.',
      sub: 'SaaS · Гостиничная отрасль · Франция',
      description:
        'Séjouh заменяет бумажные папки приветствия цифровым персонализированным бордом — WiFi, расписание заезда, рекомендации, контакты — всё в одной ссылке или QR-коде. Без приложения. Без бумаги.',
      pill1: 'Готово за 5 минут',
      pill2: 'Ноль бумаги',
      pill3: 'Без карты',
      cta: 'Открыть Séjouh →',
      stat1value: '−45 %',
      stat1label: 'звонков на ресепшн',
      stat2value: '5 мин',
      stat2label: 'до запуска',
      stat3value: '0 кг',
      stat3label: 'бумаги в неделю',
    },
    hero: {
      sectionLang: 'ru',
      eyebrow: 'IT-консалтинг',
      headline: 'От стратегии\nдо результата.',
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
      title: 'Напишите мне.',
      description:
        'Напишите на почту или в мессенджер — отвечу в течение пары дней.',
      addressLabel: 'Адрес',
      address: '113 Boulevard de la Croisette\n06400 Cannes, France',
    },
    footer: 'Iuliia VLASOVA — IT Consulting Services',
    footerSiren: 'SIREN 103014544',
  },
}
