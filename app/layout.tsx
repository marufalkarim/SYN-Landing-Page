import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Transform Your Mind | The Anti-Gravity Blueprint",
    description: "The Complete 20-Chapter Blueprint to Break Free from Mental Patterns",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen relative overflow-x-hidden selection:bg-purple-500/30">
                {children}
            </body>
        </html>
    );
}
