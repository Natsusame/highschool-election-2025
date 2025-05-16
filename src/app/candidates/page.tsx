"use client";
import React, { useState } from 'react';
import Header from "../components/Header";
import { FaVoteYea, FaChevronRight, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const candidates = [
  { id: 1, name: '山藤緑夏', photo: '/./会長_山藤.webp', position: '会長' },
  { id: 2, name: '須賀凪紗', photo: '/./H2副会長_須賀.webp', position: 'h2副会長' },
  { id: 3, name: '加藤清之介', photo: '/./H2副会長_加藤.webp', position: 'h2副会長' },
  { id: 4, name: '東田歩真', photo: '/./H2書記_東田.webp', position: 'h2書記' },
  { id: 5, name: '松澤あさと', photo: '/./H2書記_松澤.webp', position: 'h2書記' },
  { id: 6, name: '山辺馨子', photo: '/./H2会計_山辺.webp', position: 'h2会計' },
  { id: 7, name: '山口泰', photo: '/./H2会計_山口.webp', position: 'h2会計' },
  { id: 8, name: '尾崎太郎', photo: '/./H1副会長_尾崎.webp', position: 'h1副会長' },
  { id: 9, name: '三宅柊平', photo: '/./H1副会長_三宅.webp', position: 'h1副会長' },
  { id: 10, name: '古川貫太', photo: '/./H1副会長_古川.webp', position: 'h1副会長' },
  { id: 11, name: '海老原和虎', photo: '/./H1副会長_海老原.webp', position: 'h1副会長' },
  { id: 12, name: '臼田奈緒', photo: '/./H1副会長_臼田.webp', position: 'h1副会長' },
  { id: 13, name: '伴亜理沙', photo: '/./H1書記_伴.webp', position: 'h1書記' },
  { id: 14, name: '梅景優那', photo: '/./H1書記_梅景.webp', position: 'h1書記' },
  { id: 15, name: '早乙女千尋', photo: '/./H1書記_早乙女.webp', position: 'h1書記' },
  { id: 16, name: '市瀬由宇', photo: '/./H1書記_市瀬.webp', position: 'h1書記' },
  { id: 17, name: '宮本朱理', photo: '/./H1書記_宮本.webp', position: 'h1書記' },
  { id: 18, name: '酒巻仁', photo: '/./H1会計_酒巻.webp', position: 'h1会計' },
  { id: 19, name: ' 花田純之介', photo: '/./H1会計_花田.webp', position: 'h1会計' },
  // 他の候補者データ
];

const CandidatePage = () => {
  const [showModal, setShowModal] = useState(false);

  const renderCandidates = (position: string) => (
    candidates.filter(candidate => candidate.position === position).map(candidate => (
      <div key={candidate.id} className="flex flex-col md:flex-row items-center rounded p-4 w-full md:w-1/3 box-border mb-4 justify-center">
        <img src={candidate.photo} alt={candidate.name} className="w-full md:w-1/2 h-auto rounded-t md:rounded-l md:rounded-t-none" />
        <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/2 bg-green-700 text-white rounded-b md:rounded-r md:rounded-b-none" style={{ height: '100%' }}>
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
      <div className="flex flex-col md:flex-row items-center w-full mb-4">
        <div className="bg-white text-green-700 font-bold py-1 px-4 relative ml-0 md:ml-[10%] inline-block align-middle">
          <div className="absolute left-0 top-0 bottom-0 bg-green-700 ml-1 mr-5 w-2 h-full"></div>
          <h2 className="text-xl md:text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-4">{title}</h2>
        </div>
        <div className="text-black font-bold ml-0 md:ml-4 mt-4 md:mt-0">
            <h2 className="text-xl">
              選出役員数: {position === '会長' || position === 'h2副会長' || position === 'h1副会長' ? '1名' : position === 'h2書記' || position === 'h1書記' ? '2名' : position === 'h2会計' || position === 'h1会計' ? '2名' : ''}
            </h2>
        </div>
        {(position === '会長' || position=== 'h2会計' || position=== 'h1会計' || position=== 'h2書記') && (
          <button className="flex items-center bg-blue-700 text-white p-3 border-none rounded ml-0 md:ml-4 mt-4 md:mt-0">
            <FaVoteYea className="mr-2" />
            信任投票
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-4 ml-0 md:ml-[10%]">
        {renderCandidates(position)}
      </div>
    </section>
  );

  return (
    <div className="p-5 bg-[#F1F1F1] mt-20">
      <Header />
      <header className="flex flex-col md:flex-row items-center mb-8">
        <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-0 md:ml-[10%] inline-block align-middle">
          <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
          <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">候補者一覧</h2>
        </div>
        <button 
          className="flex items-center bg-white text-black p-3 border border-black rounded ml-0 md:ml-4 mt-4 md:mt-0"
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
                投票の結果、信任が得られればその人が役職に就き、得られなければ別の方法で選び直すことになります。<br />
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
      <div className="bg-white p-6 text-center w-full md:w-3/5 mx-auto mt-4 mb-4">
        <p className="text-lg">
          候補者の下の矢印から各候補者のページに飛べます。
        </p>
      </div>

      {renderSection('会長', '会長立候補者')}
      {renderSection('h2副会長', '副会長立候補者(高二)')}
      {renderSection('h1副会長', '副会長立候補者(高一)')}
      {renderSection('h2会計', '会計立候補者(高二)')}
      {renderSection('h1会計', '会計立候補者(高一)')}
      {renderSection('h2書記', '書記立候補者(高二)')}
      {renderSection('h1書記', '書記立候補者(高一)')}
    </div>
  );
};

export default CandidatePage;
