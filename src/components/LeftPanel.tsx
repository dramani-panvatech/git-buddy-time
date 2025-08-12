// components/LeftPanel.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-between py-8 lg:py-12 pr-1 space-y-6">
      <header>
        <p className="text-sm font-semibold bg-[var(--gradient-hero)] bg-clip-text text-transparent tracking-wide">
          WHAT WE OFFER
        </p>
        <h1 className="mt-2 text-3xl lg:text-4xl font-bold leading-tight">
          Software Development & Engineering Services
        </h1>
        <p className="mt-3 text-muted-foreground">
          Driven by the right mix of domain expertise and modern tech, we deliver
          reliable, scalable software products for teams across the globe.
        </p>
      </header>

      <section>
        <Card className="shadow-[var(--shadow-soft)]">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <p className="text-sm font-medium">Fuel your Digital-First Idea</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  type="email"
                  aria-label="Email address"
                  className="flex-1"
                />
                <Button className="transition-transform duration-300 hover:scale-[1.02]">
                  Consult now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Start with a 30-minute consultation. No commitments.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default LeftPanel;
