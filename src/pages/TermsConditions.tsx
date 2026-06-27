import { useEffect } from "react";
import { termsContent } from "@/data/termsData";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { heroTitle, introParagraphs, sections } = termsContent;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            {heroTitle}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
          
          {/* Introduction Paragraphs */}
          {introParagraphs.map((paragraph, index) => (
            <p key={`intro-${index}`}>
              {paragraph}
            </p>
          ))}

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div key={`section-${index}`}>
              <h2 className="text-2xl font-bold mt-10 mb-4">
                {section.heading}
              </h2>
              
              {/* Section Paragraphs */}
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={`p-${index}-${pIndex}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default TermsConditions;