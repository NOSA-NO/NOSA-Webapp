"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import type { StartSlide } from "@/types/nosa";

export function StartExperience({ slides }: { slides: StartSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = useMemo(() => slides[index], [index, slides]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[60vh]"
        >
          {slide.mediaType === "video" ? (
            <video
              src={slide.mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={slide.mediaSrc}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
          <div className="relative flex min-h-[60vh] flex-col justify-end gap-4 p-6 md:p-10">
            <p className="max-w-2xl text-3xl font-bold text-slate-50 md:text-5xl">{slide.title}</p>
            <p className="max-w-2xl text-base text-slate-200 md:text-lg">{slide.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={slide.href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Jetzt ansehen
              </Link>
              <Button
                variant="outline"
                onClick={() => setIndex((current) => (current + 1) % slides.length)}
              >
                Nächster Bereich
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
