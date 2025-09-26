import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constant";
// import { ThemeProvider } from "@/lib/provider";

const font = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <Header />
        {/* <div className="md:pb-36 pb-10 flex-1 max-w-7xl lg:mx-auto md:px-10 px-3 w-full"> */}
        <div className="pt-[90px]">{children}</div>
        {/* </div> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
