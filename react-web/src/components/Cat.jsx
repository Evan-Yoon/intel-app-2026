import React from "react";
import { useState, useEffect } from "react";
import "./Cat.css";

function Cat() {
  //고양이 사진 데이터 state
  const [cats, setCats] = useState([]);

  //고양이 사진 API로 받아오기
  useEffect(() => {
    async function getData() {
      const url = "https://api.thecatapi.com/v1/images/search?limit=6"; //API 주소
      const response = await fetch(url); //API 주소에 요청을 보냄. 응답이 올때까지 기다림.
      const data = await response.json(); //응답 객체에서 데이터만 추출. 데이터가 다 추출될 때까지 기다림
      setCats(data); //데이터를 state에 저장
    }
    getData();
  }, []);

  return (
    <div className="cat-grid">
      {cats.map((cat) => (
        <div className="cat-item" key={cat.id}>
          <img className="cat-image" src={cat.url} alt="고양이" />
        </div>
      ))}
    </div>
  );
}

export default Cat;
