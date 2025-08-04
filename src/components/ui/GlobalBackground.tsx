'use client';

import { useEffect } from 'react';

const GlobalBackground = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = document.getElementById("global-ripple-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d")!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const ripples: { x: number; y: number; radius: number; alpha: number; color: string }[] = [];

    const softColors = [
      "rgba(219, 234, 254, 0.08)", // blue-100
      "rgba(233, 213, 255, 0.08)", // purple-100
      "rgba(254, 249, 195, 0.12)", // yellow-100
      "rgba(220, 252, 231, 0.08)", // green-100
      "rgba(254, 226, 226, 0.08)", // red-100
    ];
    
    let rippleCooldown = 0;

    const addRipple = (x: number, y: number) => {
      const colorIndex = Date.now() % softColors.length;
      const color = softColors[colorIndex];
      ripples.push({ x, y, radius: 0, alpha: 1, color });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ripples.forEach((ripple, index) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ripple.color.replace(/[\d.]+\)$/g, `${ripple.alpha})`);
        ctx.lineWidth = 40;
        ctx.stroke();
        ripple.radius += 0.06;
        ripple.alpha -= 0.002;

        if (ripple.alpha <= 0) {
          ripples.splice(index, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      rippleCooldown++;
      if (rippleCooldown % 35 === 0) {
        addRipple(e.clientX, e.clientY);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Global background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 -z-50" />
      
      {/* Dynamic background elements */}
      <div className="fixed inset-0 overflow-hidden -z-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-6000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-8000" />
      </div>

      {/* Global mouse ripple effect */}
      <canvas 
        id="global-ripple-canvas" 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30" 
      />
    </>
  );
};

export default GlobalBackground;