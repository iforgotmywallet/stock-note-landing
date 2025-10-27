import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Yahoo",
      logo: "/logos/yahoo.svg",
      width: 100,
      height: 100,
      href: "https://yahoo.com",
    },
    {
      name: "langchain",
      logo: "/logos/langchain.svg",
      width: 150,
      height: 150,
      href: "https://langchain.com",
    },
    {
      name: "openai",
      logo: "/logos/openai.svg",
      width: 100,
      height: 100,
      href: "https://openai.com",
    },
    {
      name: "nvdia",
      logo: "/logos/nvdia-color.svg",
      width: 150,
      height: 150,
      href: "https://nvdia.com",
    },
    {
      name: "google",
      logo: "/logos/google.svg",
      width: 100,
      height: 100,
      href: "https://google.com",
    },
    {
      name: "modal",
      logo: "/logos/modal.svg",
      width: 150,
      height: 150,
      href: "https://modal.com",
    },
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Using real finance data and AI analysis.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Performance enhancement through hardware and real trusted finance
              data.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-6" />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <Link href={company.href} target="_blank" key={index}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="dark:opacity/100 object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <Link
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};
