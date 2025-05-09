import type { Metadata } from "next";
import { Montserrat, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layouts/header/Header";
import { LenisProvider } from "./components/layouts/lenis/LenisProvider";
import { Footer } from "./components/layouts/footer/Footer";
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
  title: "数井 哲のポートフォリオ",
  description: "私のポートフォリオへようこそ。開発、制作活動を通して生まれた作品を紹介しています。ぜひご覧ください。",
  openGraph:{
    title: "数井 哲のポートフォリオ",
    description:"私のポートフォリオへようこそ。開発、制作活動を通して生まれた作品を紹介しています。ぜひご覧ください。",
    url:"https://number07.net",
    images:[{
      url:"/logo.svg",
      width:1200,
      height:630,
    }],
    locale:"ja_JP",
    type:"website"
  }
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
