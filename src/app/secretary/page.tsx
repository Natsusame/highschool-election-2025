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
          <div className="flex items-center w-full relative">
            <div className="bg-white w-[15%] p-2">
              <div className="bg-green-700 h-10 w-1 absolute left-[1%]"></div>
              <h1 className="text-4xl font-bold text-black ml-[10%]">書記</h1>
            </div>
          </div>
            <Image src="/chair.webp" alt="役職画像" width={300} height={300} className="max-w-full h-auto mt-5" />
            <p className="text-xl font-semibold mt-2">2024年度中学生徒会書記 市瀬由宇</p>
          <div className="mt-4 w-full">
            <div className="bg-green-700 w-[15%] text-white font-bold py-2 px-4 h-12 relative ml-[5%]">
              <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2"></div>
              <h2 className="text-3xl ml-6 mb-2">職務内容</h2>
            </div>
            <div className="bg-white p-4 mt-2 shadow">
                  <p className="text-lg text-black leading-relaxed mb-4">
                  中学生の生徒会書記の仕事は、主に二つあります。一つは生徒会の会議で話し合われた内容を記録し、議事録としてまとめる、議事録作成です。これにより、後日確認や共有がスムーズになります。
                  </p>
                  <p className="text-lg text-black leading-relaxed mb-4">
                  もう一つは生徒会誌の作成です。毎年の3月に配布される生徒会誌の構成を考え、クラスページの募集などをリードして実施します。これらの活動を通じて、生徒会書記は学校全体の運営を支える重要な役割を果たします。
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                  責任感と正確さが求められる一方で、仲間と協力しながら学校生活をより良くする充実感も得られる仕事です。
                  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairPage;
