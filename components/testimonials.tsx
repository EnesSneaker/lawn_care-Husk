import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rosanna L.",
    role: "Parking Slots owner",
    image: "/Rosanna_Mid.png",
    quote:
      "So very satisfied with Alan's Precise Lawn Care. I highly recommend him. Alan is very professional and provides excellent service. He treats my lawn/landscaping as if it's his own. Very friendly, personable, reliable and capable!. He ensures customer is happy…never realized how nice my property could look!",
  },
  {
    name: "Paul E.",
    role: "Homeowner",
    image: "/Fritz_mid.png",
    quote:
      "We chose Alan for property clean up and freshening prior to home sale, he was prompt, communicative, professional and reasonably priced. He did everything he promised and more, quickly, efficiently and alerting us to any concerns or additional needs promptly. I can't thank him enough for all of his efforts. He truly went above and beyond. I'd give him 6 stars if that was an option.",
  },
  {
    name: "Jennifer B.",
    role: "Homeowner",
    image: "/Jennifer_Mid.png",
    quote:
      "Alan does an amazing job on my lawn! He is always on time, super efficient, detail oriented, and easy to work with! Would highly recommend his services!",
  },
  {
    name: "David R.",
    role: "Founder of Park+Ride",
    image: "/Mathias_Mid.png",
    quote:
      "I Hired Alan for a Spring Cleanup. He was thorough and went the extra mile to make it look good. Worked thru the rain to get it done without complaint. Local business, very professional guy and a solid value for the money. You don't want a big faceless corporation to maintain your lawn- you want Alan. I will be using Alan for everything lawn related this summer. I highly recommend you give him a shot",
  },
  {
    name: "Joseph Kitheka",
    role: "Founder and Homeowner",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Excellent snow removal service! They arrived promptly after every snowfall and cleared our driveway and walkways thoroughly. Professional, reliable, and always friendly. Highly recommend them for anyone needing dependable winter service!",
  },
  {
    name: "Eric Ampire",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Outstanding gutter cleaning service! They were quick, efficient, and left no mess behind. I really appreciated the attention to detail and the peace of mind knowing my gutters are now flowing properly. Will definitely use them again!",
  },
  {
    name: "Roland Tubonge",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Absolutely thrilled with our new landscape design! The team took the time to understand our vision and transformed our yard into a beautiful, functional space. Their creativity, professionalism, and eye for detail truly exceeded our expectations.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className=" text-3xl font-semibold">Loved by the Community</h2>
            <p className=" mt-6">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="space-y-3 *:border-none *:shadow-none"
              >
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
