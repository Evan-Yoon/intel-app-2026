import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center space-y-6">
        <div className="inline-block p-8 bg-primary-100 rounded-full animate-bounce">
          <span className="text-6xl">😕</span>
        </div>
        <div>
          <h1 className="text-heading-xl font-bold text-gray-900 mb-2">
            404 - Page Not Found
          </h1>
          <p className="text-body text-gray-500 max-w-md mx-auto">
            죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 주소를 확인하거나
            홈으로 돌아가세요.
          </p>
        </div>
        <button className="btn-primary px-8 py-3 rounded-full font-semibold shadow-button hover:shadow-button-hover transition-all">
          <a href="/">Go to Home</a>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
