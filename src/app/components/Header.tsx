"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md py-4">
      <nav className="flex items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="text-3xl font-bold text-green-600">
          <Image
            src="/2024-election.webp"
            alt="Header Logo"
            width={200}
            height={300}
            className="mr-4"
          />
        </Link>

        {/* ナビメニュー */}
        <div className="flex items-center space-x-8">

          <Link
            href="/overview"
            className="text-lg font-semibold hover:border-b-2 hover:border-green-600 transition duration-300 pb-1 text-green-600"
          >
            選挙とは？
          </Link>

          <Link
            href="/candidates"
            className="text-lg font-semibold hover:border-b-2 hover:border-green-600 transition duration-300 pb-1 text-green-600"
          >
            候補者一覧
          </Link>

          <Link
            href="https://drive.google.com/file/d/1UTIbJA8vp0z4_pXENxEnEYMmFaOkS9Ng/view?usp=sharing"
            className="text-lg font-semibold hover:border-b-2 hover:border-green-600 transition duration-300 pb-1 text-green-600"
          >
              中学生徒会役員選挙細則
          </Link>
       </div>
      </nav>
    </header>
  );
};

export default Header;
