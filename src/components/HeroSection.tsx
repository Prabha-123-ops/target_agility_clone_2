import { Button } from "@/components/ui/button";
import heroPerson from "@/assets/hero-person.png";
import { heroContent, certCardsData } from "@/data/heroData";

const HeroSection = () => {
  const { headingMain, headingHighlight, imageAlt } = heroContent;

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              {headingMain}{" "}
              <span className="text-secondary">{headingHighlight}</span>
            </h1>

            <div className="space-y-4">
              {certCardsData.map((card) => (
                <div
                  key={card.title}
                  className="bg-card rounded-lg shadow-md p-5 flex items-center gap-4 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">Next Batch on: {card.batch}</p>
                    <Button variant="secondary" size="sm" className="mt-2 font-heading text-xs font-semibold">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full bg-secondary/80" />
            </div>
            <div className="absolute inset-0 bg-primary/90 clip-triangle" />
            <img
              src={heroPerson}
              alt={imageAlt}
              className="relative z-10 h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      <style>{`
        .clip-triangle {
          clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 60% 100%);
          border-radius: 0 0 2rem 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;