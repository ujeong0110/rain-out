"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [status, setStatus] = useState("");
  const router = useRouter();
  const [stadium, setStadium] = useState("잠실야구장");

  const [inning, setInning] = useState("");
const [homeScore, setHomeScore] = useState("");
const [awayScore, setAwayScore] = useState("");

const [result, setResult] = useState("");

const stadiumCoordinates = {
  "잠실야구장": {
    lat: 37.5121,
    lon: 127.0719,
  },

  "사직야구장": {
    lat: 35.1940,
    lon: 129.0615,
  },

  "대구 삼성 라이온즈 파크": {
    lat: 35.8419,
    lon: 128.6811,
  },

  "광주 기아 챔피언스 필드": {
    lat: 35.1682,
    lon: 126.8891,
  },

  "인천 SSG 랜더스필드": {
    lat: 37.4369,
    lon: 126.6933,
  },

  "수원 KT 위즈 파크": {
    lat: 37.2997,
    lon: 127.0097,
  },

  "대전 한화생명 볼파크": {
    lat: 36.3171,
    lon: 127.4291,
  },

  "창원 NC 파크": {
    lat: 35.2226,
    lon: 128.5828,
  },
};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-blue-200 text-slate-800 p-6">
      <h1 className="text-5xl font-bold mb-8">⚾ Rain Out</h1>

      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg">
        <label className="block mb-2 text-lg">구장 선택</label>

        <select
  value={stadium}
  onChange={(e) => setStadium(e.target.value)}
  className="w-full p-3 rounded-lg border border-slate-300 bg-white text-black mb-6"
>
          <option>잠실야구장</option>
          <option>사직야구장</option>
          <option>대구 삼성 라이온즈 파크</option>
          <option>광주 기아 챔피언스 필드</option>
          <option>인천 SSG 랜더스필드</option>
          <option>수원 KT 위즈 파크</option>
          <option>대전 한화생명 볼파크</option>
          <option>창원 NC 파크</option>
        </select>

        <label className="block mb-3 text-lg">경기 상태</label>

        <div className="flex flex-col gap-3 mb-6">
         <label>
  <input
  type="radio"
  name="status"
  value="before"
  checked={status === "before"}
  onChange={(e) => setStatus(e.target.value)}
/>{" "}
  경기 시작 전
</label>

<label>
 <input
  type="radio"
  name="status"
  value="during"
  checked={status === "during"}
  onChange={(e) => setStatus(e.target.value)}
/>{" "}
  경기 진행 중
</label>
{status === "during" && (
  <div className="space-y-3 mb-6">
   <select
  value={inning}
  onChange={(e) => setInning(e.target.value)}
  className="w-full p-3 rounded-lg text-black"
>
      <option>1회초</option>
      <option>1회말</option>
      <option>2회초</option>
      <option>2회말</option>
      <option>3회초</option>
      <option>3회말</option>
      <option>4회초</option>
      <option>4회말</option>
      <option>5회초</option>
      <option>5회말</option>
      <option>6회초</option>
      <option>6회말</option>
      <option>7회초</option>
      <option>7회말</option>
      <option>8회초</option>
      <option>8회말</option>
      <option>9회초</option>
      <option>9회말</option>
    </select>

   <div className="bg-slate-50 border rounded-xl p-4">
  <p className="font-semibold mb-4 text-center">
    ⚾ 스코어 입력
  </p>

  <div className="flex items-center justify-center gap-6">

    <div className="flex flex-col items-center">
      <span className="text-sm text-slate-600 mb-2">
        홈팀
      </span>

      <input
        type="number"
        value={homeScore}
        onChange={(e) => setHomeScore(e.target.value)}
        className="w-20 p-2 text-center text-2xl font-bold rounded-lg border text-black"
      />
    </div>

    <div className="text-2xl font-bold text-slate-500">
      VS
    </div>

    <div className="flex flex-col items-center">
      <span className="text-sm text-slate-600 mb-2">
        원정팀
      </span>

      <input
        type="number"
        value={awayScore}
        onChange={(e) => setAwayScore(e.target.value)}
        className="w-20 p-2 text-center text-2xl font-bold rounded-lg border text-black"
      />
    </div>

  </div>
</div>

  </div>
)}
        </div>

       <button
 onClick={() => {
  const inningNumber = parseInt(inning);
  const home = Number(homeScore);
  const away = Number(awayScore);

  let resultText = "";

  if (inningNumber < 5) {
    resultText = "노게임 가능성 높음";
  } else {
    if (home === away) {
      resultText = "타이게임 가능성";
    } else {
      resultText = "콜드게임 가능성 높음";
    }
  }

  const selectedStadium =
  stadiumCoordinates[
    stadium as keyof typeof stadiumCoordinates
  ];

console.log(selectedStadium);

 router.push(
  `/result?stadium=${encodeURIComponent(stadium)}&inning=${encodeURIComponent(inning)}&home=${homeScore}&away=${awayScore}&result=${encodeURIComponent(resultText)}`
);
}}

  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-blue-700 p-3 rounded-lg font-bold"
>
  분석하기
</button>

      </div>
    </main>
  );
}