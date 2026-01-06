/**
 * Gallery - Grid responsivo para galeria de imagens
 */

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface GalleryImage {
  readonly src: string;
  readonly alt: string;
}

interface GalleryProps {
  images: readonly GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function Gallery({ images, columns = 4, className }: GalleryProps) {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const colsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid grid-cols-1 gap-4", colsClass[columns], className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={cn(
              "object-cover transition-all duration-500",
              "group-hover:scale-110",
              !loaded[index] && "opacity-0",
              loaded[index] && "opacity-100"
            )}
            onLoad={() => setLoaded({ ...loaded, [index]: true })}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
