import Navigation from "@/components/site/navigation";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";


// const inter = Inter({ subsets: ["latin"] });
const font = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Plura",
  description: "All in one agency sollution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
