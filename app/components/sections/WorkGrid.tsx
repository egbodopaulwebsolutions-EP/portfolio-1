"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../utilities/container";
import { useGridHoverScrollWithTouch } from "../../gsaphooks/useGridHoverScrollwithTouch";

type GalleryItem = {
  slug: string;
  hero: string;
  size?: "small" | "medium" | "tall";
};

const HEIGHT_MAP: Record<string, number> = {
  small: 180,
  medium: 260,
  tall: 380,
};

export default function WorkGridSection({
  galleryItems,
}: {
  galleryItems: GalleryItem[];
}) {
  const [itemHeights, setItemHeights] = useState<Record<string, number>>({});
  const gridRef = useGridHoverScrollWithTouch({ clamp: 90 });

  useEffect(() => {
    galleryItems.forEach(async (item) => {
      const preset = item.size && HEIGHT_MAP[item.size];
      if (preset) {
        setItemHeights((prev) => ({ ...prev, [item.slug]: preset }));
        return;
      }

      const height = await autoHeight(item.hero);
      setItemHeights((prev) => ({ ...prev, [item.slug]: height }));
    });
  }, [galleryItems]);

  return (
    <section className="relative">

      {/* Viewport mask */}
      <div className="relative overflow-hidden">
        {/* Scroll track */}
        <div
          ref={gridRef}
          className="
            relative
            w-[130vw]
            mx-auto
            -pl-[20vw]
            columns-4
            md:columns-4
            lg:columns-4
            gap-3
          "
        >
          {galleryItems.map((item) => {
            const height = itemHeights[item.slug] ?? 260;

            return (
              <motion.figure
                key={item.slug}
                style={{ height }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="
                  relative
                  mb-3
                  overflow-hidden
                  rounded-sm
                  bg-neutral-900
                "
              >
                {isVideo(item.hero) ? (
                  <video
                    src={item.hero}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.hero}
                    alt=""
                    fill
                    className="object-cover"
                  />
                )}
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------
   Helpers
----------------------------------------- */

function isVideo(src: string) {
  return src.endsWith(".webm") || src.endsWith(".mp4");
}

function autoHeight(src: string): Promise<number> {
  if (typeof window === "undefined") return Promise.resolve(260);

  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.onload = () => {
      const ratio = img.naturalHeight / img.naturalWidth || 1;
      resolve(260 * ratio);
    };
    img.onerror = () => resolve(260);
    img.src = src;
  });
}
