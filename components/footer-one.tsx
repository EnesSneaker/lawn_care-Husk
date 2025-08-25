import { Logo } from "@/components/logo";
import Link from "next/link";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Privacy Policy",
    href: "https://www.freeprivacypolicy.com/live/4b397cdd-0f07-4c13-83ca-042e872b2121",
  },
  {
    title: "Contact",
    href: "#",
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-muted py-8">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          Alan's Precise Lawn Care
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © 2025 Alan's Lawn Care™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
