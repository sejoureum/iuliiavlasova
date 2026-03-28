/** Shared Framer Motion variants — ease-out-expo feel */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
}

/** Stagger with zero delay when user prefers reduced motion */
export function staggerContainerFor(reduceMotion: boolean) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.11,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export const viewportOnce = {
  once: true as const,
  amount: 0.15 as const,
  margin: '0px 0px -12% 0px',
}
