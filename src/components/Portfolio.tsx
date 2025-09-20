import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import smarttAttendanceImage from '@/assets/smartt-attendance.jpg';
import splitwiseImage from '@/assets/splitwise-app.jpg';
import globegazeImage from '@/assets/globegaze-travel.jpg';
import aiJoeImage from '@/assets/ai-joe-assistant.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Smartt Attendance App',
      description: 'Real-time biometric app with Flutter & Firebase.',
      image: smarttAttendanceImage,
      tags: ['Flutter', 'Firebase', 'Biometric', 'Real-time'],
      features: ['Biometric Authentication', 'Real-time Tracking', 'Admin Dashboard', 'Analytics']
    },
    {
      title: 'SplitWise – Smart Expense Sharing',
      description: 'Group expense app with Firebase + Supabase.',
      image: splitwiseImage,
      tags: ['Flutter', 'Firebase', 'Supabase', 'FinTech'],
      features: ['Group Expenses', 'Smart Splitting', 'Payment Integration', 'Notifications']
    },
    {
      title: 'GlobeGaze Travel App',
      description: 'Travel social platform for sharing & exploring.',
      image: globegazeImage,
      tags: ['React', 'Social', 'Travel', 'Maps'],
      features: ['Location Sharing', 'Photo Upload', 'Social Feed', 'Travel Stories']
    },
    {
      title: 'AI Joe – Virtual Steel Assistant',
      description: 'AI-powered knowledge assistant with avatar.',
      image: aiJoeImage,
      tags: ['AI', 'Chatbot', 'Avatar', 'Assistant'],
      features: ['AI Conversation', 'Virtual Avatar', 'Knowledge Base', 'Voice Interface']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, featuring innovative solutions built with modern technologies.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-background border-border hover:border-primary/50 transition-all duration-300 scale-hover group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-poppins font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="font-inter text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  >
                    View Project Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;