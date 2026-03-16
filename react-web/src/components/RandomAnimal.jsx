import React from "react";
import { useState, useEffect } from "react";

function RandomAnimal() {
  const [animal, setAnimal] = useState("");
  const [characteristics, setCharacteristics] = useState("");

  async function getRandomAnimal() {
    const res = await fetch("http://localhost:8000/animal");
    const data = await res.json();
    setAnimal(data.animal);
    setCharacteristics(data.characteristics);
  }

  useEffect(() => {
    getRandomAnimal();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold text-center mb-4 tracking-tight">
        랜덤 동물
      </h1>
      <p className="text-center mb-4 tracking-tight">
        특징:
        {characteristics === "귀여운"
          ? ("귀여운",
            (
              <span className="text-yellow-500">
                {characteristics}_{animal}
              </span>
            ))
          : characteristics === "빠른"
            ? ("빠른",
              (
                <span className="text-red-500">
                  {characteristics}_{animal}
                </span>
              ))
            : characteristics === "느린"
              ? ("느린",
                (
                  <span className="text-green-500">
                    {characteristics}_{animal}
                  </span>
                ))
              : characteristics === "똑똑한"
                ? ("똑똑한",
                  (
                    <span className="text-blue-500">
                      {characteristics}_{animal}
                    </span>
                  ))
                : characteristics}
      </p>
      <p className="text-center mb-4 tracking-tight flex justify-center">
        동물:
        {animal === "고양이"
          ? ("고양이",
            (
              <img
                src="../public/image copy 2.png"
                className="w-100 h-100 rounded-lg justify-center"
                alt="고양이"
              />
            ))
          : animal === "강아지"
            ? ("강아지",
              (
                <img
                  src="../public/image copy 3.png"
                  className="w-100 h-100 rounded-lg justify-center"
                  alt="강아지"
                />
              ))
            : animal === "호랑이"
              ? ("호랑이",
                (
                  <img
                    src="../public/image copy 4.png"
                    className="w-100 h-100 rounded-lg justify-center"
                    alt="호랑이"
                  />
                ))
              : animal === "사자"
                ? ("사자",
                  (
                    <img
                      src="../public/image copy 5.png"
                      className="w-100 h-100 rounded-lg justify-center"
                      alt="사자"
                    />
                  ))
                : animal}
      </p>
      <button
        className="flex justify-center items-center rounded-lg bg-primary-500 text-white font-semibold text-lg"
        onClick={getRandomAnimal}
      >
        랜덤 동물
      </button>
    </div>
  );
}

export default RandomAnimal;
