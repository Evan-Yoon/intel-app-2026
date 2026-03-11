import { useState } from "react";

function NameCard() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    phone: "",
    email: "",
  });
  //구조분해할당으로 값 추출(편의성)
  const { username, phone, email, birthday } = userInfo;

  //이벤트핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <div>
        <h3 className="mb-5 text-gray-800 text-lg font-semibold">
          사용자 프로필
        </h3>

        <div className="mb-4">
          <label className="block mb-1.5 font-semibold text-gray-600">
            이름
          </label>
          <input
            type="text"
            name="username"
            // value={username}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1.5 font-semibold text-gray-600">
            전화번호
          </label>
          <input
            type="tel"
            name="phone"
            // value={phone}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1.5 font-semibold text-gray-600">
            이메일
          </label>
          <input
            type="email"
            name="email"
            // value={email}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1.5 font-semibold text-gray-600">
            생일
          </label>
          <input
            type="birthday"
            name="birthday"
            // value={email}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-700"
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="w-80 rounded-xl overflow-hidden shadow-lg bg-white">
          <div className="h-20 bg-gradient-to-br from-slate-800 to-blue-500" />
          <div className="p-5">
            <p className="mb-4 text-2xl font-bold text-slate-800">{username}</p>
            <div>
              <p className="my-2 text-gray-500 text-sm">📞 {phone}</p>
              <p className="my-2 text-gray-500 text-sm">✉️ {email}</p>
              <p className="my-2 text-gray-500 text-sm">🎂 {birthday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
