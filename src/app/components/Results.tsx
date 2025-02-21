const Results = () => {
  return (
    <div className="bg-white p-6 text-center w-full sm:w-3/5 mx-auto border-t-4 border-green-600 mt-10 mb-10">
      <h3 className="text-2xl font-bold text-green-600 mb-4 ml-0 sm:ml-10 text-left">結果公示</h3>
      <div className="space-y-4">
        <div className="border-b border-gray-300 pb-4">
          <h4 className="text-xl font-semibold text-green-600">選挙結果情報</h4><br />
            <img src="../result.webp" alt="選挙結果" className="mx-auto w-3/5" />
        </div>
      </div>
    </div>
  );
};

export default Results;
