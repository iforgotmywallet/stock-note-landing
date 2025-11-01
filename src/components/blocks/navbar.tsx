"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconClock24,
  IconChartHistogram,
  IconDatabase,
  IconStackMiddle,
} from "@tabler/icons-react";
import { ChevronRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    label: "Features",
    href: "#features",
    dropdownItems: [
      {
        title: "AI Stock Analysis",
        href: "/#feature-modern-teams",
        description:
          "AI agents debate multiple perspectives for comprehensive stock analysis",
        icon: IconChartHistogram,
      },
      {
        title: "Real-time Data",
        href: "/#resource-allocation",
        description:
          "Access real-time aggregated data and financial metrics for accurate analysis",
        icon: IconDatabase,
      },
      {
        title: "Stock Analysis Cron Job",
        href: "#",
        description:
          "Schedule recurring analysis on tickers for always-ready reports",
        comingSoon: true,
        icon: IconClock24,
      },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(95%,900px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <IconStackMiddle className="size-6" />
          <span className="text-base font-semibold">StockNotes</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <NavigationMenuItem key={link.label} className="">
                  <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-3">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[400px] space-y-2 p-4">
                      {link.dropdownItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            {item.comingSoon ? (
                              <div className="group flex cursor-not-allowed items-center gap-4 rounded-md p-3 leading-none no-underline opacity-60 outline-hidden transition-colors select-none">
                                <item.icon className="text-muted-foreground h-6 w-6 shrink-0" />
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-2 text-sm leading-none font-medium">
                                    {item.title}
                                    <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                                      Coming Soon
                                    </span>
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                              >
                                <item.icon className="text-muted-foreground group-hover:text-accent-foreground h-6 w-6 shrink-0 transition-colors" />
                                <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                  <div className="text-sm leading-none font-medium">
                                    {item.title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label} className="">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-3 text-sm font-medium transition-opacity hover:opacity-75",
                      pathname === link.href && "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href={process.env.NEXT_PUBLIC_LOGIN_URL + "/auth/sign-in" || "/"}
            className="max-lg:hidden"
          >
            <Button variant="outline">
              <span className="relative z-10">Login</span>
            </Button>
          </a>
          {/* put future link button here*/}
          <a
            href={process.env.NEXT_PUBLIC_LOGIN_URL || "/"}
            className="max-lg:hidden"
          >
            <Button variant="outline">
              <span className="relative z-10">Dashboard</span>
            </Button>
          </a>
          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="text-primary flex w-full items-center justify-between text-base font-medium"
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openDropdown === link.label
                      ? "mt-4 max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                    {link.dropdownItems.map((item) =>
                      item.comingSoon ? (
                        <div
                          key={item.title}
                          className="group flex cursor-not-allowed items-start gap-3 rounded-md p-2 opacity-60 transition-colors"
                        >
                          <item.icon className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                          <div>
                            <div className="text-primary flex items-center gap-2 font-medium">
                              {item.title}
                              <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                                Coming Soon
                              </span>
                            </div>
                            <p className="text-muted-foreground mt-1 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group hover:bg-accent flex items-start gap-3 rounded-md p-2 transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <item.icon className="text-muted-foreground group-hover:text-accent-foreground mt-0.5 h-5 w-5 shrink-0 transition-colors" />
                          <div className="transition-transform duration-200 group-hover:translate-x-1">
                            <div className="text-primary font-medium">
                              {item.title}
                            </div>
                            <p className="text-muted-foreground mt-1 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                  pathname === link.href && "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </section>
  );
};
