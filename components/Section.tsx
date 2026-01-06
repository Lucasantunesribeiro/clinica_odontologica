/**
 * Section - Componente wrapper premium para seções da página
 */

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "muted" | "gradient";
  padding?: "default" | "sm" | "none";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  padding = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    gradient: "gradient-subtle",
  };

  const paddingClasses = {
    default: "section-padding",
    sm: "section-padding-sm",
    none: "",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative",
        bgClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className={cn("container-premium", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-block", centered && "mx-auto")}>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-serif text-foreground">{title}</h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
