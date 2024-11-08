import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <Image
          src="/header-image.jpg"
          alt="Header Background"
          width={1920} 
          height={600}
          className="mt-10 z-0 object-cover"
        />
      </div>
      <main className="p-4">
        <h1 className="text-2xl font-bold">生徒会選挙広報サイトへようこそ</h1>
        <p>このサイトでは、候補者情報や選挙スケジュールを確認できます。</p>
      </main>
    </div>
  );
};

export default Home;
