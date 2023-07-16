"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

interface Card {
    id: number;
    href: string;
    first: string;
    second: string;
    picture: string;
}

export default function DefaultCard() {
    const cards: Card[] = [
        {
            id: 1,
            href: "/features",
            first: "Lawn Maintenance",
            second: "Our team of skilled professionals is dedicated to keeping your lawn in pristine condition. From regular mowing and edging to weed control and fertilization, we'll ensure your grass stays healthy and manicured throughout the seasons.",
            picture: "/lawn_maint-pic.jpg",
        },
        {
            id: 2,
            href: "/features",
            first: "Trimming and Pruning",
            second: "We understand the importance of well-maintained plants and shrubs. With our expert trimming and pruning services, we'll shape your greenery, promote healthy growth, and enhance the overall aesthetic appeal of your garden.",
            picture: "/trimming_pic.jpg",
        },
        {
            id: 3,
            href: "/features",
            first: "Mulching and Bed Maintenance",
            second: "Enhance the beauty of your flower beds and garden areas with our top-quality mulching services. Our team will apply a fresh layer of mulch, preventing weed growth, retaining moisture, and providing an attractive backdrop for your plants.",
            picture: "/husko3.png",
        },
        {
            id: 4,
            href: "/features",
            first: "Seasonal Cleanup",
            second: "Let us handle the demanding task of seasonal cleanups. We'll remove fallen leaves, clear debris, and prepare your garden for the changing weather, ensuring a clean and organized outdoor space year-round.",
            picture: "/husko1.png",
        },
        {
            id: 5,
            href: "/features",
            first: "Irrigation Systems",
            second: "Ensure your garden receives the right amount of water with our professional irrigation system installations and repairs. We'll help you conserve water, optimize plant health, and achieve a sustainable and efficient watering solution.",
            picture: "/irrigation_system_pic.jpg",
        },
        {
            id: 6,
            href: "/features",
            first: "Landscape Design",
            second: "Looking to transform your backyard into an oasis? Our skilled designers will collaborate with you to create a customized landscape design that suits your preferences and complements the existing architecture, ensuring a breathtaking and inviting outdoor space.",
            picture: "/landscape_design_pic.jpg",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 gap-3 justify-items-center">
                {cards.map((card: Card) => (
                    <section
                        key={card.id}
                        className="bg-white shadow-lg dark:bg-gray-900 rounded-md"
                    >
                        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                            <Image
                                className="w-full dark:hidden"
                                src={card.picture}
                                alt="..."
                                width={200}
                                height={200}
                            />
                            <div className="mt-4 md:mt-0">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                    {card.first}
                                </h2>
                                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                    {card.second}
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center bg-secondary-button hover:bg-primary-800 focus:ring-2 focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                                >
                                    Get in touch
                                    <svg
                                        className="ml-2 -mr-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
