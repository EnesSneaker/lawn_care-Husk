"use client";

import React from "react";

export default function DefaultFooter() {
    return (
        <footer className="border-2 border-green-500 rounded-lg shadow m-4 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-black-500 sm:text-center">
                    © 2023{" "}
                    <a href="#" className="hover:underline">
                        Alan&apos;s Lawn Care™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black-500 sm:mt-0">
                    <li>
                        <a
                            href="#about"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.freeprivacypolicy.com/live/4b397cdd-0f07-4c13-83ca-042e872b2121"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
