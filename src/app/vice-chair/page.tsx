"use client";
import React from 'react';
import Header from "../components/Header";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

const ViceChairPage = () => {
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
              <h1 className="text-4xl ml-6 mb-2 inline-block align-middle">副会長</h1>
            </div>
          </div>
          <Image src="/vice-chair.webp" alt="役職画像" width={300} height={300} className="max-w-full h-auto mt-5" />
          <p className="text-xl font-semibold mt-2">2024年度中学生徒会副会長 東明里</p>
          <div className="mt-4 w-full">
            <div className="flex items-center w-full mb-4">
                <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-[10%] inline-block align-middle flex justify-center items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
                <h2 className="text-3xl ml-6 mb-2 inline-block align-middle">職務内容</h2>
                </div>
            </div>
            <div className="bg-white p-4 mt-2 shadow">
              <p className="text-lg text-black leading-relaxed">
                生徒会副会長は、生徒会活動の円滑な運営を支える一方で、「具体的に何をする役職なの？」と思われがちだと思います（私も思いました）。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                生徒会則上、会長の補佐役とありますが、会計のように明確に割り当てられた仕事が少ない分、自分から積極的に仕事に手を出していくことがとても大事です！
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                企画書を書いたり、外郭団体（PTA・後援会・同窓会）や委員会と協力したり、企画の運営に関わるなど、現場でも幅広く動くのが副会長の大きな特徴です。
              </p>
              <p className="text-lg text-black leading-relaxed mt-2">
                次期副会長を目指す皆さんには、この役職を通してリーダーシップとコミュニケーション力を発揮しつつ、更にその力を養いながら、学校全体に貢献してほしいと思います！
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViceChairPage;
