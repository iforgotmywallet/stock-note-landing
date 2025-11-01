import Link from "next/link";

import { Check, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "🎁 Signup Bonus",
    price: "Free",
    credits: "100 Credits",
    description: "Get started with a few research runs",
    analyses: "~50 analyses",
    agentRuns: "~100 agent runs",
  },
  {
    name: "⚡ Starter Pack",
    price: "$12",
    credits: "40 Credits",
    description: "Great for individual investors",
    analyses: "~20 analyses",
    agentRuns: "~40 agent runs",
  },
  {
    name: "🚀 Pro Pack",
    price: "$30",
    credits: "120 Credits",
    description: "For active traders",
    analyses: "~60 analyses",
    agentRuns: "~120 agent runs",
  },
  {
    name: "💼 Poower Pack",
    price: "$80",
    credits: "400 Credits",
    description: "Built for professionals",
    analyses: "~200 analyses",
    agentRuns: "~400 agent runs",
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Choose your credit pack based on your research needs. Each analysis
            costs 2 credits, and each individual agent run costs 1 credit.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm">
            <span className="text-muted-foreground">Learn more about our</span>
            <Link
              href="/about#workflow"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-1 font-medium transition-colors"
            >
              AI agents workflow
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "🚀 Pro Pack"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground text-base font-semibold">
                    {plan.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="text-foreground text-2xl font-bold">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {plan.credits}
                    </div>
                  </div>
                </div>

                <span className="text-muted-foreground text-sm">
                  {plan.description}
                </span>

                <div className="space-y-3">
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Check className="size-4 shrink-0" />
                    <span className="text-sm">{plan.analyses}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Check className="size-4 shrink-0" />
                    <span className="text-sm">{plan.agentRuns}</span>
                  </div>
                  <div className="mt-4 border-t pt-3">
                    <div className="text-muted-foreground space-y-1 text-xs">
                      <div>• Full analysis: 2 credits</div>
                      <div>• Individual agent: 1 credit</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
