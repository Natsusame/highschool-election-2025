import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "高校生徒会役員選挙 広報サイト",
  description: "広尾学園高等学校 2025年度新生徒会役員選挙 広報サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
