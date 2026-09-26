"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export interface BlinkingSquaresProps {
  /**
   * Number of grid cells along the long axis (8–200).
   * @default 52
   */
  gridSize?: number
  /**
   * Constant square fill percentage within each cell (0.05–0.98).
   * @default 0.57
   */
  squareSize?: number
  /**
   * Per-cell twinkle rate in cycles per second (0–4).
   * 0 freezes the field.
   * @default 1.4
   */
  twinkleSpeed?: number
  /**
   * Strength of the brightness oscillation (0–1).
   * @default 0.94
   */
  twinkleStrength?: number
  /**
   * Minimum brightness of a lit cell (0–1).
   * @default 0.55
   */
  minBrightness?: number
  /**
   * Master brightness multiplier (0–2).
   * @default 1
   */
  intensity?: number
  /**
   * The edge to which the dense squares are anchored ("right" | "left" | "top" | "bottom").
   * @default "right"
   */
  direction?: "right" | "left" | "top" | "bottom"
  /**
   * Custom hex or rgb color for the twinkling squares.
   * Defaults to subtle theme coral/slate.
   */
  squareColor?: string
  /**
   * Optional background color.
   */
  backgroundColor?: string
  /**
   * Additional CSS classes.
   */
  className?: string
  /**
   * Additional inline styles.
   */
  style?: React.CSSProperties
}

interface CellData {
  col: number
  row: number
  phase: number
  speedMult: number
  presence: boolean
  densityWeight: number
}

// Pseudo-random hash for deterministic, seedable cell placement
function pseudoRandom(x: number, y: number, seed = 1337): number {
  const n = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453123
  return n - Math.floor(n)
}

export function BlinkingSquares({
  gridSize = 52,
  squareSize = 0.57,
  twinkleSpeed = 1.4,
  twinkleStrength = 0.94,
  minBrightness = 0.55,
  intensity = 1,
  direction = "right",
  squareColor,
  backgroundColor = "transparent",
  className,
  style,
}: BlinkingSquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let startTime = performance.now()
    let cells: CellData[] = []
    let cols = 0
    let rows = 0
    let cellSize = 0
    let width = 0
    let height = 0

    // Parse RGBA or Hex to [r, g, b]
    function parseColor(colStr?: string): [number, number, number] {
      if (!colStr) {
        // Default warm accent / slate color
        return [232, 98, 60] // #E8623C
      }
      if (colStr.startsWith("#")) {
        const hex = colStr.replace("#", "")
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
      const match = colStr.match(/\d+/g)
      if (match && match.length >= 3) {
        return [Number(match[0]), Number(match[1]), Number(match[2])]
      }
      return [232, 98, 60]
    }

    const rgb = parseColor(squareColor)

    const initGrid = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      if (width === 0 || height === 0) return

      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      // gridSize is number of cells on the longer dimension
      const isLandscape = width >= height
      cellSize = isLandscape ? width / gridSize : height / gridSize
      cols = Math.ceil(width / cellSize)
      rows = Math.ceil(height / cellSize)

      cells = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Density gradient anchored toward specified edge
          let posRatio = 0
          if (direction === "right") {
            posRatio = c / Math.max(1, cols - 1)
          } else if (direction === "left") {
            posRatio = (cols - 1 - c) / Math.max(1, cols - 1)
          } else if (direction === "bottom") {
            posRatio = r / Math.max(1, rows - 1)
          } else if (direction === "top") {
            posRatio = (rows - 1 - r) / Math.max(1, rows - 1)
          }

          // Non-linear falloff curve
          const densityWeight = Math.pow(posRatio, 1.4)
          const randomVal = pseudoRandom(c, r)

          // Higher probability of square being active near anchor
          const presence = randomVal < Math.max(0.12, densityWeight * 0.85 + 0.15)
          const phase = pseudoRandom(c, r, 999) * Math.PI * 2
          const speedMult = 0.5 + 1.0 * pseudoRandom(c, r, 42)

          cells.push({
            col: c,
            row: r,
            phase,
            speedMult,
            presence,
            densityWeight,
          })
        }
      }
    }

    const render = (currentTime: number) => {
      if (!ctx || width === 0 || height === 0) return

      const elapsedSec = (currentTime - startTime) / 1000

      ctx.clearRect(0, 0, width, height)
      if (backgroundColor && backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
      }

      const sqDimension = cellSize * squareSize
      const halfOffset = (cellSize - sqDimension) / 2
      const radius = Math.min(2.5, sqDimension * 0.2)

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        if (!cell.presence) continue

        const x = cell.col * cellSize + halfOffset
        const y = cell.row * cellSize + halfOffset

        // Twinkle calculation
        let norm = 1
        if (twinkleSpeed > 0) {
          const sinVal = Math.sin(
            elapsedSec * twinkleSpeed * Math.PI * 2 * cell.speedMult + cell.phase
          )
          norm = 0.5 + 0.5 * sinVal
        }

        // Oscillate between minBrightness and 1
        const brightness =
          minBrightness +
          (1 - minBrightness) * (1 - twinkleStrength + twinkleStrength * norm)

        const finalAlpha = Math.max(
          0,
          Math.min(1, cell.densityWeight * brightness * intensity)
        )

        if (finalAlpha <= 0.005) continue

        ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${finalAlpha})`

        // Draw rounded rectangle
        ctx.beginPath()
        ctx.roundRect(x, y, sqDimension, sqDimension, radius)
        ctx.fill()
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
    }
  }, [
    gridSize,
    squareSize,
    twinkleSpeed,
    twinkleStrength,
    minBrightness,
    intensity,
    direction,
    squareColor,
    backgroundColor,
  ])

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 size-full overflow-hidden", className)}
      style={style}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  )
}

export default BlinkingSquares
