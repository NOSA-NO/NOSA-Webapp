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
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = useMemo(() => slides[index], [index, slides]);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-nosa-border bg-nosa-surface">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="relative min-h-[58vh]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-nosa-bg via-nosa-bg/45 to-transparent" />
          <div className="relative flex min-h-[58vh] flex-col justify-end gap-4 p-6 md:p-10">
            <p className="max-w-2xl text-3xl font-semibold text-foreground md:text-5xl">{slide.title}</p>
            <p className="max-w-2xl text-base text-nosa-muted md:text-lg">{slide.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={slide.href}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-nosa-accent px-5 text-sm font-semibold text-nosa-bg transition hover:bg-teal-300"
              >
                Bereich öffnen
              </Link>
              <Button
                variant="outline"
                onClick={() => setIndex((current) => (current + 1) % slides.length)}
              >
                Nächste Kachel
              </Button>
            </div>
            <div className="mt-2 flex gap-2">
              {slides.map((entry, slideIndex) => (
                <button
                  key={entry.id}
                  type="button"
                  aria-label={`Zu ${entry.title}`}
                  onClick={() => setIndex(slideIndex)}
                  className={`h-1.5 rounded-full transition ${
                    slideIndex === index ? "w-8 bg-nosa-accent" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
