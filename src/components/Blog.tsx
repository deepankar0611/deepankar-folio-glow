import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: '5 SEO Tricks to Boost Website Traffic',
      excerpt: 'Discover proven SEO strategies that can significantly increase your website\'s visibility and organic traffic.',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'SEO',
      image: '🔍'
    },
    {
      title: 'Why Flutter is the Future of Mobile Apps',
      excerpt: 'Explore the advantages of Flutter for cross-platform development and why it\'s becoming the go-to choice for developers.',
      date: 'March 10, 2025',
      readTime: '7 min read',
      category: 'Mobile Development',
      image: '📱'
    },
    {
      title: 'How AI Can Power Small Businesses',
      excerpt: 'Learn how artificial intelligence and automation tools can help small businesses streamline operations and grow faster.',
      date: 'March 5, 2025',
      readTime: '6 min read',
      category: 'AI & Automation',
      image: '🤖'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 fade-in-down">
              Insights from Bridge Code
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Notes on product engineering, motion design, and shipping faster.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 scale-hover group"
              >
                {/* Blog Image */}
                <div className="p-8 bg-primary/5 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-poppins font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-montserrat font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 font-poppins font-medium"
                  >
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 font-poppins font-medium px-8"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;