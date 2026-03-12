import React from "react";
import { NavLink } from "react-router-dom";
import "../navigation.css";

function Header() {
  const menuStyle = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 backdrop-blur-xl bg-white/85">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* 로고 */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
            T
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            TeamFlow
          </span>
        </NavLink>

        {/* 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={menuStyle}>
            홈
          </NavLink>
          <NavLink to="/todolist" className={menuStyle}>
            투두리스트
          </NavLink>
          <NavLink to="/counter" className={menuStyle}>
            카운터
          </NavLink>
          <NavLink to="/Like" className={menuStyle}>
            좋아요
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
