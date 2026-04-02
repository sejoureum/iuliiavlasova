import { useEffect, useRef } from 'react'

export function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const waves = [
      { amplitude: 60, frequency: 0.008, speed: 0.004, yOffset: 0.55, opacity: 0.22, width: 1.5, color: '160,80,255' },
      { amplitude: 45, frequency: 0.012, speed: 0.006, yOffset: 0.62, opacity: 0.14, width: 1,   color: '200,100,255' },
      { amplitude: 80, frequency: 0.006, speed: 0.003, yOffset: 0.48, opacity: 0.10, width: 2,   color: '120,60,220' },
      { amplitude: 35, frequency: 0.016, speed: 0.007, yOffset: 0.70, opacity: 0.09, width: 1,   color: '180,80,255' },
      { amplitude: 55, frequency: 0.010, speed: 0.005, yOffset: 0.40, opacity: 0.08, width: 1.5, color: '140,70,240' },
    ]

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const wave of waves) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${wave.color},${wave.opacity})`
        ctx.lineWidth = wave.width

        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            canvas.height * wave.yOffset +
            Math.sin(x * wave.frequency + t * wave.speed * 80) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + t * wave.speed * 40) * (wave.amplitude * 0.4)

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      t++
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}
