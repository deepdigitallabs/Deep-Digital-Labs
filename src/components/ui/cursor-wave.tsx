"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type ShapeType = "circle" | "triangle" | "square"

export interface CursorWaveProps {
  /**
   * Container width.
   * @default "100%"
   */
  width?: string | number
  /**
   * Container height.
   * @default "100%"
   */
  height?: string | number
  /**
   * Additional CSS classes for styling.
   */
  className?: string
  /**
   * Content rendered above the canvas.
   */
  children?: React.ReactNode
  /**
   * Pixel spacing between cell centers (16–96).
   * @default 40
   */
  cellSize?: number
  /**
   * Cursor influence radius as a percentage of min(width, height) (5–80).
   * @default 30
   */
  influenceRadiusVmin?: number
  /**
   * Time constant in seconds for the swell-up ease (0.05–2).
   * @default 0.5
   */
  attackTime?: number
  /**
   * Time constant in seconds for the relax-down ease (0.05–2).
   * @default 0.6
   */
  releaseTime?: number
  /**
   * Resting scale applied to every shape (0–0.5).
   * @default 0.09
   */
  idleScale?: number
  /**
   * Minimum peak scale assigned per cell on hover (0.5–4).
   * @default 1
   */
  minPeakScale?: number
  /**
   * Maximum peak scale assigned per cell on hover (1–6).
   * @default 3
   */
  maxPeakScale?: number
  /**
   * Click-burst expansion speed in pixels/second (200–4000).
   * @default 1200
   */
  burstSpeed?: number
  /**
   * Click-burst ring thickness in pixels (40–600).
   * @default 180
   */
  burstThickness?: number
  /**
   * Background fill color in hex/rgb format or "transparent".
   * @default "transparent"
   */
  backgroundColor?: string
  /**
   * Color of the animated shapes.
   * @default "#E8623C"
   */
  shapeColor?: string
  /**
   * Pool of shapes randomly assigned across the grid.
   * @default ["circle", "triangle", "square"]
   */
  shapes?: ShapeType[]
  /**
   * Additional inline styles.
   */
  style?: React.CSSProperties
}

interface Cell {
  cx: number
  cy: number
  shape: ShapeType
  currentScale: number
  peakScale: number
}

interface Burst {
  x: number
  y: number
  startTime: number
  maxRadius: number
}

export function CursorWave({
  width = "100%",
  height = "100%",
  className,
  children,
  cellSize = 40,
  influenceRadiusVmin = 30,
  attackTime = 0.5,
  releaseTime = 0.6,
  idleScale = 0.09,
  minPeakScale = 1,
  maxPeakScale = 3,
  burstSpeed = 1200,
  burstThickness = 180,
  backgroundColor = "transparent",
  shapeColor = "#E8623C",
  shapes = ["circle", "triangle", "square"],
  style,
}: CursorWaveProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  })
  const burstsRef = useRef<Burst[]>([])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let cells: Cell[] = []
    let w = 0
    let h = 0
    let lastTime = performance.now()

    // Parse RGBA / Hex
    function parseHexRgb(col: string): [number, number, number] {
      if (col.startsWith("#")) {
        const hex = col.replace("#", "")
        if (hex.length === 3) {
          return [
            parseInt(hex[0] + hex[0], 16),
            parseInt(hex[1] + hex[1], 16),
            parseInt(hex[2] + hex[2], 16),
          ]
        }
        if (hex.length >= 6) {
          return [
            parseInt(hex.slice(0, 2), 16),
            parseInt(hex.slice(2, 4), 16),
            parseInt(hex.slice(4, 6), 16),
          ]
        }
      }
      const match = col.match(/\d+/g)
      if (match && match.length >= 3) {
        return [Number(match[0]), Number(match[1]), Number(match[2])]
      }
      return [232, 98, 60]
    }

    const rgb = parseHexRgb(shapeColor)

    const initGrid = () => {
      const rect = container.getBoundingClientRect()
      w = rect.width
      h = rect.height
      if (w === 0 || h === 0) return

      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const cols = Math.ceil(w / cellSize) + 1
      const rows = Math.ceil(h / cellSize) + 1

      cells = []
      const shapePool = shapes.length > 0 ? shapes : (["circle"] as ShapeType[])

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * cellSize + cellSize / 2
          const cy = r * cellSize + cellSize / 2
          const shape = shapePool[Math.floor(Math.random() * shapePool.length)]
          const peakScale =
            minPeakScale + Math.random() * (maxPeakScale - minPeakScale)

          cells.push({
            cx,
            cy,
            shape,
            currentScale: idleScale,
            peakScale,
          })
        }
      }
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x >= -60 && x <= rect.width + 60 && y >= -60 && y <= rect.height + 60) {
        mouseRef.current = { x, y, active: true }
      } else {
        mouseRef.current.active = false
      }
    }

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      if (clickX >= 0 && clickX <= rect.width && clickY >= 0 && clickY <= rect.height) {
        const maxRadius = Math.hypot(w, h) * 1.2
        burstsRef.current.push({
          x: clickX,
          y: clickY,
          startTime: performance.now(),
          maxRadius,
        })
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("click", handleClick, { passive: true })

    const render = (currentTime: number) => {
      if (!ctx || w === 0 || h === 0) return

      const dt = Math.min(0.1, (currentTime - lastTime) / 1000)
      lastTime = currentTime

      // Clear or fill background
      ctx.clearRect(0, 0, w, h)
      if (backgroundColor && backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, w, h)
      }

      // Filter active bursts
      burstsRef.current = burstsRef.current.filter((b) => {
        const radius = ((currentTime - b.startTime) / 1000) * burstSpeed
        return radius < b.maxRadius
      })

      const influenceRadius =
        (influenceRadiusVmin / 100) * Math.min(w, h)

      const mouse = mouseRef.current

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]

        // 1. Calculate Cursor Influence
        let cursorInfluence = 0
        if (mouse.active) {
          const dx = cell.cx - mouse.x
          const dy = cell.cy - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < influenceRadius) {
            const normDist = dist / influenceRadius
            // Smooth bell curve
            cursorInfluence = Math.pow(Math.cos(normDist * Math.PI * 0.5), 1.8)
          }
        }

        // 2. Calculate Click Bursts Influence
        let burstInfluence = 0
        for (let j = 0; j < burstsRef.current.length; j++) {
          const b = burstsRef.current[j]
          const elapsed = (currentTime - b.startTime) / 1000
          const currentRadius = elapsed * burstSpeed
          const distToBurst = Math.hypot(cell.cx - b.x, cell.cy - b.y)
          const diff = Math.abs(distToBurst - currentRadius)

          if (diff < burstThickness) {
            const burstRatio = 1 - diff / burstThickness
            // Falloff with distance from center
            const decay = Math.max(0, 1 - distToBurst / b.maxRadius)
            burstInfluence = Math.max(burstInfluence, burstRatio * decay * 1.5)
          }
        }

        // 3. Target Scale
        const combinedEffect = Math.min(1.5, cursorInfluence + burstInfluence)
        const targetScale =
          idleScale + combinedEffect * (cell.peakScale - idleScale)

        // 4. Smooth easing (Attack vs Release)
        const isGrowing = targetScale > cell.currentScale
        const timeConstant = isGrowing ? attackTime : releaseTime
        const rate = Math.min(1, dt / Math.max(0.01, timeConstant))
        cell.currentScale += (targetScale - cell.currentScale) * rate * 3.5

        if (cell.currentScale <= 0.01) continue

        // 5. Draw Shape
        const baseRadius = (cellSize * 0.22) * cell.currentScale
        const alpha = Math.min(
          0.85,
          0.12 + (cell.currentScale / maxPeakScale) * 0.73
        )

        ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
        ctx.beginPath()

        if (cell.shape === "circle") {
          ctx.arc(cell.cx, cell.cy, Math.max(0.8, baseRadius), 0, Math.PI * 2)
          ctx.fill()
        } else if (cell.shape === "square") {
          const size = Math.max(1.5, baseRadius * 1.7)
          const half = size / 2
          const r = Math.min(2, size * 0.2)
          ctx.roundRect(cell.cx - half, cell.cy - half, size, size, r)
          ctx.fill()
        } else if (cell.shape === "triangle") {
          const size = Math.max(1.5, baseRadius * 1.8)
          const hTri = size * 0.866
          ctx.moveTo(cell.cx, cell.cy - hTri * 0.6)
          ctx.lineTo(cell.cx - size / 2, cell.cy + hTri * 0.4)
          ctx.lineTo(cell.cx + size / 2, cell.cy + hTri * 0.4)
          ctx.closePath()
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    initGrid()
    animationFrameId = requestAnimationFrame(render)

    const resizeObserver = new ResizeObserver(() => {
      initGrid()
    })
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("click", handleClick)
    }
  }, [
    cellSize,
    influenceRadiusVmin,
    attackTime,
    releaseTime,
    idleScale,
    minPeakScale,
    maxPeakScale,
    burstSpeed,
    burstThickness,
    backgroundColor,
    shapeColor,
    shapes,
  ])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height, ...style }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 block size-full"
      />
      {children}
    </div>
  )
}

export default CursorWave
