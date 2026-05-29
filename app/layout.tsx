import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "SuperGrok Help｜Grok 国内使用、购买与开通教程",
    template: "%s｜SuperGrok Help",
  },
  description:
    "SuperGrok Help 提供 Grok / SuperGrok 国内使用教程、购买说明、账号服务介绍、常见问题与新手指南，帮助用户了解 Grok AI 的使用方式。",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
