"use client";

import { useState } from "react";
import AnimatedCard from "@/components/AnimatedCard";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  i: {
    faqTitle: string;
    faqKicker: string;
    faqItems: FAQItem[];
  };
};

export default function FAQSection({ i }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-16">
      <p
        className="text-sm font-medium"
        style={{ color: "var(--muted-2)" }}
      >
        FAQ
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        {i.faqTitle}
      </h3>

      <p
        className="mt-3 max-w-3xl text-sm leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {i.faqKicker}
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {i.faqItems.map((item, index) => {
          const open = openIndex === index;

          return (
            <AnimatedCard key={item.question} delay={index * 0.04}>
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(open ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span
                  className="font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg,#60a5fa,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {item.question}
                </span>

                <span
                  className="text-xl transition-transform"
                  style={{
                    transform: open
                      ? "rotate(45deg)"
                      : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {open && (
                <div
                  className="mt-4 border-t pt-4 text-sm leading-relaxed"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--muted)",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}