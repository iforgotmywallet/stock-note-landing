import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

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
      "Your go-to expert for technical trading analysis, diving deep into stock data from the past 2 weeks to uncover patterns that matter. Using advanced technical indicators and chart analysis, this analyst identifies key entry and exit points, trend reversals, and momentum shifts that could impact your trading decisions.",
    capabilities: [
      "Advanced technical analysis using 20+ indicators including RSI, MACD, and Bollinger Bands",
      "Pattern recognition for head & shoulders, triangles, flags, and breakout formations",
      "Volume analysis to confirm price movements and identify institutional activity",
      "Support and resistance level identification with precision entry/exit points",
      "Momentum analysis using moving averages and trend strength indicators",
      "Risk assessment with stop-loss and take-profit recommendations",
    ],
    avatarSeed: "market",
  },
  {
    id: "news",
    name: "News Analyst",
    role: "Information Research Specialist",
    description:
      "The ultimate news detective, constantly scanning the web for company-specific developments that could move markets. From earnings announcements to regulatory changes, this analyst ensures you never miss a critical piece of information that could impact your investments.",
    capabilities: [
      "Real-time web scraping of financial news from 100+ trusted sources",
      "Company-specific event tracking including earnings, mergers, and partnerships",
      "Regulatory filing alerts and SEC announcement monitoring",
      "Executive leadership changes and insider transaction analysis",
      "Market-moving news correlation with stock price movements",
      "Competitive landscape analysis and industry trend identification",
    ],
    avatarSeed: "news",
  },
  {
    id: "fundamental",
    name: "Fundamental Analyst",
    role: "Financial Data Expert",
    description:
      "The numbers don't lie, and this analyst knows how to read them. Specializing in deep-dive analysis of SEC filings, income statements, balance sheets, and cash flow statements, this expert uncovers the true financial health and intrinsic value of companies you're considering.",
    capabilities: [
      "Comprehensive SEC filing analysis including 10-K, 10-Q, and 8-K reports",
      "Income statement deep-dive with revenue growth and profitability trends",
      "Balance sheet evaluation including debt-to-equity and asset quality assessment",
      "Cash flow analysis covering operating, investing, and financing activities",
      "Insider trading pattern analysis and executive compensation review",
      "Financial ratio calculations and peer comparison analysis",
    ],
    avatarSeed: "fundamental",
  },
  {
    id: "social",
    name: "Social Analyst",
    role: "Sentiment Analysis Expert",
    description:
      "Tapping into the pulse of social media and online communities, this analyst monitors platforms like Reddit to gauge public sentiment and discussion volume. By analyzing the mood and conversation trends around stocks, this expert provides insights into market psychology and potential crowd-driven price movements.",
    capabilities: [
      "Reddit sentiment analysis across investing subreddits like r/stocks and r/investing",
      "Social media monitoring including Twitter, Discord, and financial forums",
      "Discussion volume tracking to identify trending stocks and emerging interest",
      "Sentiment scoring using natural language processing and emotion detection",
      "Community trend identification and viral stock movement prediction",
      "Contrarian indicator analysis to spot potential market reversals",
    ],
    avatarSeed: "social",
  },
];

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
      <CardContent className="p-6">
        {/* Avatar Section */}
        <div className="mb-4 flex items-start space-x-4">
          <Avatar className="h-20 w-20 shrink-0 border">
            <AvatarImage
              src={avatarUrl}
              alt={`${analyst.name} avatar`}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
              {getInitials(analyst.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            {/* Typography Hierarchy - Analyst Name */}
            <h3 className="text-xl leading-tight font-semibold tracking-tight">
              {analyst.name}
            </h3>
            {/* Typography Hierarchy - Role */}
            <p className="text-muted-foreground mt-1 text-sm font-medium">
              {analyst.role}
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-4">
          {/* Typography Hierarchy - Description */}
          <p className="text-foreground leading-relaxed">
            {analyst.description}
          </p>

          {/* Capabilities Section */}
          <div>
            <h4 className="text-foreground mb-3 text-sm font-semibold">
              Key Capabilities:
            </h4>
            <ul className="space-y-2">
              {analyst.capabilities.map((capability, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-muted-foreground mt-1 mr-3 h-1 w-1 shrink-0 rounded-full bg-current" />
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {analysts.map((analyst) => (
            <AnalystCard key={analyst.id} analyst={analyst} />
          ))}
        </div>
      </div>
    </section>
  );
}
