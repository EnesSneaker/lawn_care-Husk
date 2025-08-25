"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
  {
    text: "So very satisfied with Alan's Precise Lawn Care. I highly recommend him. Alan is very professional and provides excellent service. He treats my lawn/landscaping as if it's his own. Very friendly, personable, reliable and capable!. He ensures customer is happy…never realized how nice my property could look!",
    name: "Rosanna L.",
    image: "/Rosanna_Mid.png",
    username: "Parking Slots owner",
  },
  {
    text: "We chose Alan for property clean up and freshening prior to home sale, he was prompt, communicative, professional and reasonably priced. He did everything he promised and more, quickly, efficiently and alerting us to any concerns or additional needs promptly. I can't thank him enough for all of his efforts. He truly went above and beyond. I'd give him 6 stars if that was an option.",
    name: "Paul E.",
    image: "/Fritz_mid.png",
    username: "Homeowner",
  },
  {
    text: "Alan does an amazing job on my lawn! He is always on time, super efficient, detail oriented, and easy to work with! Would highly recommend his services!",
    name: "Jennifer B.",
    image: "/Jennifer_Mid.png",
    username: "Homeowner",
  },
];

export default function TestimonialSection5() {
  return (
    <section>
      <div className="bg-muted py-24">
        <div className="mx-auto w-full max-w-2xl px-6 text-center">
          <Quote className="fill-background stroke-background mx-auto size-8 drop-shadow-sm" />
          <Carousel className="mt-12">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <blockquote className="text-foreground text-xl">
                    <p>&quot;{testimonial.text}&quot;</p>
                    <footer className="mt-6 flex flex-col items-center justify-center">
                      <Avatar className="ring-foreground/10 size-12 border border-transparent shadow ring-1">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <cite className="text-foreground mt-2 text-lg font-medium">
                        {testimonial.name}
                      </cite>
                      <span className="text-muted-foreground">
                        {testimonial.username}
                      </span>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
