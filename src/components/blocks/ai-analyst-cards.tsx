import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { GroupAvatar } from "@/components/ui/group-avatar";

// TypeScript interfaces for Analyst data structure and component props
export interface Analyst {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  avatarSeed: string;
}

export interface AnalystCardProps {
  analyst: Analyst;
}

export interface AIAnalystCardsProps {
  // No props needed for now as this uses static data
}

// Static analyst data configuration with all four analysts
const analysts: Analyst[] = [
  {
    id: "market",
    name: "Market Analyst",
    role: "Technical Trading Expert",
    description:
      "Expert in technical analysis using advanced indicators and chart patterns to identify key entry/exit points and trend reversals.",
    capabilities: [
      "Technical analysis with RSI, MACD, Bollinger Bands",
      "Pattern recognition and breakout formations",
      "Support/resistance levels and momentum analysis",
      "Risk assessment with stop-loss recommendations",
    ],
    avatarSeed: "market",
  },
  {
    id: "news",
    name: "News Analyst",
    role: "Information Research Specialist",
    description:
      "Constantly scanning financial news and company developments to identify market-moving information and regulatory changes.",
    capabilities: [
      "Real-time news aggregation from 100+ sources",
      "Company event tracking and SEC filings",
      "Executive changes and insider transactions",
      "Market correlation with news events",
    ],
    avatarSeed: "news",
  },
  {
    id: "fundamental",
    name: "Fundamental Analyst",
    role: "Financial Data Expert",
    description:
      "Deep-dive analysis of corporate key metrics, financial statements, and company fundamentals to uncover true financial health and value.",
    capabilities: [
      "Corporate Overview & Key Metrics",
      "Income statement and balance sheet evaluation",
      "Cash flow and debt-to-equity analysis",
      "Financial ratios and peer comparisons",
    ],
    avatarSeed: "fundamental",
  },
  {
    id: "social",
    name: "Social Analyst",
    role: "Sentiment Analysis Expert",
    description:
      "Monitors social media and online communities to gauge public sentiment and identify crowd-driven price movements.",
    capabilities: [
      "Reddit sentiment analysis and social monitoring",
      "Discussion volume and trending stock tracking",
      "Sentiment scoring with NLP and emotion detection",
      "Contrarian indicators and viral movement prediction",
    ],
    avatarSeed: "social",
  },
];

// ResearchWorkflowCard component for the team workflow visualization
function ResearchWorkflowCard() {
  const researchTeam = [
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=researcher1`,
      fallback: "R1",
      alt: "Researcher 1",
    },
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=researcher2`,
      fallback: "R2",
      alt: "Researcher 2",
    },
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=researcher3`,
      fallback: "R3",
      alt: "Researcher 3",
    },
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=researcher4`,
      fallback: "R4",
      alt: "Researcher 4",
    },
  ];

  const managementTeam = [
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=manager1`,
      fallback: "M1",
      alt: "Manager 1",
    },
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=manager2`,
      fallback: "M2",
      alt: "Manager 2",
    },
    {
      src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=manager3`,
      fallback: "M3",
      alt: "Manager 3",
    },
  ];

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardContent className="p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            Research Workflow
          </h3>
          <p className="text-muted-foreground mt-2 text-sm">
            From individual analysis to comprehensive insights
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-8">
          {/* Step 1: Research Team */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex flex-col items-center space-y-3">
              <GroupAvatar
                avatars={researchTeam}
                size="lg"
                className="justify-center"
              />
              <div className="text-center">
                <h4 className="font-semibold">Research Team</h4>
                <p className="text-muted-foreground text-sm">
                  Debates bullish vs bearish perspectives
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="text-muted-foreground rotate-90 sm:rotate-0">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Step 2: Management Team */}
            <div className="flex flex-col items-center space-y-3">
              <GroupAvatar
                avatars={managementTeam}
                size="lg"
                className="justify-center"
              />
              <div className="text-center">
                <h4 className="font-semibold">Management Team</h4>
                <p className="text-muted-foreground text-sm">
                  Referees debates & balances views
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="text-muted-foreground rotate-90 sm:rotate-0">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Step 3: Final Report */}
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-primary/10 border-primary/20 flex h-12 w-12 items-center justify-center rounded-full border-2">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h4 className="font-semibold">Comprehensive Report</h4>
                <p className="text-muted-foreground text-sm">
                  Balanced, actionable insights
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t pt-6">
            <p className="text-foreground text-center leading-relaxed">
              Our research workflow transforms individual analyst findings into
              comprehensive, multi-perspective reports. The research team
              collects and cross-references data from all four analysts, then
              engages in spirited debates—some agents championing bullish
              outlooks while others argue bearish scenarios, with heated
              discussions on high-risk vs. conservative approaches. The
              management team then steps in to referee these passionate debates,
              synthesizing the best arguments from all perspectives to deliver
              balanced, actionable investment intelligence.
            </p>
          </div>

          {/* Attribution */}
          <div className="border-t pt-4">
            <p className="text-muted-foreground text-center text-xs">
              Framework built based upon the{" "}
              <a
                href="https://github.com/TauricResearch/TradingAgents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors"
              >
                TradingAgents
              </a>{" "}
              open source project
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// AnalystCard sub-component with proper TypeScript props interface
function AnalystCard({ analyst }: AnalystCardProps) {
  // Generate avatar URL using Dicebear API with pixel-art style
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${analyst.avatarSeed}`;

  // Generate fallback initials from analyst name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardContent className="p-4">
        {/* Avatar Section */}
        <div className="mb-3 flex items-start space-x-3">
          <Avatar className="h-12 w-12 shrink-0 border bg-white dark:bg-black">
            <AvatarImage
              src={avatarUrl}
              alt={`${analyst.name} avatar`}
              className="object-cover"
            />
            <AvatarFallback className="bg-white text-sm font-semibold text-black dark:bg-black dark:text-white">
              {getInitials(analyst.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            {/* Typography Hierarchy - Analyst Name */}
            <h3 className="text-lg leading-tight font-semibold tracking-tight">
              {analyst.name}
            </h3>
            {/* Typography Hierarchy - Role */}
            <p className="text-muted-foreground mt-1 text-xs font-medium">
              {analyst.role}
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-3">
          {/* Typography Hierarchy - Description */}
          <p className="text-foreground text-sm leading-relaxed">
            {analyst.description}
          </p>

          {/* Capabilities Section */}
          <div>
            <h4 className="text-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
              Key Capabilities
            </h4>
            <ul className="space-y-1">
              {analyst.capabilities.map((capability, index) => (
                <li key={index} className="flex items-start text-xs">
                  <span className="text-muted-foreground mt-1.5 mr-2 h-1 w-1 shrink-0 rounded-full bg-current" />
                  <span className="text-muted-foreground leading-relaxed">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Main AIAnalystCards component
export default function AIAnalystCards({}: AIAnalystCardsProps) {
  return (
    <section className="py-8 lg:py-12">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Workflow Title */}
          <h2 className="text-5xl font-bold tracking-tight">Workflow</h2>

          {/* Individual Analyst Cards */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {analysts.map((analyst) => (
              <AnalystCard key={analyst.id} analyst={analyst} />
            ))}
          </div>

          {/* Research Workflow Card - Full Width */}
          <ResearchWorkflowCard />
        </div>
      </div>
    </section>
  );
}
