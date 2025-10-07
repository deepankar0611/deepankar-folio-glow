import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Business Websites & Landing Pages',
      description: 'High‑conversion websites for SMEs, startups, and D2C brands. Blazing fast, secure, SEO‑ready.',
      features: ['Next.js/React', 'Lead Forms & WhatsApp', 'Speed & SEO Core Web Vitals', 'Hosting & Analytics']
    },
    {
      icon: '🛍️',
      title: 'E‑commerce Stores (D2C)',
      description: 'Full e‑commerce setup with payments, shipping, GST invoice, and COD. India‑ready.',
      features: ['Razorpay/Stripe/UPI', 'Product CMS', 'Coupons & Referrals', 'Order & Inventory']
    },
    {
      icon: '📱',
      title: 'Android & iOS App Development',
      description: 'Production‑grade apps using Flutter. Real‑time, secure, scalable backends.',
      features: ['Flutter', 'Firebase/Supabase', 'Push Notifications', 'Play Store & App Store']
    },
    {
      icon: '🔍',
      title: 'SEO & Local Discovery',
      description: 'Rank on Google. Local SEO for city/region targeting with review strategy.',
      features: ['On‑page & Technical SEO', 'Local SEO (GMB)', 'Schema & Sitemaps', 'Analytics & Reporting']
    },
    {
      icon: '⚙️',
      title: 'Maintenance & AMC',
      description: 'Monthly support plans for updates, monitoring, backups, and growth experiments.',
      features: ['Uptime Monitoring', 'Security & Backups', 'Feature Iterations', 'Performance Tuning']
    },
    {
      icon: '🤖',
      title: 'Automation & Chatbots',
      description: 'WhatsApp chatbots, lead automation, internal tools to save hours every week.',
      features: ['WhatsApp API', 'CRM Integrations', 'Workflow Automation', 'AI Assistants']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 fade-in-down">
              What We Build
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Internal tools, marketing websites, e‑commerce, Android/iOS apps and automation.
              Beautifully animated, performance‑first, and built to scale.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover-lift shadow-soft group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
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