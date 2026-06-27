import { blogSectionContent, blogsData } from "@/data/blogData";

const BlogSection = () => {
  const { title, readMoreText, viewAllText, viewAllLink } = blogSectionContent;

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((b) => (
            <article key={b.title} className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow group">
              <img 
                src={b.img} 
                alt={b.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {b.excerpt}
                </p>
                <a href={b.link} className="text-secondary font-heading font-semibold text-sm hover:underline">
                  {readMoreText}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={viewAllLink} className="text-secondary font-heading font-semibold hover:underline">
            {viewAllText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;