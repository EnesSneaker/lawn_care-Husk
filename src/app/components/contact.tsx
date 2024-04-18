"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import twilio from "twilio";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        }).then(() => {
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message sent successfully.");
        });

        fetch("/api/send-sms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        }).then(() => {});
    };

    return (
        <form
            className="px-4 mx-auto md:px-6 lg:px-8 max-w-7xl"
            id="contact"
            onSubmit={handleOnSubmit}
        >
            <div className="pb-4 lg:pb-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Reach out to us and lets turn your garden dreams into a
                    stunning reality.
                </p>
                <div className="space-y-8">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            style={{ fontSize: "16px" }}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Enter your name"
                            required
                            onChange={(e) => setName(e.target.value)}
                            pattern="^[a-zA-Z -]+$"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            style={{ fontSize: "16px" }}
                            className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="yourname@hotmail.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium  dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            style={{ fontSize: "16px" }}
                            rows={6}
                            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type your message..."
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-green-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contact;
