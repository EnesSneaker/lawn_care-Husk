"use client";
import React from "react";
import { Card } from "flowbite-react";

interface Card {
    id: number;
    href: string;
    first: string;
    second: string;
}

export default function DefaultCard() {
    const cards: Card[] = [
        {
            id: 1,
            href: "/features",
            first: "Lawn Maintenance",
            second: "Keep your grass healthy and manicured with our expert mowing and edging services.",
        },
        {
            id: 2,
            href: "/features",
            first: "Trimming and Pruning",
            second: "Shape and maintain the beauty of your plants and shrubs with precision.",
        },
        {
            id: 3,
            href: "/features",
            first: "Mulching and Bed Maintenance",
            second: "Enhance your flower beds with fresh mulch, weed control, and moisture retention.",
        },
        {
            id: 4,
            href: "/features",
            first: "Seasonal Cleanup",
            second: "Prepare your garden for every season with leaf removal and thorough cleanups.",
        },
        {
            id: 5,
            href: "/features",
            first: "Irrigation Systems",
            second: "Optimize watering efficiency with professional installation and repair of irrigation systems.",
        },
        {
            id: 6,
            href: "/features",
            first: "Landscape Design",
            second: "Create a breathtaking outdoor space that complements your style and architecture.",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                {cards.map((card: Card) => (
                    <div key={card.id}>
                        <Card className="max-w-sm" href={card.href}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {card.first}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {card.second}
                            </p>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}
