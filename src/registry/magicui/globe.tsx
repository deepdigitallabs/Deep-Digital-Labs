'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe, { COBEOptions } from 'cobe';
import { cn } from '@/lib/utils';

export interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

const DEFAULT_CONFIG: Partial<COBEOptions> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.15, 0.17, 0.22],
  markerColor: [232 / 255, 98 / 255, 60 / 255],
  glowColor: [232 / 255, 98 / 255, 60 / 255],
  markers: [
    { location: [18.5204, 73.8567], size: 0.1 }, // Pune, India (HQ)
    { location: [19.0760, 72.8777], size: 0.08 }, // Mumbai
    { location: [28.6139, 77.2090], size: 0.08 }, // Delhi NCR
    { location: [12.9716, 77.5946], size: 0.08 }, // Bangalore
    { location: [51.5074, -0.1278], size: 0.07 }, // London
    { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco
    { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
    { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
  ],
};

export function Globe({ className, config = {} }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      ...DEFAULT_CONFIG,
      ...config,
      width: width * 2 || 800,
      height: width * 2 || 800,
      baseColor: config.baseColor || DEFAULT_CONFIG.baseColor!,
      markerColor: config.markerColor || DEFAULT_CONFIG.markerColor!,
      glowColor: config.glowColor || DEFAULT_CONFIG.glowColor!,
      diffuse: config.diffuse ?? DEFAULT_CONFIG.diffuse!,
      mapSamples: config.mapSamples ?? DEFAULT_CONFIG.mapSamples!,
      mapBrightness: config.mapBrightness ?? DEFAULT_CONFIG.mapBrightness!,
      dark: config.dark ?? DEFAULT_CONFIG.dark!,
      devicePixelRatio: Math.min(window.devicePixelRatio || 2, 2),
      phi: 0,
      theta: 0.3,
      onRender: (state: Record<string, any>) => {
        if (!pointerInteracting.current) {
          phi += 0.004;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    } as COBEOptions);

    if (canvasRef.current) {
      canvasRef.current.style.opacity = '1';
    }

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [config]);

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-square w-full max-w-[600px]',
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size] cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
      />
    </div>
  );
}
