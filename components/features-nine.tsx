import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, Globe, Play, Plus, Signature, Sparkles } from "lucide-react";
import Image from "next/image";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

export default function FeaturesSection() {
  return (
    <section>
      <div className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 lg:px-0">
          <div>
            <h2 className="text-foreground text-balance text-center text-4xl font-semibold">
              Does Your Garden Need Some Shape?
            </h2>
          </div>
          <div className="mt-16 space-y-12">
            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/lawn_maintance2.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Lawn Maintenance
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Our team of skilled professionals is dedicated to keeping your
                  lawn in pristine condition. From regular mowing and edging to
                  weed control and fertilization, we'll ensure your grass stays
                  healthy and manicured throughout the seasons.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/trimming_pic.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Trimming and Pruning
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  We understand the importance of well-maintained plants and
                  shrubs. With our expert trimming and pruning services, we'll
                  shape your greenery, promote healthy growth, and enhance the
                  overall aesthetic appeal of your garden.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden px-6 sm:col-span-2"
              >
                <div className="mask-b-from-75% -mx-2 -mt-2 px-2 pt-6">
                  <Image
                    src="/mulching.jpg"
                    className="rounded-[15px] shadow dark:hidden"
                    alt="lawn maintainance"
                    width={1207}
                    height={929}
                  />
                </div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Mulching and Bed Maintenance
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Enhance the beauty of your flower beds and garden areas with
                  our top-quality mulching services. Our team will apply a fresh
                  layer of mulch, preventing weed growth, retaining moisture,
                  and providing an attractive backdrop for your plants.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden px-6 sm:col-span-2"
              >
                <div className="mask-b-from-75% -mx-2 -mt-2 px-2 pt-6">
                  <Image
                    src="/seasonal.jpg"
                    className="rounded-[15px] shadow dark:hidden"
                    alt="lawn maintainance"
                    width={1207}
                    height={929}
                  />
                </div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Seasonal Cleanup
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Let us handle the demanding task of seasonal cleanups. We'll
                  remove fallen leaves, clear debris, and prepare your garden
                  for the changing weather, ensuring a clean and organized
                  outdoor space year-round.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/landscape_design_pic.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Landscape Design
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Looking to transform your backyard into an oasis? Our skilled
                  designers will collaborate with you to create a customized
                  landscape design that suits your preferences and complements
                  the existing architecture, ensuring a breathtaking and
                  inviting outdoor space.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/snow_removal.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Snow Removal
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Keep your driveways, walkways, and parking areas clear, safe,
                  and accessible with our prompt and dependable snow removal
                  services. We monitor weather conditions and respond quickly to
                  snow events, using professional equipment to efficiently
                  remove snow and apply de-icing treatments when needed. Whether
                  residential or commercial, we’ll keep your property
                  winter-ready.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/gutter_cleaning.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Gutter Cleaning
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Clogged gutters can lead to serious problems in winter, from
                  ice dams to roof and foundation damage. Our gutter cleaning
                  service clears out leaves, debris, and buildup before freezing
                  temperatures hit—ensuring water flows freely away from your
                  property. It's a simple step that prevents costly repairs
                  later on.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/winterization_services.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Winterization Services
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Properly preparing your lawn systems and outdoor features for
                  winter is key to avoiding damage and ensuring a smooth spring
                  start. We offer full winterization, including sprinkler
                  blowouts, equipment shutdown, and protective measures for
                  delicate landscape elements. Let us help you safeguard your
                  investment through the off-season.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-6 sm:grid-cols-5">
              <Card
                variant="soft"
                className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip"
              >
                <Image
                  src="/commercial_services.jpg"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="lawn maintainance"
                  width={1207}
                  height={929}
                />
              </Card>
              <div className="max-w-md sm:col-span-3">
                <h3 className="text-foreground text-lg font-semibold">
                  Commercial Property Maintenance
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Winter weather doesn’t pause business—and neither do we. Our
                  commercial maintenance services cover snow removal, de-icing,
                  trash pickup, and routine winter checks to ensure your
                  property remains clean, safe, and operational. With scheduled
                  visits and responsive service, we help you maintain a
                  professional appearance and minimize winter-related
                  disruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="relative hidden h-fit">
        <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">
          PDF
        </div>
        <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
      </div>
      <div className="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-muted-foreground">2:30 - 3:45 PM</span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        <div className="flex -space-x-1.5">
          {[
            { src: MESCHAC_AVATAR, alt: "Méschac Irung" },
            { src: BERNARD_AVATAR, alt: "Bernard Ngandu" },
            { src: THEO_AVATAR, alt: "Théo Balick" },
            { src: GLODIE_AVATAR, alt: "Glodie Lukose" },
          ].map((avatar, index) => (
            <div
              key={index}
              className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"
            >
              <img
                className="aspect-square rounded-full object-cover"
                src={avatar.src}
                alt={avatar.alt}
                height="460"
                width="460"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        ML Pipeline Discussion
      </div>
    </Card>
  );
};

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative">
      <Card className="aspect-video w-4/5 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
        <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
          <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
            <img
              className="aspect-square rounded-full object-cover"
              src={MESCHAC_AVATAR}
              alt="M Irung"
              height="460"
              width="460"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground line-clamp-1 text-sm font-medium">
              Méschac Irung
            </span>

            <span className="text-muted-foreground/75 text-xs">2m</span>
          </div>
        </div>

        <div className="ml-8 space-y-2">
          <div className="bg-foreground/10 h-2 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
        </div>

        <Signature className="ml-8 mt-3 size-5" />
      </Card>
      <Card className="aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
          <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
        </div>
      </Card>
    </div>
  );
};

const AIAssistantIllustration = () => {
  return (
    <Card
      aria-hidden
      className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
        <p className="mt-2 line-clamp-2 text-sm">
          How can I optimize my neural network to reduce inference time while
          maintaining accuracy?
        </p>
      </div>
      <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm">Ask AI Assistant</div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Plus />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Globe />
            </Button>
          </div>

          <Button size="icon" className="size-7 rounded-2xl bg-black">
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  );
};
