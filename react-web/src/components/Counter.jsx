import { useState } from "react";

function Counter() {
  const [counterCount, setCounterCount] = useState(0);

  const handlePlusToggle = () => {
    setCounterCount(counterCount + 1);
  };

  const handleMinusToggle = () => {
    setCounterCount(counterCount - 1);
  };

  const handleResetToggle = () => {
    setCounterCount(0);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col justify-center p-20 text-[50px] w-150 bg-white">
        <h1
          className={`text-[100px] text-center ${counterCount > 0 ? "text-blue-500" : counterCount < 0 ? "text-red-500" : "text-black"}`}
        >
          {counterCount}
        </h1>
        <div className="flex justify-between gap-10 ">
          <button
            onClick={handleMinusToggle}
            className="bg-blue-100 w-20 rounded-full hover:bg-blue-200 disabled:bg-gray-100 disabled:text-gray-300"
            disabled={counterCount === -10}
          >
            -
          </button>
          <button
            onClick={handleResetToggle}
            className="bg-[#f3f3f3] w-50 pl-5 pr-5 rounded-[10px] hover:bg-[#eee]"
          >
            Reset
          </button>
          <button
            onClick={handlePlusToggle}
            className="bg-blue-500 w-20 rounded-full text-white hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-300"
            disabled={counterCount === +10}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
