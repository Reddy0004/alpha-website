"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const marqueeImages = [
  "/gallery/DSC01118.JPG",
  "/gallery/8K6A1522.JPG",
  "/gallery/0Z0A3082.JPG",
  "/gallery/0Z0A2873.JPG",
  "/gallery/0Z0A2863.JPG",
  "/gallery/0Z0A2070.JPG",
  "/gallery/0Z0A3048.JPG",
  "/gallery/0Z0A2192.png",
  "/gallery/0K6A8206.JPG",
  "/gallery/0B4A0588.JPG",
  "/gallery/0B4A0565.JPG",
  "/gallery/0B4A0365.JPG",
  "/gallery/0B4A0194.JPG",
  "/gallery/gallery-1.JPG",
  "/gallery/gallery-2.jpg",
];

export function GalleryMarquee() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-20 px-4 text-white">
      <div className="relative z-10 mx-auto max-w-4xl space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb3b3]">
          Gallery
        </p>
        <h1 className="text-4xl font-serif font-bold leading-tight md:text-5xl lg:text-6xl">
          One Immersive Marquee
        </h1>
        <p className="text-base text-white/75 md:text-lg">
          A single, continuous 3D marquee showcasing the Alpha gallery set.
        </p>
      </div>

      <div className="relative z-10 mt-12 w-full max-w-7xl">
        <ThreeDMarquee images={marqueeImages} speedSeconds={30} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    </section>
  );
}


