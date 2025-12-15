import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ icon: Icon, value, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "group p-6 rounded-xl bg-card-gradient border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-card",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <p className="text-3xl font-display font-bold text-gradient">{value}</p>
          <p className="text-sm text-muted-foreground mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
}
