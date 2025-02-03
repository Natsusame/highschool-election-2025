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
              <h1 className="text-4xl font-bold text-black ml-[10%]">会計</h1>
            </div>
          </div>
            <Image src="/chair.webp" alt="役職画像" width={300} height={300} className="max-w-full h-auto mt-5" />
            <p className="text-xl font-semibold mt-2">2024年度中学生徒会会計 花田純之介</p>
          <div className="mt-4 w-full">
            <div className="bg-green-700 w-[15%] text-white font-bold py-2 px-4 h-12 relative ml-[5%]">
              <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2"></div>
              <h2 className="text-3xl ml-6 mb-2">職務内容</h2>
            </div>
            <div className="bg-white p-4 mt-2 shadow">
                <p className="text-lg text-black leading-relaxed">
                会計の主な仕事は、「予算の立案、金銭の出納、決算の報告などを行う。」と生徒会則に記載されているように、この学校の全生徒からいただいている生徒会費を、部活動・委員会・部門への助成やけやき祭の運営など適切な用途で使用するために、予算・決算の作成や管理、履行を行うことです。
                </p>
                <p className="text-lg text-black leading-relaxed mt-4">
                流れとしては、まず項目ごとに予算の立案を行います。その中で部活動など多くの生徒がかかわる場合には、代表者へのガイダンスやヒアリング、予算申請書の確認などの作業があります。
                会計役員で予算の草案を作成した後は、会計顧問の先生との協議のうえで予算を決定します。予算の決定後は予算の適切な履行と、実際の領収書と照らし合わせて決算を行っていきます。
                </p>
                <p className="text-lg text-black leading-relaxed mt-4">
                2月から4月にかけて生徒総会での決算報告の準備と次年度予算案の立案を、6月から9月にかけてけやき祭の予算作成を、10月から12月はけやき祭の決算とクリスマス企画の予算作成と、ほぼ一年中会計ならではの仕事があります。
                </p>
                <p className="text-lg text-black leading-relaxed mt-4">
                生徒会費に関する全員の希望を叶えることや、また全校生徒からいただいているお金を適切に使用するために、細かいステップをこなさなければならないことは会計において非常に難しいことです。やれることが多い反面、非常に重い責任が伴い、覚悟が必要な役職です。
                しかしその分大きな達成感を味わうことができます。仕事を多くこなすことで生徒会にかかわる仲間と仲が良くなれたり、生徒会に早く慣れることができるという魅力もある役職です。
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairPage;
