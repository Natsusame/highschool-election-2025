import Header from "./components/Header";
import Timer from "./components/Timer";
import Image from "next/image";
import News from "./components/News";
import Results from "./components/Results";
import { SlArrowRight } from "react-icons/sl";

const Home = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Header />
      <div className="relative">
        <Image
          src="/header-image.webp"
          alt="Header Background"
          width={1920} 
          height={600}
          className="mt-10 z-0 object-cover shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-red-600 text-white font-bold py-4 px-8 h-14 shadow-md hover:shadow-lg transition duration-300 rounded-full mt-80 flex items-center">
              詳しくはこちら <SlArrowRight className="ml-2" />
            </button>
        </div>
      </div>
      <main className="p-4">
        {/* ニュースセクション */}
        <News />

        {/* 結果公示セクション */}
        <Results />
        
        {/* カウントダウン */}
        <div className="bg-green-700 w-[15%] text-white font-bold py-2 px-4 h-12 relative ml-[10%]">
          <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2"></div>
          <h2 className="text-3xl ml-6 mb-2">選挙日程</h2>
        </div>
        <div className="bg-white p-6 text-center w-3/5 mx-auto border-t-4 border-green-600 mt-[5%] mb-[5%]">
        <h4 className="text-xl font-semibold">立候補受付開始日   立候補受付締め切り日   選挙運動開始日   選挙運動終了日</h4>
        <h4 className="text-4xl text-green-700 font-semibold">1月00日   1月99日   2月00日   2月19日</h4>
         </div>
        <div className="flex justify-center space-x-4 mt-[2%] mb-[10%]">
          <div className="bg-white p-6 text-center w-[30%] border-t-4 border-green-600">
            <h4 className="text-xl font-semibold">投票日 開票日</h4>
            <h4 className="text-4xl text-green-700 font-semibold">2月20日 2月99日</h4>
          </div>
          <div className="bg-white p-6 text-center w-[30%] border-t-4 border-green-600">
            <Timer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
