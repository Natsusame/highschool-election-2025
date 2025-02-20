const News = () => {
  return (
    <div className="bg-white p-6 text-center w-full sm:w-3/5 mx-auto border-t-4 border-green-600">
      <h3 className="text-2xl font-bold text-green-600 mb-4 sm:ml-[10%] text-left">NEWS</h3>
      <div className="space-y-4">
        <div className="border-b border-gray-300 pb-4">
          <div className="flex flex-col sm:flex-row justify-start">
            <p className="sm:mr-[10%] sm:ml-[20%]">2024.2.20</p>
            <p>立候補者の部活と委員会の情報を追加しました。</p>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="flex justify-start mt-4">
          <p className="mr-[10%] ml-[20%]">2024.2.14</p>
          <p>中学生徒会選挙2024特設サイト開設！</p>
        </div> 
        {/* 追加のニュース項目をここに追加できます */}
      </div>
    </div>
  );
};

export default News;
