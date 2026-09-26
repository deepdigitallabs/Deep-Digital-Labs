'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface IconCloudProps {
  images?: string[];
  className?: string;
}

interface IconData {
  x: number;
  y: number;
  z: number;
  img: HTMLImageElement | null;
}

export function IconCloud({ images = [], className }: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  // Preload all icons
  useEffect(() => {
    if (!images || images.length === 0) return;

    let isMounted = true;
    const loaded: HTMLImageElement[] = [];

    images.forEach((url) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = url;
      img.onload = () => {
        if (isMounted) {
          loaded.push(img);
          if (loaded.length === images.length) {
            setLoadedImages([...loaded]);
          }
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, [images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || loadedImages.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 2 : 2;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Distribute icons evenly on a 3D sphere using the Fibonacci sphere algorithm
    const numIcons = loadedImages.length;
    const radius = Math.min(width, height) * 0.38;
    const icons: IconData[] = [];

    const phiSpan = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < numIcons; i++) {
      const y = 1 - (i / (numIcons - 1 || 1)) * 2; // y from 1 to -1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phiSpan * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      icons.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        img: loadedImages[i],
      });
    }

    // Rotation speeds and mouse interaction
    let rotationX = 0.0025;
    let rotationY = 0.0035;
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) / (rect.width / 2);
      mouseY = (e.clientY - cy) / (rect.height / 2);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      mouseX = 0;
      mouseY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const iconSize = Math.max(32, Math.min(width, height) * 0.095);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const targetRotX = isHovered ? mouseY * 0.018 : 0.002;
      const targetRotY = isHovered ? mouseX * 0.018 : 0.0035;

      rotationX += (targetRotX - rotationX) * 0.06;
      rotationY += (targetRotY - rotationY) * 0.06;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Rotate all icons in 3D space
      icons.forEach((icon) => {
        // Rotate around Y axis
        const x1 = icon.x * cosY - icon.z * sinY;
        const z1 = icon.z * cosY + icon.x * sinY;

        // Rotate around X axis
        const y2 = icon.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + icon.y * sinX;

        icon.x = x1;
        icon.y = y2;
        icon.z = z2;
      });

      // Sort by depth (back to front)
      icons.sort((a, b) => a.z - b.z);

      const cx = width / 2;
      const cy = height / 2;
      const fov = radius * 2.5;

      icons.forEach((icon) => {
        if (!icon.img) return;

        const scale = fov / (fov + icon.z);
        const screenX = cx + icon.x * scale;
        const screenY = cy + icon.y * scale;

        // Depth-based opacity and size
        const depthRatio = (icon.z + radius) / (2 * radius);
        const alpha = Math.max(0.2, Math.min(1, depthRatio * 0.8 + 0.2));
        const currentSize = iconSize * scale;

        ctx.save();
        ctx.globalAlpha = alpha;

        // Subtle ambient circular backplate
        ctx.beginPath();
        ctx.arc(screenX, screenY, currentSize * 0.62, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.fill();

        ctx.drawImage(
          icon.img,
          screenX - currentSize / 2,
          screenY - currentSize / 2,
          currentSize,
          currentSize
        );
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [loadedImages]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex items-center justify-center w-full max-w-[540px] aspect-square mx-auto cursor-grab active:cursor-grabbing select-none',
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
}
