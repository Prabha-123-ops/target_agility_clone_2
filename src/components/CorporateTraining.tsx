import { Button } from "@/components/ui/button";
import corporateImg from "@/assets/corporate-training.jpg";
import { corporateTrainingContent } from "@/data/corporateTrainingData";

const CorporateTraining = () => {
  const { title, description, buttonText, imageAlt } = corporateTrainingContent;

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              {title}
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              {description}
            </p>
            <Button variant="secondary" size="lg" className="font-heading font-semibold">
              {buttonText}
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={corporateImg} 
              alt={imageAlt} 
              className="w-full h-72 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;