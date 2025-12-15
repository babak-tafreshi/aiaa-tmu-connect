import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium font-display transition-colors",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground border border-border",
        // Accent Red for important badges (Upcoming, New, Important)
        accent: "bg-accent text-accent-foreground",
        outline: "border border-border text-muted-foreground",
        success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        warning: "bg-amber-100 text-amber-700 border border-amber-200",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20",
        secondary: "bg-secondary text-secondary-foreground",
        // Primary blue badge
        primary: "bg-primary text-primary-foreground",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
