import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { MapPin, Home, Train, Check, MessageCircle, Users, Calendar } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('You\'re on the waitlist! Check your email for updates.');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            The Flex Nomad Pass
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Explore Europe's most inspiring rural colivings — with train travel included.
          </p>

          <Card className="max-w-lg mx-auto border-2 shadow-xl">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">
                    Be the first to access the Pass + join our live founder calls
                  </label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                  Join the Waitlist
                </Button>
                <p className="text-sm text-muted-foreground">
                  I'll send you early access and links to live calls from each coliving I visit.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-primary">1</span>
                  <h3 className="text-xl font-bold">Choose your journey</h3>
                </div>
                <p className="text-muted-foreground">
                  Select the length of your pass (1 or 2 months) and pick from 15+ rural colivings across Europe: forest, mountains, beach & more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-primary">2</span>
                  <h3 className="text-xl font-bold">Stay in community spaces</h3>
                </div>
                <p className="text-muted-foreground">
                  Use your Coliving Pass credits to live and work in inspiring, slow-living environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Train className="w-8 h-8 text-accent" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <h3 className="text-xl font-bold">Travel by train</h3>
                </div>
                <p className="text-muted-foreground">
                  Move sustainably across borders with your Interrail pass, included in the offer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Coliving Map
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Here are the curated colivings you'll have access to. Each space is community-driven, nature-based, and remote worker friendly.
          </p>

          <Card className="overflow-hidden border-2">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.pampam.city/p/ui4dN2sjl93Esf3c0Ct0?42.037751,-8.278714,3.57"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  title="Coliving Map"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <a
              href="https://www.pampam.city/p/ui4dN2sjl93Esf3c0Ct0?42.037751,-8.278714,3.57"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium inline-flex items-center gap-2"
            >
              Click here to open the full map
              <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            What's Included in the Pass
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Coliving stays across Europe</h3>
                  <p className="text-muted-foreground text-sm">Access to 15+ curated rural colivings</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Train className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Train travel with Interrail</h3>
                  <p className="text-muted-foreground text-sm">Sustainable travel between destinations</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Live calls with coliving founders</h3>
                  <p className="text-muted-foreground text-sm">Ask questions directly from each location</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Early access + special launch pricing</h3>
                  <p className="text-muted-foreground text-sm">Be first and save on the launch price</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">A real nomad & remote work community</h3>
                  <p className="text-muted-foreground text-sm">Connect with like-minded travelers</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Flexible duration options</h3>
                  <p className="text-muted-foreground text-sm">Choose 1 or 2-month passes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Join the Waitlist for Early Access
          </h2>
          <p className="text-xl text-muted-foreground">
            Get notified when we launch and join me for live video calls from the colivings as I visit — ask your questions directly.
          </p>

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                  Join the Waitlist
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                When does the pass launch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Coming soon — we're visiting the colivings now and will open early access soon.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I choose how long I stay?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! You'll be able to choose flexible durations per space.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Is the Interrail pass included?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, the Coliving Pass includes Interrail train travel for your route.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What kind of colivings are included?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All colivings are in rural, nature-based settings — think forests, mountains, and beaches. Each is community-driven and designed for remote workers who value connection and slow living.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How do the live founder calls work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                As I visit each coliving, I'll host live video calls with the founders where you can ask questions, learn about the space, and get insider tips before you book.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 The Flex Nomad Pass. Explore consciously, live community.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
