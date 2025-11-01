import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "What is StockNotes?",
        answer:
          "StockNotes is your shortcut to doing real stock research — without spending hours digging through charts, news, and reports. It gathers live data from major finance sites, news outlets, and social media, then uses a network of AI agents to turn it all into an easy-to-read research summary. Think of it as your personal stock analyst that actually explains things clearly.",
      },
      {
        question: "Do I need to be a finance expert to use it?",
        answer:
          "Not at all. StockNotes is made for regular investors who want to make smarter decisions — even if you don't know where to start. You just pick a stock, click \"analyze,\" and let the AI do the work. You'll get insights that usually take hours (or multiple tools) to find.",
      },
      {
        question: "What makes StockNotes different from other tools?",
        answer:
          "Most platforms just throw data at you — StockNotes connects the dots for you. It explains why a stock is moving, what's being said in the news or social media, and what key numbers to focus on. It's built for people who want clarity, not complexity.",
      },
      {
        question: "Can I run multiple analyses at the same time?",
        answer:
          "Yes — definitely! You can run as many analyses as your credits allow. Right now, we let you run two at the same time, and the rest will queue up automatically. As we scale up and handle more traffic, we'll raise that limit for power users.",
      },
      {
        question: "How long does each run take?",
        answer:
          "Each analysis usually takes around 4 minutes from start to finish — just enough time to grab a coffee while your AI team does the heavy lifting.",
      },
    ],
  },
  {
    title: "Credits & Pricing",
    questions: [
      {
        question: "How do credits work?",
        answer:
          "Each research run uses credits based on how many AI analysts you include. A base run costs 2 credits, and each analyst you add costs 1 extra credit. You can mix and match analysts for deeper insights — your credits only get used when you actually run an analysis.",
      },
      {
        question: "What happens after I use up my signup credits?",
        answer:
          "When you sign up, you get 100 free credits to explore and run real research reports. Once you've used them up, you can grab a credit pack anytime — no subscription required.",
      },
      {
        question: "Do credits ever expire?",
        answer:
          "Nope. Your credits never expire. Use them whenever you want — today, next week, or next quarter. StockNotes is built for flexibility, not pressure.",
      },
      {
        question: "Can I upgrade or switch plans later?",
        answer:
          "Absolutely. Credit packs are stackable, so you can buy more anytime without losing anything. If you start small and decide you want more power later, just grab a bigger pack — it's that simple.",
      },
    ],
  },
  {
    title: "Technical",
    questions: [
      {
        question: "Is StockNotes open source?",
        answer:
          "Almost! We're still cleaning things up and getting everything ready for public release. The plan is to open-source the core system so anyone can explore how it works, contribute ideas, or even build their own research agents. We love transparency — just want it to look halfway decent before sharing the code 😄.",
      },
      {
        question: "What's StockNotes built with?",
        answer:
          "StockNotes runs on the TradingAgents framework — a flexible setup for AI-driven research. The backend's built in Python, powered by NVIDIA GPUs, and the frontend runs on Next.js with shadcn/ui for that clean, simple feel. Everything's designed to be fast, modular, and developer-friendly.",
      },
      {
        question: "Can developers contribute or self-host it?",
        answer:
          "Not quite yet — but that's the goal. Once the open-source version is live, we'll add setup guides, API docs, and contribution notes. We'd love for developers to plug in new data sources, design their own agents, or even host their own version of StockNotes down the road.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
