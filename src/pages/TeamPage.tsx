import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Megaphone } from "lucide-react";
import teamData from "@/content/team.json";

const openRoles = [
  {
    title: "Events Coordinator Assistant",
    description: "Help plan and execute club events, from logistics to promotion.",
    commitment: "3-5 hours/week",
  },
  {
    title: "Social Media Manager",
    description: "Create engaging content for our social media channels.",
    commitment: "2-4 hours/week",
  },
  {
    title: "Project Team Member",
    description: "Join one of our technical project teams and gain hands-on experience.",
    commitment: "5-10 hours/week",
  },
  {
    title: "Workshop Facilitator",
    description: "Lead technical workshops on topics you're passionate about.",
    commitment: "Flexible",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Our Team"
        description="Meet the passionate students who make AIAA TMU happen. We're always looking for new faces to join our executive team."
      />

      {/* Executive Team */}
      <Section
        title="Executive Team"
        subtitle="The dedicated leaders driving our mission forward."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      {/* Get Involved */}
      <Section dark title="Get Involved" subtitle="There are many ways to contribute to AIAA TMU.">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-card-gradient border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Join a Project Team</h3>
            <p className="text-muted-foreground text-sm">
              Work on real engineering projects with hands-on experience in design, analysis, and manufacturing.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card-gradient border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Volunteer at Events</h3>
            <p className="text-muted-foreground text-sm">
              Help run our events and workshops. A great way to meet people and contribute to the community.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card-gradient border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Megaphone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Join the Executive Team</h3>
            <p className="text-muted-foreground text-sm">
              Take on a leadership role and help shape the direction of AIAA TMU.
            </p>
          </div>
        </div>

        {/* Open Roles */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-6">Open Roles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <h4 className="font-display font-semibold mb-1">{role.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{role.description}</p>
                <p className="text-xs text-accent">Commitment: {role.commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-muted-foreground mb-8">
            Whether you want to lead a project or just help out at an event, there's a place for you on our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join">
              <Button variant="hero" size="lg">
                Apply Now
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
      </Section>

      <Footer />
    </div>
  );
}
