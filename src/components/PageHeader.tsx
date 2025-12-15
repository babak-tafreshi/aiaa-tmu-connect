import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-primary animate-slide-up">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground animate-slide-up animation-delay-100">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-slide-up animation-delay-200">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
