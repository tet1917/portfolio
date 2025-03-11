import type { Metadata } from "next";
import { Montserrat, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Header } from "./component/layouts/header/Header";
import { LenisProvider } from "./component/layouts/lenis/LenisProvider";
import { Footer } from "./component/layouts/footer/Footer";
// import { MomentumScroll } from "./component/MomentumScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "tetsu kazui portfolio",
  description: "tetのポートフォリオサイトでち",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${montserrat.variable} ${zenKakuGothicNew.variable}`}>
        <Header />
        <main>
          <LenisProvider>{children}</LenisProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
