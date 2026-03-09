import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  Cake,
  GraduationCap,
  Gamepad2,
  ArrowRight,
  BadgeCheck,
  Mail,
} from "lucide-react";

function UserCard() {
  const name = "김철수";
  const userInfo = {
    age: 20,
    school: "한국대학교",
    email: "abc@naver.com",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: false,
    github: "https://github.com/evan-yoon",
  };

  const initial = name.charAt(0);

  return (
    <div className="w-80 rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* 그라디언트 헤더 배너 */}
      <div className="h-28 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 relative">
        {/* 아바타 */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white">
          <span className="text-2xl font-bold text-indigo-600">{initial}</span>
        </div>
      </div>

      {/* 본문 */}
      <div className="pt-12 px-6 pb-6 flex flex-col items-center gap-4">
        {/* 이름 + 회원 배지 */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-slate-800">{name}</h2>
          <span
            className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
              userInfo.isMember
                ? "bg-emerald-100 text-emerald-600"
                : "bg-rose-100 text-rose-500"
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
          className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 text-sm transition-colors duration-200"
        >
          <FaGithub size={18} />
          <span>GitHub</span>
        </a>

        {/* 정보 목록 */}
        <div className="w-full bg-slate-50 rounded-xl p-4 flex flex-col gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Cake size={16} className="text-indigo-400" />
            <span className="font-medium text-slate-400">나이</span>
            <span className="ml-auto font-semibold text-slate-700">
              {userInfo.age}세
            </span>
          </div>
          <div className="h-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-indigo-400" />
            <span className="font-medium text-slate-400">학교</span>
            <span className="ml-auto font-semibold text-slate-700">
              {userInfo.school}
            </span>
          </div>
          <div className="h-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-indigo-400" />
            <span className="font-medium text-slate-400">이메일</span>
            <span className="ml-auto font-semibold text-slate-700 truncate max-w-36 text-right">
              {userInfo.email}
            </span>
          </div>
        </div>

        {/* 취미 칩 */}
        <div className="w-full">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            <Gamepad2 size={14} className="text-indigo-400" />
            취미
          </p>
          <div className="flex flex-wrap gap-2">
            {userInfo.hobby.map((h, i) => (
              <span
                key={i}
                className="bg-indigo-50 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full border border-indigo-100 hover:bg-indigo-100 cursor-pointer transition-colors duration-200"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* 회원가입 버튼 */}
        {!userInfo.isMember && (
          <button className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm tracking-wide shadow-md hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
            회원가입
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
