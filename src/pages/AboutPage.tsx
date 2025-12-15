import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Users, 
  Briefcase, 
  Trophy, 
  GraduationCap,
  Rocket,
  Calendar,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const whatMembersGet = [
  {
    icon: Users,
    title: "Networking",
    description: "Connect with fellow students, alumni, and industry professionals in aerospace."
  },
  {
    icon: Briefcase,
    title: "Industry Access",
    description: "Exclusive facility tours, guest speakers, and career development opportunities."
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Participate in national AIAA design competitions and showcase your skills."
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Learn from experienced students and professionals in your area of interest."
  },
];

const whatWeDo = [
  {
    icon: Calendar,
    title: "Events & Workshops",
    description: "We host regular events including technical workshops, industry talks, networking mixers, and social gatherings. From CAD tutorials to propulsion fundamentals, there's always something to learn.",
    highlights: ["15+ events per term", "Hands-on learning", "Industry speakers"]
  },
  {
    icon: Rocket,
    title: "Projects & Competitions",
    description: "Our project teams tackle real engineering challenges, from aircraft design competitions to high-power rocketry. These experiences build practical skills that employers value.",
    highlights: ["AIAA Design Competition", "Spaceport America Cup", "Autonomous systems"]
  },
  {
    icon: Globe,
    title: "Outreach & Community",
    description: "We're passionate about inspiring the next generation. Our outreach programs connect with high school students and community groups to share the excitement of aerospace.",
    highlights: ["High school visits", "STEM workshops", "Open houses"]
  },
  {
    icon: Briefcase,
    title: "Industry Connections",
    description: "Through partnerships with leading aerospace companies, we provide direct access to the industry. Resume reviews, mock interviews, and networking events help prepare you for your career.",
    highlights: ["Facility tours", "Career panels", "Internship connections"]
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="About AIAA TMU"
        description="We're a community of aerospace enthusiasts at Toronto Metropolitan University, dedicated to learning, building, and inspiring."
      />

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-card-gradient border border-border">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide TMU students with opportunities to explore aerospace engineering 
              through hands-on projects, industry connections, and a supportive community. 
              We bridge the gap between classroom learning and real-world application.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-card-gradient border border-border">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading student aerospace organization in Canada, recognized for 
              developing innovative projects, fostering industry partnerships, and 
              producing the next generation of aerospace leaders.
            </p>
          </div>
        </div>
      </Section>

      {/* What is AIAA */}
      <Section dark title="What is AIAA?">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            The <strong className="text-foreground">American Institute of Aeronautics and Astronautics (AIAA)</strong> is 
            the world's largest aerospace professional society. With over 30,000 members globally, 
            AIAA brings together engineers, scientists, and professionals dedicated to advancing 
            aerospace.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            As a student branch, AIAA TMU connects you to this global network while providing 
            local opportunities for learning and growth. Being part of AIAA means access to 
            resources, publications, conferences, and a community that spans the entire 
            aerospace industry.
          </p>
          <a href="https://www.aiaa.org" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              Learn More About AIAA
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </Section>

      {/* What Members Get */}
      <Section
        title="What Members Get"
        subtitle="Being part of AIAA TMU opens doors to experiences that shape your career."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatMembersGet.map((item, index) => (
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

      {/* What We Do */}
      <Section dark title="What We Do" subtitle="Our activities span across four main pillars.">
        <div className="space-y-8">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card-gradient border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-accent">
                        <CheckCircle className="w-4 h-4" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section title="Our Values">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: "Passion",
              description: "We're driven by a genuine love for aerospace and a desire to push boundaries."
            },
            {
              icon: Users,
              title: "Inclusivity",
              description: "Everyone belongs here. We welcome students from all programs and experience levels."
            },
            {
              icon: Rocket,
              title: "Innovation",
              description: "We embrace new ideas and encourage creative problem-solving in everything we do."
            },
          ].map((value, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-card-gradient border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-muted-foreground mb-8">
            Whether you're an aspiring astronaut or just curious about aerospace, there's a place for you at AIAA TMU.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join">
              <Button variant="cta" size="lg">
                Become a Member
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/team">
              <Button variant="outline" size="lg">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
