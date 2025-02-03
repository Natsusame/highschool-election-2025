"use client";
import React from 'react';
import Header from "../components/Header";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

const SecretaryPage = () => {
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
              <h1 className="text-4xl ml-6 mb-2 inline-block align-middle">書記</h1>
            </div>
          </div>
          <Image src="/secretary.webp" alt="役職画像" width={300} height={300} className="max-w-full h-auto mt-5" />
          <p className="text-xl font-semibold mt-2">2024年度中学生徒会書記 市瀬由宇</p>
          <div className="mt-4 w-full">
            <div className="flex items-center w-full mb-4">
              <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-[10%] inline-block align-middle flex justify-center items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
                <h2 className="text-3xl ml-6 mb-2 inline-block align-middle">職務内容</h2>
              </div>
            </div>
            <div className="bg-white p-4 mt-2 shadow">
              <p className="text-lg text-black leading-relaxed">
                中学生の生徒会書記の仕事は、主に二つあります。一つは生徒会の会議で話し合われた内容を記録し、議事録としてまとめる、議事録作成です。これにより、後日確認や共有がスムーズになります。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                もう一つは生徒会誌の作成です。毎年の3月に配布される生徒会誌の構成を考え、クラスページの募集などをリードして実施します。これらの活動を通じて、生徒会書記は学校全体の運営を支える重要な役割を果たします。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                責任感と正確さが求められる一方で、仲間と協力しながら学校生活をより良くする充実感も得られる仕事です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretaryPage;
