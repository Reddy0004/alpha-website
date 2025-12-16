"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/utils";

const images = [
  "/gallery%20/0Z0A3048.JPG",
  "/gallery%20/0Z0A2863.JPG",
  "/gallery%20/0Z0A2192.png",
  "/gallery%20/0Z0A2070.JPG",
  "/gallery%20/0K6A8206.JPG",
  "/gallery%20/0B4A0588.JPG",
  "/gallery%20/0B4A0565.JPG",
  "/gallery%20/0B4A0365.JPG",
  "/gallery%20/0B4A0194.JPG",
  "/gallery%20/0Z0A3048.JPG",
  "/gallery%20/0Z0A2863.JPG",
  "/gallery%20/0Z0A2192.png",
  "/gallery%20/0Z0A2070.JPG",
  "/gallery%20/0K6A8206.JPG",
  "/gallery%20/0B4A0588.JPG",
  "/gallery%20/0B4A0565.JPG",
  "/gallery%20/0B4A0365.JPG",
  "/gallery%20/0B4A0194.JPG",
];

export function GalleryParallax({ className }: { className?: string }) {
  return (
    <section className={cn("bg-white py-16 px-4", className)}>
      <div className="mx-auto mb-10 max-w-6xl space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#af2324]">Parallax Gallery</p>
        <h2 className="text-3xl font-serif font-bold text-gray-900">Layered Motion Grid</h2>
        <p className="text-sm text-gray-600">
          Scroll to see columns drift at different speeds for a subtle depth effect.
        </p>
      </div>
      <ParallaxScroll images={images} />
    </section>
  );
}


