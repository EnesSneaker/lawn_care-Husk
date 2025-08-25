import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export default function Features1() {
  return (
    <section className="bg-zinc-50 py-10 md:py-20 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Who We Work With
          </h2>
          <p className="mt-4">
            We&apos;re here to serve both individual homeowners and businesses,
            bringing expert lawn care solutions to meet your unique needs.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl gap-6 md:grid-cols-2 md:mt-16">
          <Card className="group shadow-zinc-950/5 text-center">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Business-to-Consumer (B2C)</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Enhance your home&apos;s beauty with our expert lawn care
                services. We specialize in creating lush, vibrant lawns that
                your family can enjoy all year round.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5 text-center">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Business-to-Business (B2B)</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Partner with us for comprehensive lawn care solutions tailored
                to your business needs. We provide efficient landscaping
                services to elevate your commercial property&apos;s appeal.
              </p>
            </CardContent>
          </Card>
        </div>
        <div id="gallery"></div>
        <Carousel className="mt-28">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/Husko3modi.jpg"
                className="rounded-md mx-auto"
                alt=""
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko6modi.jpg"
                className="rounded-md mx-auto"
                alt="eagle illustration dark"
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko7modi.jpg"
                className="rounded-md mx-auto"
                alt="eagle illustration dark"
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko1modi.jpg"
                className="rounded-md mx-auto"
                alt=""
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko2modi.jpg"
                className="rounded-md mx-auto"
                alt=""
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko8modi.jpg"
                className="rounded-md mx-auto"
                alt=""
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko9modi.jpg"
                className="rounded-md mx-auto"
                alt=""
                width={300}
                height={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Husko10modi.jpg"
                className="rounded-md mx-auto"
                alt=""
                width={300}
                height={100}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
