import aboutHero from "@/assets/about-hero.png";
import { aboutContent, statsData, achievementsData } from "@/data/aboutData";

const About = () => {
  const { hero, welcome, journey, achievementsTitle, cta } = aboutContent;

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-2">
                {hero.subtitle}
              </h4>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary">
                {hero.title}
              </h1>
            </div>
            <div className="hidden lg:flex justify-end">
              <img
                src={aboutHero}
                alt={`${hero.subtitle} team collaborating`}
                className="h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background rounded-t-[3rem]" />
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            {welcome.title}
          </h2>
          {welcome.paragraphs.map((text, index) => (
            <p key={index} className={`text-muted-foreground leading-relaxed ${index === 0 ? "mb-4" : ""}`}>
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* Our Journey + Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            {journey.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            {journey.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((s) => (
              <div key={s.label} className="bg-card rounded-lg p-6 border border-border shadow-sm">
                <p className="font-heading font-bold text-3xl text-secondary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            {achievementsTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((a) => (
              <div
                key={a.title}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <a.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-heading text-lg text-primary-foreground/80 leading-relaxed mb-6">
            {cta.description}
          </p>
          <a
            href={cta.buttonLink}
            className="inline-block bg-secondary text-secondary-foreground font-heading font-semibold px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors"
          >
            {cta.buttonText}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;