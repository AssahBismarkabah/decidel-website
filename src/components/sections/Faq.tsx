"use client";

import { useState } from "react";
import { clsx } from "clsx";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { FaqItem } from "@/types";

interface FaqProps {
  items: FaqItem[];
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
  elevated?: boolean;
}

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-decidel-border">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium text-white pr-4">
          {item.question}
        </span>
        <svg
          className={clsx(
            "h-5 w-5 flex-shrink-0 text-decidel-gray-400 transition-transform duration-200",
            open && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm leading-relaxed text-decidel-gray-400">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq({
  items,
  showHeading = true,
  title = "Frequently asked questions",
  subtitle,
  elevated = false,
}: FaqProps) {
  return (
    <section className={clsx("py-20 lg:py-28", elevated ? "bg-decidel-dark" : "bg-decidel-black")}>
      <Container>
        {showHeading && <SectionHeading title={title} subtitle={subtitle} />}
        <AnimateOnScroll direction="up">
          <div className="mx-auto max-w-3xl">
            {items.map((item) => (
              <FaqAccordion key={item.question} item={item} />
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
