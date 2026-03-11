import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function ExampleInput() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  // 비밀번호 유효성 검사
  // 8자리 이상
  // 알파벳/숫자/특수문자 각각 1자 이상씩 필수 포함되어야 함.
  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]/.test(password)
    );
  };
  console.log(userid);
  return (
    <>
      <div>
        <label htmlFor="userid" style={{ color: "red" }}>
          ID (8자까지만 입력 가능) :
        </label>
        <input
          type="text"
          name="userid"
          id="userid"
          onChange={(e) => {
            if (e.target.value.length > 8) {
              alert("8자까지만 입력 가능합니다.");
              return;
            }
            setUserId(e.target.value.toUpperCase());
          }}
          value={userid}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={() => setUserId("")}
        >
          초기화
        </button>
      </div>
      <div>
        <label htmlFor="password" style={{ color: "red" }}>
          비밀번호 :
        </label>
        <input
          type={type}
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        {type === "password" ? (
          <EyeOff
            size={30}
            className="m-3"
            color="red"
            onClick={() => setType("text")}
          />
        ) : (
          <Eye
            size={30}
            className="m-3"
            color="red"
            onClick={() => setType("password")}
          />
        )}
      </div>
      <div>
        {validatePassword(password)
          ? "올바른 비밀번호입니다."
          : "비밀번호가 올바르지 않습니다."}
        {console.log()}
      </div>
    </>
  );
}

export default ExampleInput;
