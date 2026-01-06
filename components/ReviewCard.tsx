/**
 * ReviewCard - Card de depoimento estilizado
 */

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/content";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <Card className="h-full card-hover border-muted/50">
      <CardHeader className="space-y-3">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        {/* Name and treatment */}
        <div>
          <h4 className="font-sans text-base font-semibold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.treatment}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="font-sans text-sm leading-relaxed text-foreground/90">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {testimonial.location && (
            <>
              <span>{testimonial.location}</span>
              <span>•</span>
            </>
          )}
          <span>{testimonial.date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
