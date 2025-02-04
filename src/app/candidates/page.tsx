"use client";
import React, { useState } from 'react';
import Header from "../components/Header";
import { FaVoteYea, FaChevronRight, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

const candidates = [
  { id: 1, name: '上田怜', photo: '/./ueda.webp', position: '会長' },
  { id: 2, name: '松本椿', photo: '/./tsubaki.webp', position: 'm3会計' },
  { id: 3, name: '鹿郷浬央', photo: '/./kakyou.webp', position: 'm3書記' },
  { id: 4, name: '尾崎芽羽', photo: '/./ozaki.webp', position: 'm3書記' },
  { id: 5, name: '亀甲愛奈', photo: '/./kikkou.webp', position: '副会長' },
  { id: 6, name: '瓜生妃花', photo: '/./uryu.webp', position: '副会長' },
  { id: 7, name: '名畑政吾', photo: '/./nahata.webp', position: '副会長' },
  { id: 8, name: '古瀬はるか', photo: '/./kose.webp', position: 'm2会計' },
  { id: 9, name: '山田理貴', photo: '/./yamada.webp', position: 'm2会計' },
  { id: 10, name: '保田朝陽', photo: '/./houda.webp', position: 'm2書記' },
  { id: 11, name: '髙橋祐希', photo: '/./takahashi.webp', position: 'm2書記' },
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
          <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-4">{title}</h2>
        </div>
        <div className="text-black font-bold ml-4">
          <h2 className="text-xl">選出役員数: {position === '会長' || position === '副会長' || position === 'm3会計' || position === 'm2会計' || position === 'm2書記' ? '1名' : '2名'}</h2>
        </div>
        {(position === '会長' || position === 'm3会計'|| position === 'm3書記') && (
          <button className="flex items-center bg-red-700 text-white p-3 border-none rounded ml-4">
            <FaVoteYea className="mr-2" />
            信任投票
          </button>
        )}
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
          <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">候補者一覧</h2>
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
      <div className="bg-white p-6 text-center w-3/5 mx-auto mt-4 mb-4">
        <p className="text-lg">
          候補者の下の矢印から各候補者のページに飛べます。
        </p>
      </div>

      {renderSection('会長', '会長立候補者(新中三)')}
      {renderSection('副会長', '副会長立候補者(新中二)')}
      {renderSection('m3会計', '会計立候補者(新中三)')}
      {renderSection('m2会計', '会計立候補者(新中二)')}
      {renderSection('m3書記', '書記立候補者(新中三)')}
      {renderSection('m2書記', '書記立候補者(新中二)')}
    </div>
  );
};

export default CandidatePage;
