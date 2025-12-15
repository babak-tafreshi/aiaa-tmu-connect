import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SponsorGrid } from "@/components/SponsorGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Mail, 
  Download, 
  Users, 
  Megaphone, 
  Award,
  ArrowRight
} from "lucide-react";
import sponsorsData from "@/content/sponsors.json";
import config from "@/content/config.json";

const sponsorshipTiers = [
  {
    name: "Bronze",
    price: "$500",
    benefits: [
      "Logo on website",
      "Social media recognition",
      "Newsletter mentions",
    ],
  },
  {
    name: "Silver",
    price: "$1,000",
    benefits: [
      "All Bronze benefits",
      "Logo on event materials",
      "Networking opportunities",
      "Company profile feature",
    ],
  },
  {
    name: "Gold",
    price: "$2,500",
    benefits: [
      "All Silver benefits",
      "Dedicated speaking slot",
      "Recruitment access",
      "Workshop sponsorship",
      "Priority logo placement",
    ],
  },
  {
    name: "Title",
    price: "$5,000+",
    benefits: [
      "All Gold benefits",
      "Exclusive naming rights",
      "Executive networking dinner",
      "Year-round brand presence",
      "First choice of events",
      "Custom partnership opportunities",
    ],
  },
];

const whySponsor = [
  {
    icon: Users,
    title: "Access Top Talent",
    description: "Connect with motivated engineering students who are passionate about aerospace and ready to make an impact.",
  },
  {
    icon: Megaphone,
    title: "Brand Visibility",
    description: "Get your brand in front of hundreds of students through our events, social media, and marketing materials.",
  },
  {
    icon: Award,
    title: "Support Innovation",
    description: "Enable hands-on projects and competitions that develop the next generation of aerospace professionals.",
  },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Our Sponsors"
        description="We're grateful for the organizations that support our mission to inspire and educate future aerospace professionals."
      />

      {/* Current Sponsors */}
      <Section
        title="Thank You to Our Sponsors"
        subtitle="These organizations make our work possible."
      >
        <SponsorGrid sponsors={sponsorsData} showTiers />
      </Section>

      {/* Why Sponsor */}
      <Section dark title="Why Sponsor AIAA TMU?" subtitle="Partner with us and make a lasting impact.">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {whySponsor.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-card-gradient border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-display font-bold mb-6 text-center">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-display font-bold text-gradient">{config.stats.members}</p>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gradient">{config.stats.eventsPerTerm}</p>
              <p className="text-sm text-muted-foreground">Events Per Term</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gradient">2,000+</p>
              <p className="text-sm text-muted-foreground">Social Reach</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gradient">5+</p>
              <p className="text-sm text-muted-foreground">Partner Companies</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Sponsorship Tiers */}
      <Section title="Sponsorship Tiers" subtitle="Choose a partnership level that works for you.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorshipTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                tier.name === "Gold"
                  ? "bg-card-gradient border-accent/30 relative"
                  : "bg-card border-border hover:border-accent/20"
              }`}
            >
              {tier.name === "Gold" && (
                <Badge variant="accent" className="absolute -top-3 left-4">Popular</Badge>
              )}
              <h3 className="font-display font-bold text-xl mb-2">{tier.name}</h3>
              <p className="text-2xl font-display font-bold text-gradient mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/sponsorship-package.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4" />
              Download Sponsorship Package
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            (PDF placeholder - contact us for the actual package)
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold mb-4">Become a Sponsor</h2>
          <p className="text-muted-foreground mb-8">
            Interested in partnering with AIAA TMU? We'd love to discuss how we can work together.
          </p>
          <a href={`mailto:${config.contactEmail}?subject=Sponsorship Inquiry`}>
            <Button variant="hero" size="lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
