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
      question: "What are the benefits of mulching my flower beds?",
      answer:
        "Mulching not only enhances the look of your garden, but it also helps retain moisture, suppress weeds, and regulate soil temperature. Our mulching service includes a fresh layer application for optimal plant health and curb appeal.",
    },
    {
      id: "item-2",
      question: "When is the best time for seasonal cleanup?",
      answer:
        "We recommend seasonal cleanups in both spring and fall. In spring, we clear out winter debris to prep your lawn and garden. In fall, we remove leaves and prepare your landscape for winter—keeping your property clean year-round.",
    },
    {
      id: "item-3",
      question: "Why is gutter cleaning important before winter?",
      answer:
        "Clogged gutters can lead to ice dams, roof leaks, and foundation issues. Our gutter cleaning service ensures water flows freely by removing leaves, debris, and buildup—preventing costly damage during the colder months.",
    },
    {
      id: "item-4",
      question: "How does your snow removal service work?",
      answer:
        "We monitor local weather and respond quickly during snow events. Our team clears driveways, walkways, and parking areas efficiently and applies de-icing treatments when needed—keeping your home or business safe and accessible.",
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
