import { Linkedin, User } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  program: string;
  bio: string;
  linkedin?: string;
  image?: string | null;
}

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group rounded-xl bg-card border border-border hover:border-secondary overflow-hidden transition-all duration-300">
      {/* Avatar */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <User className="w-16 h-16 text-muted-foreground/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg group-hover:text-secondary transition-colors">
          {member.name}
        </h3>
        <p className="text-secondary text-sm font-medium mb-1">{member.role}</p>
        <p className="text-muted-foreground text-xs mb-3">{member.program}</p>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{member.bio}</p>
        
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
