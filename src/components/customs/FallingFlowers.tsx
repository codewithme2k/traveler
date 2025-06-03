"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function FallingFlowers() {
  useEffect(() => {
    const container = document.querySelector(".falling-flowers");

    const createFlower = () => {
      const el = document.createElement("div");
      el.className = "flower absolute w-4 h-4 pointer-events-none";
      el.style.left = Math.random() * window.innerWidth + "px";
      el.style.top = "-20px";
      el.innerHTML = Math.random() > 0.5 ? "🌸" : "🌼";
      container?.appendChild(el);

      const duration = 10 + Math.random() * 10;
      gsap.to(el, {
        y: window.innerHeight + 40,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        duration,
        ease: "linear",
        onComplete: () => {
          el.remove();
        },
      });
    };

    const interval = setInterval(() => {
      if (container) {
        for (let i = 0; i < 3; i++) {
          createFlower();
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block falling-flowers pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-50 mt-[64px]">
      {/* Cây đào góc trái */}
      <Image
        src="/left-1.png"
        width={300}
        height={500}
        alt="Cây đào"
        className="absolute top-0 left-0 w-40 md:w-55"
      />
      {/* Cây mai góc phải */}
      <Image
        src="/right-1.png"
        width={300}
        height={500}
        alt="Cây mai"
        className="absolute top-0 right-0 w-40 md:w-55"
      />
    </div>
  );
}
