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
    "statement": "こんにちは、M2-2-4の上田怜です。私が生徒会長に立候補した理由は広尾学園をより良い学校にしたいという思いがあるからです。より良い学校というのは、自分の意見を気兼ねなく言えて、クラスや学年関係なく交流できるような学校です。これまでクラスで培ってきたリーダーシップを活かし、学校全体の意見をまとめ、そして生徒ひとりひとりがより充実した学校生活を送れるようにしたいと考えています。私だからこそできることを実現し、皆さんと共に広尾学園をさらに素晴らしい学校にしていきたいです。どうぞよろしくお願いします！",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "こんにちは、会計候補の中学2年5組松本椿です。私は、去年生徒会役員を経験して生徒と役員の距離が遠いと感じたため、生徒が気軽に相談をできる学校を作りたいと思っています。そのために、アイデアボックスの周知や、相談しやすい意見箱にするためにシステムの改善をしたり、私自身が生徒と役員の橋渡し役になりたいと思っています。更に、会計として去年の経験を活かしけやき祭やクリスマス会の予算を管理し、課題を改善したいと思います。応援よろしくお願いします！",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "生徒会に立候補した鹿郷浬央です。私が生徒会に立候補した理由は、より快適で楽しい学校生活を実現するためです。私は、学校生活で不便に感じたところをどんどん改善していきます。例として、内庭にベンチを増設し、食堂の混雑緩和を目指すことや、スポーツフェスティバルのモニターの増設、けやき祭の演技発表の座席やチケットの取得方法の改善などを考えています。皆さんの学校生活がより楽しくなるよう努力するので、応援よろしくお願いします。",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "私はこの学校生活でクラスの人達や担任の先生をはじめいろんな人に支えていただきました。そして、今度は私が支える側になりたいと思い立候補しました。生徒会とは生徒を代表しつつも、陰ながら支えていく仕事だとこの約2年間を通して感じました。ですから、私が書記になった暁には生徒会を支えつつ、学校全体も支えていきたいと思います。",
    "manifestoVideo": "https://drive.google.com/file/d/1Xlm_1uj-b1JdePSyGBdKzfs9rICHABQR/preview"
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
    "statement": "こんにちは、副会長候補の亀甲愛奈です。私は、様々な仕事をされている生徒会の先輩方を見て、生徒会の仕事にやりがいがありそうだと感じ、学校を私なりにより良くしたいと思いました。そこで、会長を補佐する立場となる副会長であれば、私の強みである行動力を活かせると考え、副会長に立候補することを決めました。私が副会長になったら、「生徒会のやっていることをわかりやすくする」「全校生徒の意見を直接生徒会へ届ける方法を明確に提示する」という2つのことを柱に活動をしたいと考えています。あなたの一票で学校が変わります！ぜひ、応援をよろしくお願いします。",
    "manifestoVideo": "https://drive.google.com/file/d/1q_W14bAKsR9NAa-qA8jeYfDoCgw9cmhz/preview"
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
    "statement": "こんにちは、生徒会副会長に立候補します中学1年瓜生 妃花です。私はけやき祭や前夜祭で運営に関わっており、自分も生徒会に入り学校づくりに貢献したいと思い立候補しました。そして、私は、コース関係なく誰もが意見を発信し活躍できる学校をつくりたいと思います。私はこのような学校を作るために、生徒会HPの改革を行います。主に、HPで委員会やクラブを紹介し、様々な人に興味を持ってもらい、HPを意見を発信できるようなばにしたいと思います。誰よりも力強い縁の下の力持ちになり、支えていきます。関心を持ってくれるとありがたいです。ぜひ投票よろしくお願いします。",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "皆さんこんにちは。この度、生徒会副会長に立候補します。1年6組の名畑政吾です。部活はバスケットボール部と英語ディベート部に所属しています。私は広尾学園を活発でみんなが協力できる学校にすることを目指しています。副会長になったら、笑顔のある学校にするために挨拶運動や意見箱をや意見箱を活用します。生徒全員が挨拶を徹底することで、生徒の繋がりを深め、意見箱で皆さんからアイデアを積極的に取り入れることができます。そして先輩方が築き上げた生徒会をより良くし、目標である笑顔の絶えない学校にする目標を達成したいです。皆様の清き一票をよろしくお願いします。",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "中学1年2組の古瀬遥です。私は広尾学園中学校に入学してからこの8ヶ月間、様々な経験をしてきました。その中でも特に印象深かったのはけやき祭でした。私はけやき祭を行っていく中で、けやき祭を企画、実行している生徒会の皆様の姿や、朝夕と部活に励む同級生の姿を見て、自分も一歩踏み出して何かをしてみたいと思うようになりました。周りの人たちが準備してくれたことをただこなしていくのではなく、これからは自分も生徒会の一員として関わり、この学校の魅力をさらに引き出していきたいと思い、私は生徒会に立候補します。社会の環境が大きく変わっていく中で、生徒会活動を通じて、広尾学園中学校に通う生徒のみんながこの学校で過ごす時間を更に楽しいものにしていきたいと考えます。学校に通い、日々成長していくことに少しでも役に立つことができる生徒会運営にあたっては予算と日々の記録が必要です。予算管理、報告書作成といった仕事を皆様の意見を聞きながら、周りの生徒会メンバーと助け合い、時には議論しながら、協力とコミュニケーションをもとに活動して参りたいと思います。 これからも、そしていつまでも楽しい広尾学園を！ よろしくお願い致します。",
    "manifestoVideo": "https://drive.google.com/file/d/1dZaPrDgOhCsHNwvG0GOJAPN_ZST7hQhy/preview"
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
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "こんにちは。1年2組の保田朝陽です。この度私は書記に立候補します。私が生徒会に立候補する理由は、広尾学園での学園生活をより充実し、楽しいものにするためです。私はそのために、様々なことをしたいと思っています。そこで最も大切なのは互いを尊重し合うことだと考えます。具体的には、生徒同士の交流を深めるために他学年や他のコースとの共同プログラムをする場を設けたいと思っています。私は人の意見を聞き、まとめるのに自信があるので書記としてそれを活かし、学校に貢献したいです。尽力してまいります。",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
    "statement": "こんにちは。この度、生徒会書記に立候補しました、中学1年五組の髙橋祐希です。私が生徒会に入りたいと思った理由は2つあります。1つは、人脈を広げたいからです。生徒会役員になれば、学年を問わず、多くの人と交流できると考えました。もう一つは、広尾学園のことをもっと知ってもらいたいからです。書記の主な仕事は、生徒会誌の作成です。生徒会誌を通してクラスや部活をもっと知ってもらうことで、互いの親睦を深めることができると考えています。ぜひ、ご投票お願いします。",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
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
            {/* <li>
          <strong>部活:</strong> {candidate.club}
            </li>
            <li>
          <strong>委員会:</strong> {candidate.committee}
            </li> */}
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
