import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  Rocket, 
  Users, 
  Calendar, 
  Briefcase,
  Star,
  HelpCircle
} from "lucide-react";
import config from "@/content/config.json";

const membershipSteps = [
  {
    step: 1,
    title: "Join AIAA TMU Student Branch",
    description: "Sign up to become a member of our local student branch. This is free and gives you access to all club events and activities.",
    action: "Sign Up",
    actionLink: "#signup-form",
  },
  {
    step: 2,
    title: "Optional: AIAA National Membership",
    description: "For additional benefits like access to AIAA publications, conferences, and the global network, consider joining AIAA nationally.",
    action: "Learn More",
    actionLink: "https://www.aiaa.org/membership",
    external: true,
  },
  {
    step: 3,
    title: "Get Involved",
    description: "Attend events, join a project team, or volunteer. The more you put in, the more you get out!",
    action: "View Events",
    actionLink: "/events",
  },
];

const faqItems = [
  {
    question: "Do I need to be in Aerospace Engineering to join?",
    answer: "Not at all! AIAA TMU welcomes students from all programs. Whether you're in mechanical engineering, computer science, business, or any other field, if you're interested in aerospace, you belong here. Our members come from diverse backgrounds, and that diversity makes our teams stronger."
  },
  {
    question: "How much time does it take to be a member?",
    answer: "It's entirely up to you. You can be a casual member who attends the occasional event, or you can dive deep into project teams and leadership roles. Most active members spend 3-5 hours per week, but there's no minimum requirement."
  },
  {
    question: "Can first-year students join?",
    answer: "Absolutely! We encourage first-year students to join early. It's a great way to meet upper-year students, get mentorship, and start building your skills from day one. Many of our project teams specifically welcome newcomers."
  },
  {
    question: "What's the difference between student branch and AIAA national membership?",
    answer: "The student branch membership (free) gives you access to all AIAA TMU events, projects, and our local community. AIAA national membership ($35/year) adds access to professional publications, national conferences, scholarships, and the global AIAA network. Both have value, but you can start with just the student branch."
  },
  {
    question: "Do I need any prior experience?",
    answer: "No experience required! We have opportunities for all skill levels. Our workshops are designed to teach practical skills, and our project teams welcome beginners. What matters is your enthusiasm and willingness to learn."
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Join AIAA TMU"
        description="Become part of a community that's passionate about aerospace. No experience required—just curiosity and drive."
      />

      {/* Benefits */}
      <Section
        title="Membership Benefits"
        subtitle="Here's what you get when you join AIAA TMU."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {config.membershipInfo.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-card-gradient border border-accent/30 relative">
            <Badge variant="accent" className="absolute -top-3 left-6">Recommended</Badge>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-accent" />
              <h3 className="font-display font-bold text-xl">Student Branch</h3>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-display font-bold text-gradient">{config.membershipInfo.studentBranchFee}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Full access to AIAA TMU events, projects, and our local community.
            </p>
            <ul className="space-y-2 mb-6">
              {["All club events", "Project teams", "Workshops", "Industry networking", "Member resources"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="cta" className="w-full">
              Join Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-display font-bold text-xl">AIAA National</h3>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-display font-bold">{config.membershipInfo.aiaaNationalFee}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Enhanced benefits through AIAA's global professional society.
            </p>
            <ul className="space-y-2 mb-6">
              {["Professional publications", "National conferences", "Scholarships", "Career resources", "Global network"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://www.aiaa.org/membership" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* How to Join */}
      <Section dark title="How to Join" subtitle="Getting started is easy. Follow these steps.">
        <div className="space-y-6 max-w-3xl mx-auto">
          {membershipSteps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center font-display font-bold text-accent-foreground">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                {step.external ? (
                  <a href={step.actionLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      {step.action}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                ) : (
                  <Link to={step.actionLink}>
                    <Button variant="outline" size="sm">
                      {step.action}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
      >
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            We're happy to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Ask a Question
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
