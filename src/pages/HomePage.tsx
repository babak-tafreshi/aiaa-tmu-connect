import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { StatCard } from "@/components/StatCard";
import { SponsorGrid } from "@/components/SponsorGrid";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  Briefcase, 
  Rocket, 
  ArrowRight, 
  Mail,
  Plane,
  Satellite,
  ChevronRight
} from "lucide-react";
import config from "@/content/config.json";
import eventsData from "@/content/events.json";
import newsData from "@/content/news.json";
import sponsorsData from "@/content/sponsors.json";

export default function HomePage() {
  const featuredEvents = eventsData.filter((e) => e.featured && e.status === "upcoming").slice(0, 3);
  const latestNews = newsData.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-glow opacity-40" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 right-[15%] animate-float">
          <Satellite className="w-16 h-16 text-accent/20" />
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float animation-delay-200">
          <Plane className="w-12 h-12 text-accent/15 rotate-12" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <Badge variant="accent" size="lg" className="mb-6 animate-slide-up">
              <Rocket className="w-3.5 h-3.5 mr-1" />
              Toronto Metropolitan University
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up animation-delay-100">
              AIAA TMU{" "}
              <span className="text-gradient">Student Branch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up animation-delay-200">
              Inspiring the next generation of aerospace professionals through hands-on projects, 
              industry connections, and a passionate community.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
              <Link to="/join">
                <Button variant="hero" size="xl">
                  Join AIAA TMU
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="hero-outline" size="xl">
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <Section className="-mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={Users}
            value={config.stats.members}
            label="Active Members"
          />
          <StatCard
            icon={Calendar}
            value={config.stats.eventsPerTerm}
            label="Events Per Term"
          />
          <StatCard
            icon={Briefcase}
            value={config.stats.industryTalks}
            label="Industry Talks"
          />
          <StatCard
            icon={Rocket}
            value={config.stats.activeProjects}
            label="Active Projects"
          />
        </div>
      </Section>

      {/* Featured Events */}
      <Section
        title="Upcoming Events"
        subtitle="Join us for workshops, industry talks, facility tours, and networking events."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="featured" />
          ))}
        </div>
        <div className="text-center">
          <Link to="/events">
            <Button variant="outline" size="lg">
              View All Events
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* What We Do */}
      <Section dark title="What We Do" subtitle="Building the future of aerospace, one project at a time.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Calendar,
              title: "Events & Workshops",
              description: "Technical workshops, guest lectures, and hands-on learning opportunities.",
            },
            {
              icon: Rocket,
              title: "Design Competitions",
              description: "Compete nationally in AIAA design challenges and showcase your skills.",
            },
            {
              icon: Briefcase,
              title: "Industry Connections",
              description: "Network with aerospace professionals and explore career opportunities.",
            },
            {
              icon: Users,
              title: "Community",
              description: "Join a passionate group of students united by their love for aerospace.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card-gradient border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Latest News */}
      <Section
        title="Latest News"
        subtitle="Stay updated with announcements and recaps from AIAA TMU."
      >
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {latestNews.map((news) => (
            <Link
              key={news.id}
              to={`/news#${news.id}`}
              className="group block p-6 rounded-xl bg-card-gradient border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" size="sm">
                  {news.tags[0]}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {new Date(news.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {news.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{news.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link to="/news">
            <Button variant="outline">
              View All News
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Sponsors */}
      <Section dark>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Our Sponsors</h2>
          <p className="text-muted-foreground">
            Proudly supported by leading aerospace organizations.
          </p>
        </div>
        <SponsorGrid sponsors={sponsorsData} />
        <div className="text-center mt-10">
          <Link to="/sponsors">
            <Button variant="outline">
              Become a Sponsor
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest updates on events, projects, and opportunities delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <Button variant="hero" className="h-12">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-accent-gradient opacity-10" />
          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Take Off?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join AIAA TMU and be part of a community that's shaping the future of aerospace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join">
                <Button variant="hero" size="lg">
                  Join AIAA TMU
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
