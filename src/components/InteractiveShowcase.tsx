import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const badges = [
  'Blazing Fast', 'Animated UI', 'SEO Ready', 'UPI/Razorpay', 'Play Store', 'App Store', 'Next.js', 'Flutter', 'Supabase', 'Firebase'
];

const InteractiveShowcase = () => {
  return (
    <section id="showcase" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 fade-in-down">
              Interactive Showcase
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              A glimpse of the motion and micro‑interactions we ship with every Bridge Code build.
            </p>
          </div>

          {/* Marquee */}
          <div className="relative mb-12">
            <div className="marquee whitespace-nowrap flex items-center">
              {[...badges, ...badges].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 mr-4 rounded-full bg-primary/10 text-primary font-poppins text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Animated Landing', desc: 'Hero motions, parallax, scroll reveals.' },
              { title: 'Tool Dashboards', desc: 'Crisp UI states, empty states, loaders.' },
              { title: 'Mobile Interactions', desc: 'Gestures, haptics, and smooth flows.' },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-background border-border tilt-card hover-lift shadow-soft group">
                <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/25 transition-colors">✨</div>
                <h3 className="font-montserrat font-bold text-xl mb-2">{item.title}</h3>
                <p className="font-inter text-muted-foreground mb-6">{item.desc}</p>
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary btn-shine"
                  onClick={() => window.open('https://wa.me/919876543210?text=I%20want%20an%20animated%20website/app%20like%20your%20showcase.', '_blank')}
                >
                  Build Something Like This
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;


