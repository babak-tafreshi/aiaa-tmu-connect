import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  speakers?: string[];
  rsvpLink?: string | null;
  tags?: string[];
  status: string;
  featured?: boolean;
}

interface EventCardProps {
  event: Event;
  variant?: "default" | "featured" | "compact";
}

const categoryColors: Record<string, "accent" | "success" | "warning" | "default" | "primary"> = {
  Talk: "primary",
  Workshop: "success",
  Tour: "warning",
  Social: "default",
};

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  if (variant === "compact") {
    return (
      <Link
        to={`/events/${event.id}`}
        className="group block p-4 rounded-xl bg-card border border-border hover:border-secondary transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-muted flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">
              {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
            </span>
            <span className="text-lg font-bold font-display text-primary">
              {new Date(event.date).getDate()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant={categoryColors[event.category] || "default"} size="sm" className="mb-2">
              {event.category}
            </Badge>
            <h3 className="font-display font-semibold group-hover:text-secondary transition-colors truncate">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{event.location}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        to={`/events/${event.id}`}
        className="group block rounded-2xl bg-card border border-border hover:border-secondary overflow-hidden transition-all duration-300"
      >
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="absolute top-4 left-4">
            <Badge variant={categoryColors[event.category] || "default"}>
              {event.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-bold mb-3 group-hover:text-secondary transition-colors">
            {event.title}
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {event.description}
          </p>
          <div className="flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <div className="group rounded-xl bg-card border border-border hover:border-secondary overflow-hidden transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <Badge variant={categoryColors[event.category] || "default"} className="mb-3">
              {event.category}
            </Badge>
            <h3 className="text-lg font-display font-semibold group-hover:text-secondary transition-colors">
              {event.title}
            </h3>
          </div>
          {event.status === "past" && (
            <Badge variant="outline">Past</Badge>
          )}
        </div>
        
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 flex-shrink-0 text-primary" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {event.description}
        </p>

        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag) => (
              <Badge key={tag} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <Link to={`/events/${event.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          {event.rsvpLink && event.status === "upcoming" && (
            <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
              <Button variant="default">RSVP</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
