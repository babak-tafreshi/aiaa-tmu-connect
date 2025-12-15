import { Building } from "lucide-react";

interface Sponsor {
  id: string;
  name: string;
  tier: string;
  logo?: string | null;
  website: string;
}

interface SponsorGridProps {
  sponsors: Sponsor[];
  showTiers?: boolean;
}

const tierOrder = ["Title", "Gold", "Silver", "Bronze"];

export function SponsorGrid({ sponsors, showTiers = false }: SponsorGridProps) {
  if (showTiers) {
    const groupedSponsors = tierOrder.reduce((acc, tier) => {
      acc[tier] = sponsors.filter((s) => s.tier === tier);
      return acc;
    }, {} as Record<string, Sponsor[]>);

    return (
      <div className="space-y-12">
        {tierOrder.map((tier) => {
          const tierSponsors = groupedSponsors[tier];
          if (!tierSponsors || tierSponsors.length === 0) return null;

          return (
            <div key={tier}>
              <h3 className="text-lg font-display font-semibold mb-6 text-muted-foreground">
                {tier} Sponsors
              </h3>
              <div className={`grid gap-6 ${
                tier === "Title" ? "grid-cols-1 md:grid-cols-2" :
                tier === "Gold" ? "grid-cols-2 md:grid-cols-3" :
                "grid-cols-2 md:grid-cols-4"
              }`}>
                {tierSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} size={tier === "Title" ? "large" : tier === "Gold" ? "medium" : "small"} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} size="small" inline />
      ))}
    </div>
  );
}

interface SponsorCardProps {
  sponsor: Sponsor;
  size?: "small" | "medium" | "large";
  inline?: boolean;
}

function SponsorCard({ sponsor, size = "medium", inline = false }: SponsorCardProps) {
  const sizeClasses = {
    small: "h-16 px-6",
    medium: "h-20 px-8",
    large: "h-24 px-10",
  };

  if (inline) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
        title={sponsor.name}
      >
        {sponsor.logo ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="h-full w-auto object-contain"
          />
        ) : (
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground">
            <Building className="w-5 h-5" />
            <span className="font-display font-medium text-sm">{sponsor.name}</span>
          </div>
        )}
      </a>
    );
  }

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center rounded-xl bg-background border border-border hover:border-secondary transition-all duration-300 ${sizeClasses[size]}`}
    >
      {sponsor.logo ? (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="h-2/3 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
          <Building className={size === "large" ? "w-8 h-8" : size === "medium" ? "w-6 h-6" : "w-5 h-5"} />
          <span className={`font-display font-medium ${size === "large" ? "text-lg" : size === "medium" ? "text-base" : "text-sm"}`}>
            {sponsor.name}
          </span>
        </div>
      )}
    </a>
  );
}
