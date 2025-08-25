"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsTwo() {
  const faqItems = [
    {
      id: "item-1",
      question: "How often should I water my lawn?",
      answer:
        "Proper watering is crucial for a healthy lawn. In general, it is recommended to water deeply but infrequently. Water your lawn 1-2 times per week, providing around 1 inch of water each time. Adjust the frequency based on weather conditions and the needs of your specific grass type.",
    },
    {
      id: "item-2",
      question: "How can I prevent weeds from invading my lawn?",
      answer:
        "Weed control starts with maintaining a healthy lawn. Regularly mowing at the appropriate height, fertilizing properly, and watering correctly can help your grass outcompete weeds. Additionally, applying pre-emergent herbicides and manually removing weeds can be effective weed prevention strategies.",
    },
    {
      id: "item-3",
      question: "When should I aerate my lawn?",
      answer:
        "Aeration involves creating small holes in the soil to improve air circulation, water absorption, and nutrient uptake. The best time to aerate your lawn is during the growing season when the grass is actively growing. For cool-season grasses, early spring or fall is ideal. For warm-season grasses, late spring or early summer is recommended.",
    },
    {
      id: "item-4",
      question: "How often should I mow my lawn?",
      answer:
        "The frequency of lawn mowing depends on the growth rate of your grass and the desired height. As a general rule, aim to mow your lawn when the grass reaches about one-third higher than its recommended mowing height. For most lawns, this means mowing once every 1-2 weeks during the growing season.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-muted-foreground mt-6">
            Didn&apos;t find the answer you are looking for?{" "}
            <Link
              href="mailto:alanspreciselawn@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              contact us!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
