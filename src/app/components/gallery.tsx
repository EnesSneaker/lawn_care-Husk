"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
//import "../styles/gallery.css";
import image1 from "../assets/Husko1modi.jpg";
import image2 from "../assets/Husko2modi.jpg";
import image3 from "../assets/Husko3modi.jpg";
import image4 from "../assets/Husko4modi.jpg";
import image5 from "../assets/Husko5modi.jpg";
import image6 from "../assets/Husko6modi.jpg";
import image7 from "../assets/Husko7modi.jpg";
import image8 from "../assets/Husko8modi.jpg";
import image9 from "../assets/Husko9modi.jpg";
import image10 from "../assets/Husko10modi.jpg";
import image11 from "../assets/Husko11modi.jpg";

export default function Gallery() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    const deployCarousel = carousel.current;

    const images = [
        image1,
        image2,
        image5,
        image7,
        image6,
        image4,
        image8,
        image9,
        image10,
        image11,
    ];
    let key = 0;

    useEffect(() => {
        if (carousel.current) {
            setWidth(
                carousel.current.scrollWidth - carousel.current.offsetWidth
            );
        }
    }, []);

    return (
        <>
            <div id="gallery" className=" mt-8 text-center text-4xl my-4">
                Gallery
            </div>
            <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inline-flex gap-10"
                >
                    {images.map((image) => {
                        return (
                            <motion.div
                                className="min-h-[40rem] min-w-[30rem] p-10"
                                key={key++}
                            >
                                <Image
                                    className="rounded-[2rem] pointer-events-none"
                                    src={image}
                                    alt="..."
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </>
    );
}
