import { Card } from '@/components/ui/card';
import profileImage from '@/assets/deepankar-profile.jpg';

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
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 glow-primary">
                  <img
                    src={profileImage}
                    alt="Deepankar Singh - Freelance Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
                  About Me
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  I'm Deepankar Singh, a passionate freelance developer with expertise in 
                  Flutter, Firebase, Supabase, Web Development, SEO, and AI-driven solutions. 
                  I specialize in building modern, user-friendly apps and websites that are 
                  fast, secure, and scalable.
                </p>
              </div>
              
              {/* Skills */}
              <div className="space-y-4">
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-4">
                  Skills & Expertise
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <Card key={index} className="p-4 bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 scale-hover">
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