import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const HeroWave = () => {
  const reduceMotion = useReducedMotion()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    let animationFrame
    let fillColor = getComputedStyle(canvas).color

    const drawWave = (time = 0) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const amplitude = Math.min(height * 0.3, 54)
      const centerY = height * 0.4
      const wavelength = Math.max(width * 0.95, 680)
      const phase = reduceMotion ? 0 : time * 0.0005

      context.clearRect(0, 0, width, height)
      context.beginPath()
      context.moveTo(0, centerY + amplitude * Math.sin(phase))

      for (let x = 0; x <= width; x += 4) {
        const y = centerY + amplitude * Math.sin((x / wavelength) * Math.PI * 2 + phase)
        context.lineTo(x, y)
      }

      context.lineTo(width, height)
      context.lineTo(0, height)
      context.closePath()
      context.fillStyle = fillColor
      context.fill()
      context.fillRect(0, height - 2, width, 4)

      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(drawWave)
      }
    }

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      if (reduceMotion) drawWave()
    }

    const resizeObserver = new ResizeObserver(resizeCanvas)
    const themeObserver = new MutationObserver(() => {
      fillColor = getComputedStyle(canvas).color
      if (reduceMotion) drawWave()
    })

    resizeObserver.observe(canvas)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    resizeCanvas()
    drawWave()

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      themeObserver.disconnect()
    }
  }, [reduceMotion])

  return (
    <div
      className="relative h-24 overflow-hidden bg-cream-lighter text-dark-bg dark:bg-dark-card sm:h-28 lg:h-32"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  )
}

export default HeroWave
