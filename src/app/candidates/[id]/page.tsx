"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const candidates = [
  {
    id: 1,
    name: "安倍晋三",
    photo: "/./chair.webp",
    position: "会長",
    course: "SGコース",
    class: "M2-6",
    club: "ディベート部",
    committee: "生徒会",
    electionsWon: 1,
    slogan: "アベノミクス始動",
    statement:
      "アベノミクスの第1と第2の矢である金融政策と財政政策によって円安・株高を実現し、第3の矢である成長戦略によって企業の業績が回復",
    manifestoVideo: "https://drive.google.com/file/d/xxxxx/preview",
    posterImage: "https://drive.google.com/uc?export=view&id=xxxxx",
  },
  // 他の候補者データ
];

interface Candidate {
  id: number;
  name: string;
  photo: string;
  position: string;
  course: string;
  class: string;
  club: string;
  committee: string;
  electionsWon: number;
  slogan: string;
  statement: string;
  manifestoVideo: string;
  posterImage: string;
}

const CandidateDetail = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const params = useParams();
  const id = params.id as string; // 型を明示的に `string` に

  useEffect(() => {
    if (id) {
      const foundCandidate = candidates.find(
        (c) => c.id.toString() === id
      );
      setCandidate(foundCandidate || null);
    }
  }, [id]);

  if (!candidate) {
    return <div>Candidate not found.</div>;
  }

  return (
    <div className="p-5 bg-[#F1F1F1] mt-20 min-h-screen">
      <Header />
      <div className="w-4/5 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Link href="/candidates">
        <button className="flex items-center text-green-700 mb-4">
        <FaArrowLeft className="mr-2" /> 候補者一覧へ戻る
        </button>
      </Link>

      <div className="flex flex-col md:flex-row items-start">
        <div className="flex-1">
        <p className="text-lg text-gray-700">{candidate.position}立候補者</p>
        <h1 className="text-4xl text-green-700 font-bold">{candidate.name}</h1>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-2">プロフィール</h2>
          <ul className="mt-4 text-lg">
          <li>
        <strong>所属コース:</strong> {candidate.course}
          </li>
          <li>
        <strong>所属クラス:</strong> {candidate.class}
          </li>
          <li>
        <strong>部活:</strong> {candidate.club}
          </li>
          <li>
        <strong>委員会:</strong> {candidate.committee}
          </li>
          <li>
        <strong>当選回数:</strong> {candidate.electionsWon} 回
          </li>
          </ul>
        </div>
        </div>
        <div className="flex-shrink-0 ml-6">
        <img
          src={candidate.photo}
          alt={candidate.name}
          className="w-80 h-auto rounded-lg shadow-lg mr-20"
        />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold border-b pb-2">キャッチフレーズ</h2>
        <p className="mt-2 text-xl font-bold text-green-700">
        {candidate.slogan}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold border-b pb-2">所信表明</h2>
        <p className="mt-2 text-lg">{candidate.statement}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold border-b pb-2">政見放送</h2>
        <div className="mt-4 w-full md:w-3/4 mx-auto">
        <iframe
          src={candidate.manifestoVideo}
          className="w-full h-64 md:h-96 border rounded-lg"
          allowFullScreen
        ></iframe>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold border-b pb-2">ポスター</h2>
        <div className="mt-4 w-full md:w-3/4 mx-auto">
        <img
          src={candidate.posterImage}
          alt={`${candidate.name} のポスター`}
          className="w-full rounded-lg shadow-lg"
        />
        </div>
      </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
