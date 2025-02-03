"use client";
import React from 'react';
import Header from "../components/Header";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

const ChairPage = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/overview');
  };

  return (
    <>
      <Header />
      <div className="p-4 bg-gray-100 mt-20">
        <div className="flex justify-start mt-2">
          <button
            className="flex items-center bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
            onClick={handleBackClick}
          >
            <FaArrowLeft className="h-5 w-5 mr-2" />
            役職紹介へ
          </button>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="flex items-center w-full mb-4">
            <div className="bg-white text-green-700 font-bold py-1 px-4 relative ml-[10%] inline-block align-middle">
              <div className="absolute left-0 top-0 bottom-0 bg-green-700 ml-1 mr-5 w-2 h-full"></div>
              <h1 className="text-4xl ml-6 mb-2 inline-block align-middle">生徒会長</h1>
            </div>
          </div>
          <Image src="/chair.webp" alt="役職画像" width={300} height={300} className="max-w-full h-auto mt-5" />
          <p className="text-xl font-semibold mt-2">2024年度中学生徒会長 早乙女千尋</p>
          <div className="mt-4 w-full">
            <div className="flex items-center w-full mb-4">
                <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-[10%] inline-block align-middle flex justify-center items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
                <h2 className="text-3xl ml-6 mb-2 inline-block align-middle">職務内容</h2>
                </div>
            </div>
            <div className="bg-white p-4 mt-2 shadow">
              <p className="text-lg text-black leading-relaxed">
                生徒会長の仕事は、学校全体の生徒を代表し、生徒会活動を円滑に進めるためのリーダーシップを発揮する役割を担います。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                けやき祭などの学校行事において、準備をリードしたり各役員に仕事を分担することを初めとし、行事を成功させるために準備を行います。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                また他の役員や委員と協力し、活動を推進します。責任感を持ち率先して行動することで、周囲を引きつける存在になります。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                しかし、会長という役職は会計や書記とは少し違い、専門的な仕事はありません。自分で仕事を探すなど活動に対する積極性が必要です。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                最後に生徒会長として模範的な行動を取ることも大切です。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                これらの役割を通じて、生徒会長は学校の活性化と生徒のためのより良い環境作りに貢献しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairPage;
