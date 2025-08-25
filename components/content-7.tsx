import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
          {/* Left: h2 + paragraph stacked */}
          <div className="space-y-6">
            <h2 className="text-4xl font-medium lg:text-5xl">
              Special Thanks for our senior citizens, military personnel and
              veterans!
            </h2>
            <p className="text-muted-foreground">
              We value our senior citizens, military personnel and veterans. We
              are pleased to offer a special 5% discount on all our services.
              It's our way of saying 'thank you' for your dedication and
              commitment.
            </p>
          </div>

          {/* Right: Image centered between h2 and text */}
          <div className="hidden md:flex h-full items-center">
            <div className="bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700 rounded-2xl p-px">
              <Image
                src="/Weisskopfseeadler.jpg"
                className="hidden rounded-[15px] dark:block"
                alt="eagle illustration dark"
                width={500}
                height={300}
              />
              <Image
                src="/Weisskopfseeadler.jpg"
                className="rounded-[15px] shadow dark:hidden"
                alt="eagle illustration light"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* On mobile, show the image below */}
        <div className="mt-8 md:hidden">
          <div className="bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700 rounded-2xl p-px">
            <Image
              src="/Weisskopfseeadler.jpg"
              className="rounded-[15px] shadow"
              alt="eagle illustration mobile"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
