import React from "react";
import { members } from "../data/teamMember";
console.log(members);
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* ===================== 헤더 ===================== */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/90">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* 로고 */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
              T
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              TeamFlow
            </span>
          </a>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-body font-medium text-gray-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            >
              홈
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-body font-semibold text-primary-700 bg-primary-50"
            >
              팀 소개
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-body font-medium text-gray-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            >
              프로젝트
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-body font-medium text-gray-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            >
              연락처
            </a>
          </nav>
        </div>
      </header>

      {/* ===================== 팀 소개 섹션 ===================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-10 text-center">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-50 rounded-full text-caption font-semibold text-primary-500 mb-6">
          👥 Our Team
        </div>

        {/* 타이틀 */}
        <h1 className="text-heading-xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
          함께 만들어가는{" "}
          <span className="text-primary-500">혁신적인 서비스</span>
        </h1>

        {/* 설명 */}
        <p className="text-body text-white/70 leading-relaxed max-w-xl mx-auto">
          프론트엔드, 백엔드, AI, 디자인 — 각 분야의 전문가들이 모여
          <br className="hidden sm:block" />
          사용자 중심의 서비스를 만들어갑니다.
        </p>

        {/* 통계 */}
        <div className="flex justify-center gap-8 mt-10">
          <div className="text-center">
            <div className="text-heading-lg font-extrabold text-primary-500">
              3명
            </div>
            <div className="text-caption text-gray-400 font-medium mt-1">
              팀원
            </div>
          </div>
          <div className="text-center">
            <div className="text-heading-lg font-extrabold text-primary-500">
              3개
            </div>
            <div className="text-caption text-gray-400 font-medium mt-1">
              전문 분야
            </div>
          </div>
          <div className="text-center">
            <div className="text-heading-lg font-extrabold text-primary-500">
              9+
            </div>
            <div className="text-caption text-gray-400 font-medium mt-1">
              기술 스택
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 팀원 카드 그리드 ===================== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* ───────── 카드 1 ~ 3 ───────── */}
          {members.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
