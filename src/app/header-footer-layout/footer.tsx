"use client";

import React from "react";
import { Footer } from "flowbite-react";

export default function DefaultFooter() {
    return (
        // <Footer container classNameName="h-20 bg-green-500 mt-8">
        //     <Footer.Copyright by="Lawn Care™" href="#" year={2023} />
        //     <Footer.LinkGroup>
        //         <Footer.Link href="#">About</Footer.Link>
        //         <Footer.Link href="#">Privacy Policy</Footer.Link>
        //         <Footer.Link href="#">Licensing</Footer.Link>
        //         <Footer.Link href="#">Contact</Footer.Link>
        //     </Footer.LinkGroup>
        // </Footer>

        <footer className="border-2 border-green-500 rounded-lg shadow m-4 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-black-500 sm:text-center">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Husko's Lawn Care™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black-500 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
