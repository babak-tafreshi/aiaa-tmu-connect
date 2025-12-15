import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Clock, ArrowRight, Lightbulb } from "lucide-react";
import projectsData from "@/content/projects.json";

export default function ProjectsPage() {
  const activeProjects = projectsData.filter((p) => p.status === "Active");
  const completedProjects = projectsData.filter((p) => p.status === "Completed");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Projects"
        description="Get hands-on experience with real engineering challenges. Our project teams tackle everything from aircraft design to autonomous systems."
      />

      {/* Active Projects */}
      <Section
        title="Active Projects"
        subtitle="Join a team and start building your skills today."
      >
        <div className="space-y-8">
          {activeProjects.map((project) => (
            <ProjectDetail key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <Section dark title="Completed Projects" subtitle="Past projects that showcase our capabilities.">
          <div className="grid md:grid-cols-2 gap-6">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl bg-card-gradient border border-border"
              >
                <Badge variant="outline" className="mb-4">Completed</Badge>
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Propose a Project */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Have a Project Idea?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for innovative project proposals. If you have an idea that excites you, 
            we want to hear about it. We'll help you build a team and bring it to life.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Propose a Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

interface ProjectDetailProps {
  project: typeof projectsData[0];
}

function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div
      id={project.id}
      className="p-8 rounded-2xl bg-card-gradient border border-border scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Image placeholder */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="aspect-video lg:aspect-square rounded-xl bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 bg-glow opacity-20" />
            <div className="absolute top-4 left-4">
              <Badge variant="success">{project.status}</Badge>
            </div>
            {project.openPositions > 0 && (
              <div className="absolute top-4 right-4">
                <Badge variant="accent">{project.openPositions} Open</Badge>
              </div>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1">
          <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="mb-6">
            <h4 className="font-display font-semibold mb-2">Objective</h4>
            <p className="text-muted-foreground text-sm">{project.objective}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-semibold mb-3">Skills Involved</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="outline" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3">Team Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Team Size: {project.teamSize} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Timeline: {project.timeline}</span>
                </div>
              </div>
            </div>
          </div>

          {project.openPositions > 0 && (
            <Link to="/join">
              <Button variant="default">
                Join This Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
