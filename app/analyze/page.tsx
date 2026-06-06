"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AnalyzePage() {
  const router = useRouter();

  const [stadium, setStadium] = useState("잠실야구장");
  const [status, setStatus] = useState("before");

  const [inning, setInning] = useState("1회초");
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(
    "⚾ 경기장 날씨 확인 중..."
  );

  const stadiums = [
    "잠실야구장",
    "사직야구장",
    "대구 삼성 라이온즈 파크",
    "광주 기아 챔피언스 필드",
    "인천 SSG 랜더스필드",
    "수원 KT 위즈 파크",
    "대전 한화생명 볼파크",
    "창원 NC 파크",
  ];

  const loadingMessages = [
    "⚾ 경기장 날씨 확인 중...",
    "🌧 기상청 데이터 수집 중...",
    "📊 경기 상황 분석 중...",
  ];

  const handleAnalyze = async () => {
    setLoading(true);

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[index]);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);

      router.push(
        `/result?stadium=${encodeURIComponent(
          stadium
        )}&inning=${encodeURIComponent(
          inning
        )}&home=${homeScore}&away=${awayScore}&status=${status}`
      );
    }, 3000);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center w-full max-w-md">
         <div className="text-7xl animate-bounce mb-6">
  ⚾
</div>

        <h1 className="text-2xl font-bold text-slate-900 mb-4">
  Rain Out 분석 중
</h1>

          <p className="text-slate-600">{loadingText}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 p-4 flex items-center justify-center">
     <div className="bg-white rounded-3xl shadow-2xl p-8 text-center w-full max-w-md border border-slate-200">
        <h1 className="text-4xl font-black text-center text-slate-900 mb-2">
          ⚾ Rain Out
        </h1>

        <p className="text-center text-slate-500 mb-6">
          경기 진행 상황을 선택해주세요
        </p>

        <div className="mb-4">
<label className="font-semibold block mb-2 text-slate-700">
                🏟 경기장
          </label>

          <select
className="w-full border border-slate-300 rounded-xl p-3 text-slate-800"
            value={stadium}
            onChange={(e) => setStadium(e.target.value)}
          >
            {stadiums.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
<label className="font-semibold block mb-2 text-slate-700">
                ⚾ 경기 진행 상황
          </label>

          <div className="flex gap-2">
            <button
              onClick={() => setStatus("before")}
              className={`flex-1 p-3 rounded-xl ${
                status === "before"
  ? "bg-blue-600 text-white"
  : "bg-slate-100 text-slate-900"
              }`}
            >
              경기 전
            </button>

            <button
              onClick={() => setStatus("during")}
              className={`flex-1 p-3 rounded-xl ${
               status === "during"
  ? "bg-blue-600 text-white"
  : "bg-slate-100 text-slate-900"
              }`}
            >
              경기 중
            </button>
          </div>
        </div>

        {status === "during" && (
          <>
            <div className="mb-4">
<label className="font-semibold block mb-2 text-slate-700">
                    🕒 현재 이닝
              </label>

              <select
className="w-full border border-slate-300 rounded-xl p-3 text-slate-800"
                value={inning}
                onChange={(e) => setInning(e.target.value)}
              >
                {[
                  "1회초",
                  "1회말",
                  "2회초",
                  "2회말",
                  "3회초",
                  "3회말",
                  "4회초",
                  "4회말",
                  "5회초",
                  "5회말",
                  "6회초",
                  "6회말",
                  "7회초",
                  "7회말",
                  "8회초",
                  "8회말",
                  "9회초",
                  "9회말",
                ].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div>
<label className="font-semibold block mb-2 text-slate-700">
                      🏠 홈팀 점수
                </label>

                <input
                  type="number"
className="w-full border border-slate-300 rounded-xl p-3 text-slate-800"
                  value={homeScore}
                  onChange={(e) => setHomeScore(e.target.value)}
                />
              </div>

              <div>
<label className="font-semibold block mb-2 text-slate-700">
                      ✈️ 원정팀 점수
                </label>

                <input
                  type="number"
className="w-full border border-slate-300 rounded-xl p-3 text-slate-800"
                  value={awayScore}
                  onChange={(e) => setAwayScore(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        <button
          onClick={handleAnalyze}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition"
        >
          분석하기
        </button>
      </div>
    </main>
  );
}