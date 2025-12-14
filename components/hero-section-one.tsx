import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ChevronRight, CirclePlay } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden">
        <section className="bg-linear-to-b to-muted from-background">
          <div className="py-36">
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
              {/* HERO GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT: TEXT */}
                <div>
                  <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">
                    Lush lawns.
                    <br />
                    Expert care.
                    <br />
                    Guaranteed.
                  </h1>

                  <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                    Enjoy a lush, healthy lawn without the hassle. Our expert
                    team delivers reliable, professional care—with guaranteed
                    results you can see.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild size="lg" className="pr-4.5">
                      <Link href="mailto:alanspreciselawn@gmail.com">
                        <span className="text-nowrap">Contact</span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="pl-5"
                    >
                      <Link href="#gallery">
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">Gallery</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* RIGHT: AWARD */}
                <div className="flex justify-center md:justify-start md:mt-6">
                  <div className="bg-white rounded-xl border shadow-xl ring-1 ring-black/5 p-6 w-72 md:w-80">
                    <Image
                      src="/HuskoGoogleAwardNew.jpg"
                      alt="Alan's Precise Lawn Care – Top 3 Lawn Care Service (Google Reviews 2025)"
                      width={2880}
                      height={1842}
                      className="w-full h-auto object-contain"
                      priority
                    />

                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Top 3 Lawn Care Service
                      <br />
                      Google Reviews · 2025
                    </p>
                  </div>
                </div>
              </div>
              {/* END GRID */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
