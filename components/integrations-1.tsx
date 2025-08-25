import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Icon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
  SVGDollarSymbol,
  SVGHomeSymbol,
  SVGUsersSymbol,
  SVGExpertiseSymbol,
  SVGCustomizeSymbol,
  SVGEcoSymbol,
} from "@/components/logos";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Why to choose us?
            </h2>
            <p className="text-muted-foreground mt-6">
              With a commitment to unbeatable affordability, I offer top-tier
              services that prioritize your home's well-being. I treat every
              project with the care I would give to my own space, ensuring that
              your home shines from the inside out.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="Unbeatable Affordability"
              description="Offering the most competitive prices in the market, ensuring that you receive exceptional lawn care without straining your budget."
            >
              <SVGDollarSymbol />
            </IntegrationCard>

            <IntegrationCard
              title="Caring Touch"
              description="Treating your home with the same love and respect as my own, ensuring every detail is attended to for a flourishing and vibrant lawn."
            >
              <SVGHomeSymbol />
            </IntegrationCard>

            <IntegrationCard
              title="Community Commitment"
              description="A strong bond with the community, fostering loyalty and trust among citizens, creating lasting relationships built on reliability and support."
            >
              <SVGUsersSymbol />
            </IntegrationCard>

            <IntegrationCard
              title="Expertise and Professionalism"
              description="Years of experience and dedicated professionalism ensure your lawn is handled by a skilled expert who delivers consistent and top-quality results."
            >
              <SVGExpertiseSymbol />
            </IntegrationCard>

            <IntegrationCard
              title="Customized Solutions"
              description="Tailoring lawn care plans to suit your specific needs, guaranteeing personalized attention that caters to the unique requirements of your outdoor space."
            >
              <SVGCustomizeSymbol />
            </IntegrationCard>

            <IntegrationCard
              title="Eco-Friendly Approach"
              description="Embracing environmentally conscious practices to enhance your lawn's health while minimizing ecological impact, reflecting a responsible and sustainable approach to lawn care."
            >
              <SVGEcoSymbol />
            </IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
