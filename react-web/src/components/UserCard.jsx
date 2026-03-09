import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiFace } from "react-icons/bi";
import {
  Cake,
  GraduationCap,
  Gamepad2,
  ArrowRight,
  BadgeCheck,
  Mail,
} from "lucide-react";

function UserCard() {
  const name = "윤지현";
  const userInfo = {
    age: 20,
    school: "한국대학교",
    email: "abc@naver.com",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: false,
    github: "https://github.com/evan-yoon",
  };

  return (
    <div
      className="w-80 rounded-2xl overflow-hidden shadow-xl border border-blue-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ background: "#f0f6ff" }}
    >
      {/* 이미지 헤더 배너 */}
      <div
        className="h-36 relative"
        style={{
          backgroundImage: "url('/image copy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 밝은 오버레이 — 이미지 하단을 카드 배경색으로 페이드 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(240,246,255,0.80) 100%)",
          }}
        />
        {/* 아바타 */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-2 border-sky-200"
          style={{ background: "linear-gradient(135deg, #e0f2fe, #bae6fd)" }}
        >
          <BiFace size={40} className="text-sky-600" />
        </div>
      </div>

      {/* 본문 */}
      <div className="pt-12 px-6 pb-6 flex flex-col items-center gap-4">
        {/* 이름 + 회원 배지 */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-slate-700 tracking-wide">
            {name}
          </h2>
          <span
            className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
              userInfo.isMember
                ? "bg-emerald-100 text-emerald-600 border border-emerald-200"
                : "bg-rose-100 text-rose-500 border border-rose-200"
            }`}
          >
            {userInfo.isMember ? (
              <>
                <BadgeCheck size={12} />
                회원
              </>
            ) : (
              "비회원"
            )}
          </span>
        </div>

        {/* GitHub 링크 */}
        <a
          href={userInfo.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-slate-400 hover:text-sky-500 text-sm transition-colors duration-200"
        >
          <FaGithub size={16} />
          <span>GitHub</span>
        </a>

        {/* 구분선 */}
        <div className="w-full h-px bg-blue-100" />

        {/* 정보 목록 */}
        <div
          className="w-full rounded-xl p-4 flex flex-col gap-3 text-sm border border-sky-100"
          style={{ background: "rgba(224,242,254,0.45)" }}
        >
          <div className="flex items-center gap-2">
            <Cake size={15} className="text-sky-400" />
            <span className="font-medium text-slate-400">나이</span>
            <span className="ml-auto font-semibold text-slate-600">
              {userInfo.age}세
            </span>
          </div>
          <div className="h-px bg-sky-100" />
          <div className="flex items-center gap-2">
            <GraduationCap size={15} className="text-sky-400" />
            <span className="font-medium text-slate-400">학교</span>
            <span className="ml-auto font-semibold text-slate-600">
              {userInfo.school}
            </span>
          </div>
          <div className="h-px bg-sky-100" />
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-sky-400" />
            <span className="font-medium text-slate-400">이메일</span>
            <span className="ml-auto font-semibold text-slate-600 truncate max-w-36 text-right">
              {userInfo.email}
            </span>
          </div>
        </div>

        {/* 취미 칩 */}
        <div className="w-full">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            <Gamepad2 size={13} className="text-sky-400" />
            취미
          </p>
          <div className="flex flex-wrap gap-2">
            {userInfo.hobby.map((h, i) => (
              <span
                key={i}
                className="bg-sky-100 text-sky-600 text-sm font-medium px-3 py-1 rounded-full border border-sky-200 hover:bg-sky-200 cursor-pointer transition-colors duration-200"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* 회원가입 버튼 */}
        {!userInfo.isMember && (
          <button
            className="mt-1 w-full py-2.5 rounded-xl text-white font-bold text-sm tracking-wide active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 hover:brightness-105"
            style={{
              background: "linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)",
              boxShadow: "0 4px 16px rgba(14,165,233,0.3)",
            }}
          >
            회원가입
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
