"use client";

import { useState } from "react";

export default function Faq() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleAnswer1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAnswer2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleAnswer3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleAnswer4 = () => {
        setIsOpen4(!isOpen4);
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            onClick={toggleAnswer1}
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="flex text-lg font-semibold text-black">
                                {" "}
                                How often should I water my lawn?{" "}
                            </span>

                            <svg
                                className="w-6 h-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen1 ? (
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Proper watering is crucial for a healthy
                                    lawn. In general, it is recommended to water
                                    deeply but infrequently. Water your lawn 1-2
                                    times per week, providing around 1 inch of
                                    water each time. Adjust the frequency based
                                    on weather conditions and the needs of your
                                    specific grass type.
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            onClick={toggleAnswer2}
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="flex text-lg font-semibold text-black">
                                {" "}
                                How can I prevent weeds from invading my lawn?{" "}
                            </span>

                            <svg
                                className="w-6 h-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen2 ? (
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Weed control starts with maintaining a
                                    healthy lawn. Regularly mowing at the
                                    appropriate height, fertilizing properly,
                                    and watering correctly can help your grass
                                    outcompete weeds. Additionally, applying
                                    pre-emergent herbicides and manually
                                    removing weeds can be effective weed
                                    prevention strategies.
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <div className="">
                            <button
                                type="button"
                                onClick={toggleAnswer3}
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            >
                                <span className="flex text-lg font-semibold text-black">
                                    {" "}
                                    When should I aerate my lawn?{" "}
                                </span>

                                <svg
                                    className="w-6 h-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isOpen3 ? (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p>
                                        Aeration involves creating small holes
                                        in the soil to improve air circulation,
                                        water absorption, and nutrient uptake.
                                        The best time to aerate your lawn is
                                        during the growing season when the grass
                                        is actively growing. For cool-season
                                        grasses, early spring or fall is ideal.
                                        For warm-season grasses, late spring or
                                        early summer is recommended.
                                    </p>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            onClick={toggleAnswer4}
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="flex text-lg font-semibold text-black">
                                {" "}
                                How often should I mow my lawn?{" "}
                            </span>

                            <svg
                                className="w-6 h-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isOpen4 ? (
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    The frequency of lawn mowing depends on the
                                    growth rate of your grass and the desired
                                    height. As a general rule, aim to mow your
                                    lawn when the grass reaches about one-third
                                    higher than its recommended mowing height.
                                    For most lawns, this means mowing once every
                                    1-2 weeks during the growing season.
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <p className="text-center text-gray-600 textbase mt-9">
                    Didnt find the answer you are looking for?{" "}
                    <a
                        href="/#contact"
                        title=""
                        className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                    >
                        Contact us
                    </a>
                </p>
            </div>
        </section>
    );
}
