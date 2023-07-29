import { FaPhone } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <nav className="bg-header border-gray-200 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Huskos Lawn Care
                        </span>
                    </a>
                    <div className="flex items-center">
                        <a
                            href="tel:5541251234"
                            className="mr-3 text-sm dark:text-white hover:underline flex items-center"
                        >
                            <span>(555) 412-1234</span>
                        </a>
                        <div className="mr-3 text-sm dark:text-white hover:underline flex items-center">
                            |
                        </div>
                        <a
                            href="email:husko@business.com"
                            className="mr-3 text-sm dark:text-white hover:underline flex items-center"
                        >
                            <span>husko@business.com</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
