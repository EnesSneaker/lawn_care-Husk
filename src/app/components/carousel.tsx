"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function StaticCarousel() {
    return (
        <Carousel>
            <Image
                src="/husko1_modi.png"
                alt=""
                height={600}
                width={600}
                quality={100}
                priority
            />
            <Image
                src="/husko2.png"
                alt=""
                height={500}
                width={500}
                quality={100}
                style={{ objectFit: "contain" }}
            />
            <Image
                src="/husko3_modi.png"
                alt=""
                height={500}
                width={500}
                quality={100}
                style={{ objectFit: "contain" }}
            />
            <Image
                src="/husko4.png"
                alt=""
                height={500}
                width={500}
                quality={100}
                style={{ objectFit: "contain" }}
            />
            <Image
                src="/husko5.png"
                alt=""
                height={500}
                width={500}
                quality={100}
                style={{ objectFit: "contain" }}
            />
        </Carousel>
    );
}
