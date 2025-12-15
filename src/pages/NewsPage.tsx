import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import newsData from "@/content/news.json";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="News & Announcements"
        description="Stay updated with the latest from AIAA TMU. Announcements, recaps, and community updates."
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          {newsData.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="p-8 rounded-2xl bg-card-gradient border border-border scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {article.featured && <Badge variant="accent">Featured</Badge>}
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
                <span className="text-sm text-muted-foreground">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-display font-bold mb-4">{article.title}</h2>
              
              <div className="prose prose-invert max-w-none">
                {article.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Posted by <span className="text-foreground">{article.author}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
