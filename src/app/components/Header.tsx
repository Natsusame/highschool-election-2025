"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md py-4">
      <nav className="flex items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="text-3xl font-bold text-green-600">
          <Image
            src="/2025-election-highschool.png"
            alt="Header Logo"
            width={200}
            height={300}
            className="mr-4"
          />
        </Link>

        {/* ハンバーガーメニュー */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-600 focus:outline-none"
          >
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* ナビメニュー */}
        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-8 ${isOpen ? "flex" : "hidden"}`}>
          <Link
            href="/overview"
            className="text-lg font-semibold transition duration-300 pb-1 text-green-600"
          >
            役職紹介
          </Link>

          <Link
            href="/candidates"
            className="text-lg font-semibold transition duration-300 pb-1 text-green-600"
          >
            候補者一覧
          </Link>

        </div>
      </nav>

      <style jsx>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #38a169;
          transition: all 0.3s ease-in-out;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>
    </header>
  );
};

export default Header;
