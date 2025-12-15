import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ title, subtitle, children, className, dark = false }: SectionProps) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      dark ? "bg-muted" : "bg-background",
      className
    )}>
      <div className="container">
        {(title || subtitle) && (
          <div className="max-w-2xl mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
