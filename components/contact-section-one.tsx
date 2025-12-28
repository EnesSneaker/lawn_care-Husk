"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(formRef.current!);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thanks! Your message has been sent ✅");
        formRef.current?.reset(); // ✅ SAFE
      } else {
        setResult("Something went wrong ❌ Please try again.");
      }
    } catch {
      setResult("Network error ❌ Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-muted py-15 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="text-4xl font-semibold lg:text-5xl">Contact us</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Reach out to us and lets turn your garden dreams into a stunning
          reality.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* LEFT */}
          <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
            <div>
              <h2 className="mb-3 text-lg font-semibold">Contact</h2>
              <Link
                href="mailto:alanspreciselawn@gmail.com"
                className="text-primary text-lg hover:underline"
              >
                alanspreciselawn@gmail.com
              </Link>
              <p className="mt-3 text-sm hover:underline">
                <a href="tel:(973) 270-7126">(973) 270-7126</a>
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="@container lg:col-span-3"
          >
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <Card className="p-8 sm:p-12">
              <div className="mt-2 space-y-6">
                <div className="@md:grid-cols-2 grid gap-3">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={3} required />
                </div>

                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>

                {result && (
                  <p className="text-sm mt-2 text-muted-foreground">{result}</p>
                )}
              </div>
            </Card>
          </form>
        </div>
      </div>
    </section>
  );
}
