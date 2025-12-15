"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // More visible parallax effects - enter from below
  const leftY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.5, 1, 1]);
  const leftScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  
  const rightY = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0, 0.4, 1, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 1]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    if (leftRef.current) {
      tl.fromTo(
        leftRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }
    if (rightRef.current) {
      tl.fromTo(
        rightRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9 },
        "-=0.4"
      );
    }
  }, []);

  const alphaItems = [
    { letter: "A", text: "Authentic Relationships" },
    { letter: "L", text: "Legacy & Influence" },
    { letter: "P", text: "Purposeful Stimulations" },
    { letter: "H", text: "Holistic Intergenerational Growth" },
    { letter: "A", text: "Aspirations & Individualism" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[70vh] bg-[#FAFAFA] py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left Section - Who We Are */}
        <motion.div
          ref={leftRef}
          className="flex flex-col space-y-3"
          style={{ y: leftY, opacity: leftOpacity, scale: leftScale }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#8B4513] leading-tight">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-gray-900 leading-relaxed font-sans">
            A Global Collective of Leaders and Legacy Builders. The Alpha Circle connects
            high-impact individuals from family businesses, emerging ventures, and top
            industrial circles — across sectors and borders.
          </p>
        </motion.div>

        {/* Right Section - The Alpha Advantage */}
        <motion.div
          ref={rightRef}
          className="flex flex-col space-y-2"
          style={{ y: rightY, opacity: rightOpacity, scale: rightScale }}
        >
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-2">
            The Alpha Advantage
          </h3>

          <div className="flex flex-col space-y-1.5">
            {alphaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gray-100 rounded-lg p-2.5 md:p-3 hover:bg-gray-200 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-bold text-base">►</span>
                  <span className="text-gray-900 font-semibold text-sm md:text-base">
                    <span className="font-bold">{item.letter}</span> - {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

