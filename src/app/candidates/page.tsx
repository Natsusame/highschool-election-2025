"use client";
import React, { useState } from 'react';
import Header from "../components/Header";
import { FaVoteYea, FaChevronRight, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

const candidates = [
  { id: 1, name: '安倍晋三', photo: '/./chair.webp', position: '会長' },
  { id: 2, name: '岸田文雄', photo: '/./chair.webp', position: '副会長' },
  { id: 3, name: '麻生太郎', photo: '/./chair.webp', position: '会計' },
  { id: 4, name: '石破茂', photo: '/./chair.webp', position: '書記' },
  { id: 5, name: '花田純之介', photo: '/./chair.webp', position: '会長' },
  // 他の候補者データ
];

const CandidatePage = () => {
  const [showModal, setShowModal] = useState(false);

  const renderCandidates = (position: string) => (
    candidates.filter(candidate => candidate.position === position).map(candidate => (
      <div key={candidate.id} className="flex items-center rounded p-4 w-full md:w-1/3 box-border mb-4 justify-center">
        <img src={candidate.photo} alt={candidate.name} className="w-1/2 h-auto rounded-l" />
        <div className="flex flex-col items-center justify-center p-4 w-1/2 bg-green-700 text-white rounded-r" style={{ height: '100%' }}>
          <span className="text-xl font-bold">{candidate.name}</span>
          <Link href={`/candidates/${candidate.id}`} legacyBehavior>
            <a className="mt-2 p-2 bg-white rounded-full transition-transform duration-300 hover:translate-x-2">
              <FaChevronRight className="text-green-700" />
            </a>
          </Link>
        </div>
      </div>
    ))
  );

  const renderSection = (position: string, title: string) => (
    <section className="mb-8">
      <div className="flex items-center w-full mb-4">
        <div className="bg-white text-green-700 font-bold py-1 px-4 relative ml-[10%] inline-block align-middle">
          <div className="absolute left-0 top-0 bottom-0 bg-green-700 ml-1 mr-5 w-2 h-full"></div>
          <h2 className="text-3xl ml-6 mb-2 inline-block align-middle">{title}</h2>
        </div>
        <button className="flex items-center bg-red-700 text-white p-3 border-none rounded ml-4">
          <FaVoteYea className="mr-2" />
          信任投票
        </button>
      </div>
      <div className="flex flex-wrap gap-4 ml-[10%]">
        {renderCandidates(position)}
      </div>
    </section>
  );

  return (
    <div className="p-5 bg-[#F1F1F1] mt-20">
      <Header />
      <header className="flex items-center mb-8">
        <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-[10%] inline-block align-middle">
          <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
          <h2 className="text-3xl ml-6 mb-2 inline-block align-middle">候補者一覧</h2>
        </div>
        <button 
          className="flex items-center bg-white text-black p-3 border border-black rounded ml-4"
          onClick={() => setShowModal(true)}
        >
          <FaInfoCircle className="mr-2" />
          信任投票とは
        </button>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-3/4 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">信任投票とは</h2>
                <p className="mb-4">
                信任投票とは、役職に立候補した人が1人しかいない場合に行われる投票のことです。<br />
                有権者は、その候補者を「信任する（賛成）」か「信任しない（反対）」かを選びます。<br />
                投票の結果、信任が得られればその人が役職に就き、得られなければ別の方法で選び直すことになります。
                </p>
              <button 
          className="bg-red-700 text-white p-2 rounded"
          onClick={() => setShowModal(false)}
              >
          閉じる
              </button>
            </div>
          </div>
        )}
      </header>
      <div className="bg-white p-6 text-center w-3/5 mx-auto mt-4 mb-4">
        <p className="text-lg">
          候補者の下の矢印から各候補者のページに飛べます。
        </p>
      </div>

      {renderSection('会長', '会長立候補者')}
      {renderSection('副会長', '副会長立候補者')}
      {renderSection('会計', '会計立候補者')}
      {renderSection('書記', '書記立候補者')}
    </div>
  );
};

export default CandidatePage;
