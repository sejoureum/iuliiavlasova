import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Face = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'
const FACES: Face[] = ['front', 'back', 'left', 'right', 'top', 'bottom']

function faceTransform(face: Face, half: number): string {
  switch (face) {
    case 'front':  return `translateZ(${half}px)`
    case 'back':   return `rotateY(180deg) translateZ(${half}px)`
    case 'left':   return `rotateY(-90deg) translateZ(${half}px)`
    case 'right':  return `rotateY(90deg) translateZ(${half}px)`
    case 'top':    return `rotateX(90deg) translateZ(${half}px)`
    case 'bottom': return `rotateX(-90deg) translateZ(${half}px)`
  }
}

const OUTER = 192
const INNER = 72

const innerShade: Record<Face, string> = {
  front:  '#ff00b8',
  back:   '#c4008d',
  left:   '#e000a8',
  right:  '#d000a0',
  top:    '#ff30c6',
  bottom: '#ae007c',
}

export function RotatingCubes() {
  const outerHalf = OUTER / 2
  const innerHalf = INNER / 2
  const containerRef = useRef<HTMLDivElement>(null)

  /* raw mouse values: -0.5 … 0.5 */
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  /* spring-smoothed tilt angles */
  const spring = { stiffness: 120, damping: 18 }
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [22, -22]), spring)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-28, 28]), spring)

  function onMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        width: 300,
        height: 300,
        maxWidth: '100%',
        perspective: '680px',
        perspectiveOrigin: '50% 46%',
        cursor: 'crosshair',
        flexShrink: 0,
      }}
    >
      {/*
        Mouse-reactive wrapper — Framer Motion applies rotateX/rotateY here.
        CSS animations on child cubes add the independent spin on top.
      */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* ── outer black cube — clockwise ── */}
        <div
          style={{
            position: 'absolute',
            width: OUTER,
            height: OUTER,
            top: '50%',
            left: '50%',
            marginTop: -outerHalf,
            marginLeft: -outerHalf,
            transformStyle: 'preserve-3d',
            animation: 'cube-cw 12s linear infinite',
          }}
        >
          {FACES.map((face) => (
            <div
              key={face}
              style={{
                position: 'absolute',
                width: OUTER,
                height: OUTER,
                transform: faceTransform(face, outerHalf),
                background: 'rgba(8, 8, 8, 0.18)',
                border: '1.5px solid rgba(12, 12, 12, 0.9)',
                boxSizing: 'border-box',
              }}
            />
          ))}
        </div>

        {/* ── inner fuchsia cube — counter-clockwise ── */}
        <div
          style={{
            position: 'absolute',
            width: INNER,
            height: INNER,
            top: '50%',
            left: '50%',
            marginTop: -innerHalf,
            marginLeft: -innerHalf,
            transformStyle: 'preserve-3d',
            animation: 'cube-ccw 7s linear infinite',
          }}
        >
          {/* glow */}
          <div
            style={{
              position: 'absolute',
              inset: -32,
              borderRadius: '50%',
              background: 'rgba(255,0,184,0.3)',
              filter: 'blur(22px)',
              pointerEvents: 'none',
            }}
          />
          {FACES.map((face) => (
            <div
              key={face}
              style={{
                position: 'absolute',
                width: INNER,
                height: INNER,
                transform: faceTransform(face, innerHalf),
                background: innerShade[face],
                border: '1px solid rgba(255,120,230,0.5)',
                boxSizing: 'border-box',
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
