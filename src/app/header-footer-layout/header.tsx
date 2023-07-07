import { FaPhone } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <nav className="bg-green-500 border-gray-200 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Husko's Lawn Care
                        </span>
                    </a>
                    <div className="flex items-center">
                        <a
                            href="tel:5541251234"
                            className="mr-6 text-sm dark:text-white hover:underline flex items-center"
                        >
                            <span className="ml-1">(555) 412-1234</span>
                            <FaPhone className="mr-1" />
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="bg-green-200 dark:bg-gray-500">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/features"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
