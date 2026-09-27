import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const HeroWave = () => {
  const reduceMotion = useReducedMotion()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    const getWaveColor = () =>
      document.documentElement.classList.contains('dark') ? '#25343F' : '#EAEFEF'
    let animationFrame
    let fillColor = getWaveColor()

    const drawWave = (time = 0) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const amplitude = Math.min(height * 0.3, 54)
      const centerY = height * 0.62
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

      // In dark mode: Multi-layered Border & Contour Effects
      if (document.documentElement.classList.contains('dark')) {
        context.save()

        // 1. Dynamic horizontal gradient contour (amber -> warm yellow -> luminous crest -> amber)
        const borderGradient = context.createLinearGradient(0, 0, width, 0)
        borderGradient.addColorStop(0, 'rgba(255, 155, 81, 0.45)')
        borderGradient.addColorStop(0.25, '#FFB26B')
        borderGradient.addColorStop(0.5, '#FFF2D1')
        borderGradient.addColorStop(0.75, '#FF9B51')
        borderGradient.addColorStop(1, 'rgba(255, 155, 81, 0.45)')

        // 2. Secondary subtle echo contour line (gives architectural / fluid depth)
        context.beginPath()
        context.moveTo(0, centerY + amplitude * Math.sin(phase) - 4)
        for (let x = 0; x <= width; x += 4) {
          const y = centerY + amplitude * Math.sin((x / wavelength) * Math.PI * 2 + phase) - 4
          context.lineTo(x, y)
        }
        context.strokeStyle = 'rgba(255, 180, 110, 0.28)'
        context.lineWidth = 1
        context.stroke()

        // 3. Outer neon aura glow
        context.beginPath()
        context.moveTo(0, centerY + amplitude * Math.sin(phase))
        for (let x = 0; x <= width; x += 4) {
          const y = centerY + amplitude * Math.sin((x / wavelength) * Math.PI * 2 + phase)
          context.lineTo(x, y)
        }
        context.strokeStyle = 'rgba(255, 155, 81, 0.35)'
        context.lineWidth = 4
        context.shadowColor = 'rgba(255, 155, 81, 0.7)'
        context.shadowBlur = 10
        context.stroke()

        // 4. Sharp luminous core crest line
        context.beginPath()
        context.moveTo(0, centerY + amplitude * Math.sin(phase))
        for (let x = 0; x <= width; x += 4) {
          const y = centerY + amplitude * Math.sin((x / wavelength) * Math.PI * 2 + phase)
          context.lineTo(x, y)
        }
        context.strokeStyle = borderGradient
        context.lineWidth = 2
        context.shadowColor = '#FFF2D1'
        context.shadowBlur = 4
        context.stroke()

        context.restore()
      }

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
      fillColor = getWaveColor()
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
      className="relative z-10 -mt-20 h-20 overflow-hidden bg-transparent sm:-mt-24 sm:h-24 lg:-mt-28 lg:h-28"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  )
}

export default HeroWave
