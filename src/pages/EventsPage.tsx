import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowLeft, ExternalLink } from "lucide-react";
import eventsData from "@/content/events.json";

const categories = ["All", "Talk", "Workshop", "Tour", "Social"];
const statusFilters = ["All", "Upcoming", "Past"];

export default function EventsPage() {
  const { eventId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("Upcoming");

  // If viewing a specific event
  if (eventId) {
    const event = eventsData.find((e) => e.id === eventId);
    if (!event) {
      return (
        <div className="min-h-screen bg-background">
          <Navbar />
          <Section>
            <div className="text-center py-20">
              <h1 className="text-3xl font-display font-bold mb-4">Event Not Found</h1>
              <p className="text-muted-foreground mb-8">This event doesn't exist or has been removed.</p>
              <Link to="/events">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Events
                </Button>
              </Link>
            </div>
          </Section>
          <Footer />
        </div>
      );
    }

    return <EventDetailPage event={event} />;
  }

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const categoryMatch = selectedCategory === "All" || event.category === selectedCategory;
      const statusMatch = 
        selectedStatus === "All" || 
        (selectedStatus === "Upcoming" && event.status === "upcoming") ||
        (selectedStatus === "Past" && event.status === "past");
      return categoryMatch && statusMatch;
    });
  }, [selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Events"
        description="From industry talks to hands-on workshops, there's always something happening at AIAA TMU."
      />

      <Section>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No events found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStatus("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
}

interface EventDetailProps {
  event: typeof eventsData[0];
}

function EventDetailPage({ event }: EventDetailProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const categoryColors: Record<string, "accent" | "success" | "warning" | "default"> = {
    Talk: "accent",
    Workshop: "success",
    Tour: "warning",
    Social: "default",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Section className="pt-8">
        <Link to="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={categoryColors[event.category] || "default"}>
                {event.category}
              </Badge>
              {event.status === "past" && <Badge variant="outline">Past Event</Badge>}
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{event.title}</h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {event.description}
            </p>

            {event.speakers && event.speakers.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4">Speakers</h2>
                <div className="space-y-3">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                      <Users className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{speaker}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event.tags && event.tags.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold mb-4">Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="lg">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 p-6 rounded-xl bg-card-gradient border border-border">
              <h2 className="font-display font-semibold mb-6">Event Details</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{formattedDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
              </div>

              {event.rsvpLink && event.status === "upcoming" && (
                <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="cta" className="w-full">
                    RSVP Now
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}

              {event.status === "past" && (
                <p className="text-center text-muted-foreground text-sm">
                  This event has already taken place.
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
