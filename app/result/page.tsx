"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ResultContent() {
    const searchParams = useSearchParams();

const stadium = searchParams.get("stadium");
const stadiumCoordinates = {
  "잠실야구장": { lat: 37.5121, lon: 127.0719 },
  "사직야구장": { lat: 35.1940, lon: 129.0615 },
  "대구 삼성 라이온즈 파크": { lat: 35.8419, lon: 128.6811 },
  "광주 기아 챔피언스 필드": { lat: 35.1682, lon: 126.8891 },
  "인천 SSG 랜더스필드": { lat: 37.4369, lon: 126.6933 },
  "수원 KT 위즈 파크": { lat: 37.2997, lon: 127.0097 },
  "대전 한화생명 볼파크": { lat: 36.3171, lon: 127.4291 },
  "창원 NC 파크": { lat: 35.2226, lon: 128.5828 },
};

const inning = searchParams.get("inning");
const home = searchParams.get("home");
const away = searchParams.get("away");
const result = searchParams.get("result");

const [rainChance, setRainChance] = useState("");
const [rainAmount, setRainAmount] = useState("");
const rainChanceNumber = Number(rainChance);
const rainAmountNumber = parseFloat(
  rainAmount?.toString().replace("mm", "") || "0"
);
const inningNumber = parseInt(inning || "0");
const scoreDiff = Math.abs(Number(home) - Number(away));

let probability = 0;

console.log("probability =", probability);
console.log("inningNumber =", inningNumber);
let resultText = "";
let resultIcon = "";
let resultColor = "";

if (rainChanceNumber > 90) {
  probability += 40;
} else if (rainChanceNumber > 70) {
  probability += 30;
} else if (rainChanceNumber > 50) {
  probability += 20;
} else if (rainChanceNumber > 30) {
  probability += 10;
}

if (rainAmountNumber >= 10) {
  probability += 50;
} else if (rainAmountNumber >= 5) {
  probability += 35;
} else if (rainAmountNumber >= 3) {
  probability += 20;
} else if (rainAmountNumber >= 1) {
  probability += 10;
}

if (inningNumber >= 7) {
  probability += 30;
} else if (inningNumber >= 5) {
  probability += 20;
} else if (inningNumber >= 1) {
  probability += 10;
}

if (scoreDiff >= 5) {
  probability += 20;
} else if (scoreDiff >= 3) {
  probability += 10;
} else if (scoreDiff >= 1) {
  probability += 5;
}

if (inningNumber >= 5) {
  if (probability >= 80) {
    resultText = "콜드게임 가능성 높음";
    resultIcon = "🔴";
    resultColor = "bg-red-100 border-red-500";
  } else if (probability >= 60) {
    resultText = "콜드게임 가능성 있음";
    resultIcon = "🟡";
    resultColor = "bg-yellow-100 border-yellow-500";
  } else {
    resultText = "경기 진행 가능";
    resultIcon = "🟢";
    resultColor = "bg-green-100 border-green-500";
  }
} else {
  if (probability >= 70) {
    resultText = "노게임 가능성 높음";
    resultIcon = "🔴";
    resultColor = "bg-red-100 border-red-500";
  } else if (probability >= 50) {
    resultText = "노게임 가능성 있음";
    resultIcon = "🟡";
    resultColor = "bg-yellow-100 border-yellow-500";
  } else {
    resultText = "경기 진행 가능";
    resultIcon = "🟢";
    resultColor = "bg-green-100 border-green-500";
  }
}

useEffect(() => {
  async function fetchWeather() {
    const res = await fetch(
      `/api/weather?stadium=${encodeURIComponent(stadium || "")}`
    );

    const data = await res.json();

    setRainChance(data.rainChance);
    setRainAmount(data.rainAmount);
  }

  fetchWeather();
}, [stadium]);

const isOfficialGame = inningNumber >= 5;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-slate-200 p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
       <h1 className="text-4xl font-bold mb-2 text-center text-slate-900">
          ⚾ Rain Out
        </h1>

        <p className="text-center text-slate-600 mb-2">
  KBO 우천 경기 예측 결과
</p>

<p className="text-center mb-2 text-slate-700">
  📍 {stadium}
</p>

<p className="text-center mb-6 text-slate-700">
  ⚾ {inning} | {home} : {away}
</p>

<div className="bg-white border border-slate-200 p-4 rounded-lg mb-6 shadow-md">
  <h2 className="font-bold text-lg text-slate-900 mb-3">
    ☁️ 기상 정보
  </h2>

  <p className="text-slate-700 font-medium">
  🌧 강수확률 : {rainChance}%
</p>

<p className="text-slate-700 font-medium">
  ☔ 예상 강수량 : {rainAmount}
</p>

</div>

<div className={`${resultColor} border-l-4 p-4 rounded-lg mb-6 shadow-md`}>
  <p className="text-sm text-slate-600 mb-2">
    🌧 경기 예측 결과
  </p>

  <h2 className="font-bold text-xl text-slate-900">
    {resultIcon} {resultText}
  </h2>

<p className="font-semibold text-slate-700 mb-2">
  📊 Rain Out Score : {probability} / 100
</p>

<p className="mt-2 text-slate-700">
  예상 확률 : {probability}%
</p>

  <div className="mt-4 text-sm text-slate-600">
    <p className="mt-2 text-slate-700">
  강수확률 {rainChance}%,
  예상 강수량 {rainAmount},
  현재 {inning} 진행 상황을 종합하여 분석한 결과입니다.
</p>
  </div>
</div>

<div className="bg-white border border-slate-200 p-4 rounded-lg shadow-md">
  <h2 className="font-bold text-lg text-slate-900 mb-3">
    📋 판단 근거
  </h2>

  <div className="space-y-2 text-slate-700">
<p>✓ 강수확률 {rainChance}%</p>
<p>✓ 예상 강수량 {rainAmount}</p>

<p>✓ 현재 {inning} 진행 중</p>
<p>✓ 점수차 {scoreDiff}점</p>

<p>
  ✓ {isOfficialGame
      ? "경기 성립 상태"
      : "경기 미성립 상태"}
</p>

<p>
  ✓ {isOfficialGame
      ? "콜드게임 적용 가능"
      : "노게임 적용 가능"}
</p>
  </div>
</div>
</div>
 </main>
);
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <ResultContent />
    </Suspense>
  );
}