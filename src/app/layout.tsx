import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header-footer-layout/header";
import DefaultFooter from "./header-footer-layout/footer";
import Banner from "./components/banner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Alan precise lawn care",
    description: "Alan precise lawn care",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Banner />
                <Header />
                {children}
                <ToastContainer />
                <DefaultFooter />
            </body>
        </html>
    );
}
