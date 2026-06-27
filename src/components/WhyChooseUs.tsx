import { whyChooseUsContent, benefitsData } from "../data/whyChooseUsData";

const WhyChooseUs = () => {
  const { subtitle, title, description, linkText, linkUrl } = whyChooseUsContent;

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
              {subtitle}
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
            <a href={linkUrl} className="text-secondary font-heading font-semibold hover:underline">
              {linkText}
            </a>
          </div>

          {/* Right Column: Benefits List */}
          <div className="space-y-4">
            {benefitsData.map((b, i) => (
              <div key={i} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <b.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-foreground font-body">{b.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;