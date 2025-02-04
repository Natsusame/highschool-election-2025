"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const candidates = [
  {
    "id": 1,
    "name": "上田怜",
    "photo": "/./ueda.webp",
    "position": "会長",
    "course": "本科コース",
    "class": "M2-2",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "学校の枠を超える、繋がれる学校に",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 2,
    "name": "松本椿",
    "photo": "/./tsubaki.webp",
    "position": "新中三会計",
    "course": "医サイコース",
    "class": "M2-5",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 1,
    "slogan": "相談しやすい学園に。",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 3,
    "name": "鹿郷浬央",
    "photo": "/./kakyou.webp",
    "position": "新中三書記",
    "course": "本科コース",
    "class": "M2-1",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "学園生活をもっと楽しくする！",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 4,
    "name": "尾崎芽羽",
    "photo": "/./ozaki.webp",
    "position": "新中三書記",
    "course": "本科コース",
    "class": "M2-3",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "スローガン未設定",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 5,
    "name": "亀甲愛奈",
    "photo": "/./kikkou.webp",
    "position": "副会長",
    "course": "本科コース",
    "class": "M1-4",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "スローガン未設定",
    "statement": "生徒が作る広尾学園へ",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 6,
    "name": "瓜生妃花",
    "photo": "/./uryu.webp",
    "position": "副会長",
    "course": "AGコース",
    "class": "M1-6",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "誰もが活躍できる学校へ",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 7,
    "name": "名畑政吾",
    "photo": "/./nahata.webp",
    "position": "副会長",
    "course": "AGコース",
    "class": "M1-6",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "笑いあり、涙ありの学校に",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 8,
    "name": "古瀬はるか",
    "photo": "/./kose.webp",
    "position": "新中二会計",
    "course": "本科コース",
    "class": "M1-2",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "毎日に心躍る広尾学園を！",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 9,
    "name": "山田理貴",
    "photo": "/./yamada.webp",
    "position": "新中一会計",
    "course": "本科コース",
    "class": "M1-3",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "自分たちの学校は自分たちで作る",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 10,
    "name": "保田朝陽",
    "photo": "/./houda.webp",
    "position": "新中二書記",
    "course": "本科コース",
    "class": "M1-2",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "生徒が輝ける学園へ",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  },
  {
    "id": 11,
    "name": "髙橋祐希",
    "photo": "/./takahashi.webp",
    "position": "新中二書記",
    "course": "医サイコース",
    "class": "M1-5",
    "club": "無所属",
    "committee": "無所属",
    "electionsWon": 0,
    "slogan": "スローガン未設定",
    "statement": "スピーチ未設定",
    "manifestoVideo": "https://drive.google.com/file/d/xxxxx/preview",
    "posterImage": "https://drive.google.com/uc?export=view&id=xxxxx"
  }
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
    return <div>立候補者ページが見つかりませんでした。</div>;
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
        <p className="text-lg text-gray-700 font-bold mb-2">{candidate.position}立候補者</p>
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
          <li>
        <strong>キャッチフレーズ:</strong> {candidate.slogan}
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
        <div className="flex items-center w-full mb-4">
          <div className="bg-green-700 text-white font-bold py-1 px-4 relative inline-block align-middle flex justify-center items-center">
            <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
            <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">所信表明</h2>
          </div>
        </div>
        <p className="mt-2 text-lg">{candidate.statement}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center w-full mb-4">
          <div className="bg-green-700 text-white font-bold py-1 px-4 relative inline-block align-middle flex justify-center items-center">
            <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
            <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">政見放送</h2>
          </div>
        </div>
        <div className="mt-4 w-full md:w-3/4 mx-auto">
        <iframe
          src={candidate.manifestoVideo}
          className="w-full h-64 md:h-96 border rounded-lg"
          allowFullScreen
        ></iframe>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
