import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Wrench, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  status: string;
  description: string;
  objective: string;
  skills: string[];
  teamSize: number;
  openPositions: number;
  timeline: string;
  image?: string | null;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusVariant = project.status === "Active" ? "success" : "default";

  return (
    <div className="group rounded-xl bg-card-gradient border border-border hover:border-accent/30 overflow-hidden transition-all duration-300 hover:shadow-card">
      {/* Image */}
      <div className="aspect-video bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-20" />
        <div className="absolute top-4 left-4">
          <Badge variant={statusVariant}>{project.status}</Badge>
        </div>
        {project.openPositions > 0 && (
          <div className="absolute top-4 right-4">
            <Badge variant="accent">{project.openPositions} Open Spots</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{project.teamSize} members</span>
          </div>
          <div className="flex items-center gap-1">
            <Wrench className="w-4 h-4" />
            <span>{project.skills.length} skills</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="outline" size="sm">
              {skill}
            </Badge>
          ))}
          {project.skills.length > 4 && (
            <Badge variant="outline" size="sm">
              +{project.skills.length - 4} more
            </Badge>
          )}
        </div>

        <Link to={`/projects#${project.id}`}>
          <Button variant="secondary" className="w-full group/btn">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
