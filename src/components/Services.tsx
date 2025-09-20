import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Cross-platform apps with real-time features & modern UI/UX.',
      features: ['Flutter Development', 'Firebase Integration', 'Real-time Features', 'Cross-platform']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Responsive, SEO-friendly websites for businesses.',
      features: ['React/Next.js', 'Responsive Design', 'SEO Optimization', 'Modern UI/UX']
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Boost visibility with proven SEO strategies.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Analytics Setup']
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Chatbots, automation tools, and AI-powered solutions.',
      features: ['Chatbot Development', 'Process Automation', 'AI Integration', 'Smart Solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              My Services
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed in the modern world.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 scale-hover group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="font-inter text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;