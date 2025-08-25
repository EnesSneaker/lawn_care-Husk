import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection5() {
  return (
    <section id="about" className="py-4 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            About Us
          </h2>
          <p>
            Welcome to Alan's precise Lawn Care! We are passionate about
            creating and maintaining beautiful, healthy lawns. With years of
            experience, our dedicated team delivers top-quality lawn care
            services tailored to your needs. From mowing to fertilizing, we use
            the latest techniques and equipment for exceptional results.
            Customer satisfaction is our priority, and we build strong
            relationships based on trust and reliability. Experience
            professionalism, attention to detail, and a genuine passion for what
            we do. Let us bring out the natural beauty of your outdoor space.
            Contact us today for a consultation and elevate your lawn care
            experience.
          </p>
        </div>
        <Image
          src="/aboutUs.jpg"
          className="rounded-md mx-auto"
          alt="about us"
          width={600}
          height={500}
        />
      </div>
    </section>
  );
}
