import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  r: number
  base: number      // min opacity
  peak: number      // max opacity
  phase: number     // current phase offset
  freq: number      // twinkle frequency
  color: string     // white or slight purple tint
}

export function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let stars: Star[] = []
    let t = 0

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      stars = Array.from({ length: 180 }, () => {
        const isBright = Math.random() < 0.25   // 25% stars are "bright" — twinkle dramatically
        const isPurple = Math.random() < 0.15   // 15% have a slight purple tint
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: isBright
            ? Math.random() * 1.5 + 0.8         // bright stars are slightly larger
            : Math.random() * 0.9 + 0.2,
          base: isBright ? 0.05 : 0.08,
          peak: isBright
            ? Math.random() * 0.5 + 0.6         // 0.6 – 1.0
            : Math.random() * 0.25 + 0.2,       // 0.2 – 0.45
          phase: Math.random() * Math.PI * 2,
          freq: isBright
            ? Math.random() * 0.04 + 0.02       // fast twinkle: 0.02 – 0.06
            : Math.random() * 0.015 + 0.004,    // slow shimmer: 0.004 – 0.019
          color: isPurple ? '200,170,255' : '255,255,255',
        }
      })
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 1

      for (const s of stars) {
        // Smooth sine-based twinkle: oscillates between base and peak
        const wave = (Math.sin(t * s.freq + s.phase) + 1) / 2   // 0 → 1
        const opacity = s.base + (s.peak - s.base) * wave

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color},${opacity.toFixed(3)})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
}
