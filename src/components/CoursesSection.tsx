import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { coursesSectionContent, featuredCoursesData } from "@/data/featuredCoursesData";

const CoursesSection = () => {
  const { subtitle, title } = coursesSectionContent;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider text-center">
          {subtitle}
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mt-2 mb-12">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCoursesData.map((c) => (
            <div key={c.id} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group">
              <div className="relative overflow-hidden">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground font-heading text-xs">
                  {c.badge}
                </Badge>
              </div>
              <div className="p-5">
                {/* line-clamp-1 ensures long titles from courses.ts don't break your layout */}
                <h3 className="font-heading font-semibold text-foreground mb-1 line-clamp-1" title={c.title}>
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Next Batch: <span className="font-medium">{c.date}</span>
                </p>
                <Button variant="secondary" size="sm" className="w-full font-heading font-semibold">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;