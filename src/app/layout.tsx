import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header-footer-layout/header";
import DefaultFooter from "./header-footer-layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Husko Lawn Care",
    description: "Husko Lawn Care",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <DefaultFooter />
            </body>
        </html>
    );
}
