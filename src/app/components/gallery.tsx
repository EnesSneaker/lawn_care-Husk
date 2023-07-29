"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "../styles/gallery.css";
import image1 from "../assets/husko-test1.jpg";
import image2 from "../assets/husko-test2.jpg";
import image3 from "../assets/husko-test3.jpg";
import image4 from "../assets/husko-test4.jpg";
import image5 from "../assets/husko-test5.jpg";
import image6 from "../assets/husko-test6.jpg";

export default function Gallery() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    const deployCarousel = carousel.current;

    const images = [image1, image2, image3, image4, image5, image6];
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
            <motion.div
                ref={carousel}
                className="carousel"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carousel"
                >
                    {images.map((image) => {
                        return (
                            <motion.div className="item" key={key++}>
                                <Image
                                    className="item-img"
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
