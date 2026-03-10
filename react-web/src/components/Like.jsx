import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { ThumbsDown } from "lucide-react";

function Like() {
  const [isLike, setIsLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  console.log(isLike, likeCnt);

  const handleLikeToggle = () => {
    //좋아요 상태 토글
    setIsLike(!isLike);
    setLikeCnt(isLike ? likeCnt - 1 : likeCnt + 1);
  };

  return (
    //+가 되면 노란색으로 바뀌고 -가 되면 하얀색으로 나오게 하기
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <button onClick={handleLikeToggle}>
        <ThumbsUp size={100} color={isLike ? "yellow" : "red"} />
      </button>
      <div
        className={`text-[64px] font-bold mt-4 ${isLike ? "text-yellow-300" : "text-red-300"}`}
      >
        {likeCnt}
      </div>
    </div>
  );
}

export default Like;
