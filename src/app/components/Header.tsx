"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md py-4">
      <nav className="flex items-center space-x-8 px-4">
        {/* 2025生徒会のタイトル */}
        <div className="text-3xl font-bold text-green-600">
          中学生徒会選挙2024
        </div>

        {/* 候補者プロフィール */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="text-lg font-semibold flex items-center hover:border-b-2 hover:border-green-600 transition duration-300 pb-1"
          >
            候補者プロフィール
            <FaChevronDown className="ml-1" />
          </button>
          <div
            className={`absolute left-0 top-full w-full bg-white border-t border-b border-gray-200 mt-2 py-2 transition-all duration-300 ${
              isProfileOpen ? "animate-fadeIn" : "animate-fadeOut"
            }`}
            style={{
              display: isProfileOpen ? "block" : "none",
              width: "100vw",
              left: "-185%",
              minHeight: "500px",
              top: "calc(100% + 5px)",
            }}
          >
            {/* 候補者（四分割レイアウト） */}
            <div className="grid grid-cols-2 gap-4 px-6 py-4">
              {/* 会長候補者 */}
              <div className="bg-gray-100 rounded-lg p-4 text-xl font-bold text-green-600 border-b-2 border-green-600 hover:bg-green-100 transition duration-300">
                <div>生徒会長候補者</div>
                <ul className="space-y-2 mt-2">
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                      M3-2 早乙女千尋
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                    M3-7 小野翔太郎
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                    M3-7 海老原和虎
                    </button>
                  </li>
                </ul>
              </div>

              {/* 副会長候補者 */}
              <div className="bg-gray-100 rounded-lg p-4 text-xl font-bold text-green-600 border-b-2 border-green-600 hover:bg-green-100 transition duration-300">
                <div>生徒会副会長候補者</div>
                <ul className="space-y-2 mt-2">
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                    M3-7 山口楚奈
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                      M3-7 堀内水月
                    </button>
                  </li>
                </ul>
              </div>

              {/* 会計候補者 */}
              <div className="bg-gray-100 rounded-lg p-4 text-xl font-bold text-green-600 border-b-2 border-green-600 hover:bg-green-100 transition duration-300">
                <div>生徒会会計候補者</div>
                <ul className="space-y-2 mt-2">
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                    M3-2 花田純之介
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                      M3-7 小林拳
                    </button>
                  </li>
                </ul>
              </div>

              {/* 書記候補者 */}
              <div className="bg-gray-100 rounded-lg p-4 text-xl font-bold text-green-600 border-b-2 border-green-600 hover:bg-green-100 transition duration-300">
                <div>生徒会書記候補者</div>
                <ul className="space-y-2 mt-2">
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                      M3-6 市瀬由宇
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                      M3-7 三宅柊平
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 選挙スケジュール */}
        <Link
          href="/schedule"
          className="text-lg font-semibold hover:border-b-2 hover:border-green-600 transition duration-300 pb-1"
        >
          選挙スケジュール
        </Link>

        {/* 生徒会について */}
        <div className="relative">
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className="text-lg font-semibold flex items-center hover:border-b-2 hover:border-green-600 transition duration-300 pb-1"
          >
            生徒会について
            <FaChevronDown className="ml-1" />
          </button>
          <div
            className={`absolute left-0 top-full w-full bg-white border-t border-b border-gray-200 mt-2 py-2 transition-all duration-300 ${
              isAboutOpen ? "animate-fadeIn" : "animate-fadeOut"
            }`}
            style={{
              display: isAboutOpen ? "block" : "none",
              width: "100vw",
              left: "-490%",
              minHeight: "500px",
              top: "calc(100% + 5px)",
            }}
          >
            {/* 役職紹介 */}
            <div className="px-6 py-4 ml-10 text-xl font-bold text-green-600 bg-gray-100 rounded-lg mb-2 border-b-2 border-green-600 w-48 text-left">
              役職紹介
            </div>
            <ul className="px-6 space-y-2">
              <li>
                <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                  生徒会長とは？ 2024年度生徒会長 M3-2早乙女千尋からのメッセージ
                </button>
              </li>
              <li>
                <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                  生徒会副会長とは？ 2024年度生徒会副会長 M3-7山口楚奈からのメッセージ
                </button>
              </li>
              <li>
                <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                  生徒会書記とは？ 2024年度生徒会長 M3-7市瀬由宇からのメッセージ
                </button>
              </li>
              <li>
                <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                  生徒会会計とは？ 2024年度生徒会長 M3-2花田純之介からのメッセージ
                </button>
              </li>
            </ul>
            {/* 生徒会規則 */}
            <div className="px-6 py-4 ml-10 text-xl font-bold text-green-600 bg-gray-100 rounded-lg mb-2 border-b-2 border-green-600 w-48 text-left">
              生徒会規則
            </div>
            <ul className="px-6 space-y-2">
              <li>
                <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                  2024年度広尾学園生徒会則
                </button>
              </li>
              <li>
                <button className="w-full text-left text-lg font-semibold text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg transition">
                2024年度広尾学園生徒会役員選挙細則
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
