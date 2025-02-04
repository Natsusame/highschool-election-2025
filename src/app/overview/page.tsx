"use client";
import Header from "../components/Header";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="bg-[#F1F1F1]">
      <Header />
      <main className="p-4 mt-20">

        
        {/* 選挙の仕組み */}
        <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-[10%] inline-block align-middle">
          <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
          <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">選挙の仕組み</h2>
        </div>
            <Image
            src="/method.webp"
            alt="Election process method 1"
            width={500}
            height={300}
            className="mx-auto mb-4"
            />
            <Image
            src="/method2.webp"
            alt="Election process method 2"
            width={500}
            height={300}
            className="mx-auto mb-4"
            />
        <div className="bg-white p-6 text-center w-3/5 mx-auto mt-[5%</p>] mb-[5%]">
          <p className="text-lg">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>

      {/* 役職紹介 */}
      <div className="bg-green-700 text-white font-bold py-1 px-4 relative ml-[10%] inline-block align-middle mt-10">
        <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
        <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">役職紹介</h2>
      </div>
        <div className="bg-white p-6 text-center w-3/5 mx-auto mt-4 mb-4">
          <p className="text-lg">
        現職中学生徒会役員による役職紹介を掲載しています。
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 justify-center">
        <div className="flex flex-col md:flex-row items-center ml-32 justify-center">
          <Image
        src="/chair.webp"
        alt="生徒会長"
        width={200}
        height={200}
        className="mb-4 md:mb-0 md:mr-2"
          />
          <div className="bg-green-700 text-white font-bold py-4 px-6 flex flex-col items-center justify-center w-full md:w-[200px] h-[200px]">
        <h2 className="text-2xl mb-2">生徒会長</h2>
        <button 
          className="flex items-center justify-center bg-white text-green-700 rounded-full w-10 h-10 transition-transform duration-300 transform hover:scale-110"
          onClick={() => handleClick('/chair')}
        >
          <SlArrowRight className="text-2xl transition-transform duration-300 transform hover:translate-x-1" />
        </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center -ml-32 justify-center">
          <Image
        src="/vice-chair.webp"
        alt="副会長"
        width={200}
        height={200}
        className="mb-4 md:mb-0 md:mr-2"
          />
          <div className="bg-green-700 text-white font-bold py-4 px-6 flex flex-col items-center justify-center w-full md:w-[200px] h-[200px]">
        <h2 className="text-2xl mb-2">副会長</h2>
        <button 
          className="flex items-center justify-center bg-white text-green-700 rounded-full w-10 h-10 transition-transform duration-300 transform hover:scale-110"
          onClick={() => handleClick('/vice-chair')}
        >
          <SlArrowRight className="text-2xl transition-transform duration-300 transform hover:translate-x-1" />
        </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center ml-32 justify-center">
          <Image
        src="/secretary.webp"
        alt="書記"
        width={200}
        height={200}
        className="mb-4 md:mb-0 md:mr-2"
          />
          <div className="bg-green-700 text-white font-bold py-4 px-6 flex flex-col items-center justify-center w-full md:w-[200px] h-[200px]">
        <h2 className="text-2xl mb-2">書記</h2>
        <button 
          className="flex items-center justify-center bg-white text-green-700 rounded-full w-10 h-10 transition-transform duration-300 transform hover:scale-110"
          onClick={() => handleClick('/secretary')}
        >
          <SlArrowRight className="text-2xl transition-transform duration-300 transform hover:translate-x-1" />
        </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center -ml-32 justify-center">
          <Image
        src="/treasurer.webp"
        alt="会計"
        width={200}
        height={200}
        className="mb-4 md:mb-0 md:mr-2"
          />
          <div className="bg-green-700 text-white font-bold py-4 px-6 flex flex-col items-center justify-center w-full md:w-[200px] h-[200px]">
        <h2 className="text-2xl mb-2">会計</h2>
        <button 
          className="flex items-center justify-center bg-white text-green-700 rounded-full w-10 h-10 transition-transform duration-300 transform hover:scale-110"
          onClick={() => handleClick('/treasurer')}
        >
          <SlArrowRight className="text-2xl transition-transform duration-300 transform hover:translate-x-1" />
        </button>
          </div>
        </div>
      </div>

      </main>
    </div>
  );
};

export default Home;
