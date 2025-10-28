import { Background } from "@/components/background";
import { AboutHero } from "@/components/blocks/about-hero";
import AIAnalystCards from "@/components/blocks/ai-analyst-cards";
import { DashedLine } from "@/components/dashed-line";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
        </div>

        {/* AI Analyst Cards positioned below DashedLine */}
        <AIAnalystCards />
      </div>
    </Background>
  );
}
