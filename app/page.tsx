"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import carImage from "../public/car.png";

gsap.registerPlugin(ScrollTrigger);

const HERO_TITLE = "WELCOME ITZFIZZ";

const METRICS = [
  { value: "58%", label: "Increase in pickup use" },
  { value: "27%", label: "Higher customer engagement" },
  { value: "23%", label: "Reduced support calls" },
  { value: "40%", label: "Operational efficiency gain" },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".headline-char, .stat-card, .hero-visual", {
          clearProps: "all",
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
            },
          })
          .from(".headline-char", {
            yPercent: 125,
            opacity: 0,
            duration: 0.7,
            stagger: 0.045,
          })
          .from(
            ".stat-card",
            {
              y: 22,
              opacity: 0,
              duration: 0.6,
              stagger: 0.12,
            },
            "-=0.35",
          )
          .from(
            ".hero-visual",
            {
              y: 18,
              opacity: 0,
              scale: 0.98,
              duration: 0.6,
            },
            "-=0.45",
          );

        if (!heroRef.current || !visualRef.current) return;

        gsap.set(visualRef.current, {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        });

        gsap.to(visualRef.current, {
          x: () => {
            if (!visualRef.current) return window.innerWidth;

            const parent = visualRef.current.parentElement;
            if (!parent) return window.innerWidth;

            const laneWidth = parent.clientWidth;
            const carWidth = visualRef.current.offsetWidth;

            return Math.max(0, laneWidth - carWidth);
          },
          y: 0,
          rotate: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-slate-950 text-slate-50">
      <section ref={heroRef} id="hero" className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.18),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(56,189,248,0.12),transparent_45%),linear-gradient(180deg,#020617_0%,#0f172a_60%,#020617_100%)]" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center px-6 pb-32 pt-16 md:pb-36 md:pt-20">
            <p className="mb-8 text-center text-xs uppercase tracking-[0.55em] text-cyan-300/80">
              Impact at a Glance
            </p>

            <h1 className="mb-12 text-center text-[clamp(1rem,5.2vw,4rem)] font-semibold whitespace-nowrap tracking-[0.16em] sm:tracking-[0.2em] md:tracking-[0.3em]">
              {HERO_TITLE.split("").map((char, index) => (
                <span
                  key={index}
                  className="headline-char inline-block"
                  style={{ willChange: "transform, opacity" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((item) => (
                <article
                  key={item.label}
                  className="stat-card rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur"
                  style={{ willChange: "transform, opacity" }}
                >
                  <p className="text-3xl font-semibold text-cyan-300">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div
            ref={visualRef}
            className="hero-visual pointer-events-none absolute bottom-0 left-0 z-0 h-24 w-64 md:h-36 md:w-[28rem]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="hero-glow absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl" />
            <Image
              src={carImage}
              alt="Main hero visual"
              fill
              priority
              sizes="(max-width: 768px) 18rem, 28rem"
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
