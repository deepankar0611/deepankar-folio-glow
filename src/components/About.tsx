import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: '📱',
      title: 'Mobile App Development (Flutter + Firebase)',
      description: 'Cross-platform apps with real-time features'
    },
    {
      icon: '🌐',
      title: 'Full-Stack Web Development',
      description: 'Modern, responsive websites and web applications'
    },
    {
      icon: '⚡',
      title: 'Supabase Integration & Automation',
      description: 'Backend-as-a-service solutions and automations'
    },
    {
      icon: '🎯',
      title: 'SEO Optimization',
      description: 'Boost visibility with proven SEO strategies'
    },
    {
      icon: '🤖',
      title: 'AI Tools & Chatbot Integration',
      description: 'AI-powered solutions and intelligent automation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Abstract Animated Visual (replaces human image) */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80 rounded-2xl bg-secondary overflow-hidden shadow-soft hover-lift">
                <div className="absolute -top-8 -left-6 w-40 h-40 rounded-full accent-gradient blur-2xl opacity-60 float-slow"></div>
                <div className="absolute -bottom-10 -right-6 w-48 h-48 rounded-full accent-gradient blur-2xl opacity-60 float-medium"></div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-28 h-28 rounded-xl border border-border bg-background/70 backdrop-blur-sm shadow-soft"></div>
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6 fade-in-down">
                  About Bridge Code
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed fade-in-up">
                  Bridge Code is a product‑focused studio. We turn ideas into polished tools, websites,
                  and applications with delightful motion and robust engineering.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <Card className="p-4 bg-background/50 border-border/50">
                    <div className="font-montserrat text-2xl font-bold text-foreground">50+ </div>
                    <div className="font-inter text-sm text-muted-foreground">Projects Delivered</div>
                  </Card>
                  <Card className="p-4 bg-background/50 border-border/50">
                    <div className="font-montserrat text-2xl font-bold text-foreground">12+ </div>
                    <div className="font-inter text-sm text-muted-foreground">Industries Served</div>
                  </Card>
                  <Card className="p-4 bg-background/50 border-border/50">
                    <div className="font-montserrat text-2xl font-bold text-foreground">24×7 </div>
                    <div className="font-inter text-sm text-muted-foreground">Support & AMC</div>
                  </Card>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-4">
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-4">
                  Capabilities
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <Card key={index} className="p-4 bg-background/50 border-border/50 hover-lift shadow-soft">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h4 className="font-poppins font-medium text-foreground mb-1">
                            {skill.title}
                          </h4>
                          <p className="font-inter text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;