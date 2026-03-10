import React from "react";
import { useState } from "react";

function example() {
  let count = 10;
  const [stateCount, setStateCount] = useState(10);
  const handleClick2 = (name) => {
    alert(`${name}님 환영합니다.`);
  };

  const handleClick = () => {
    setStateCount(stateCount + 1);
    count++;
    console.log("count: ", count);
    console.log("stateCount: ", stateCount);
  };

  return (
    <div>
      <button
        className="bg-blue-300"
        onClick={() => {
          alert("클릭되었습니다.");
        }}
      >
        Click me
      </button>
      <button className="bg-green-300" onClick={handleClick}>
        Click me
      </button>
      <span>{stateCount}</span>
      <button className="bg-red-300" onClick={() => handleClick2("홍길동")}>
        Click me
      </button>
    </div>
  );
}

export default example;
