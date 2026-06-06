import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">

      <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-md h-[500px] flex flex-col items-center justify-center">

        <div className="text-center">
          <div className="text-7xl mb-4">⚾</div>

          <h1 className="text-5xl font-black text-slate-900">
            RAIN OUT
          </h1>

          <p className="mt-4 text-slate-500">
            KBO 우천 경기 분석 서비스
          </p>
        </div>

        <div className="text-center">
<div className="flex justify-center gap-3 mt-8">
    <Link
    href="/analyze"
    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
  >
    📊 분석
  </Link>

  <Link
    href="/rules"
    className="bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
  >
    📖 규정
  </Link>

  <Link
    href="/criteria"
    className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
  >
    🌧 기준
  </Link>
</div> 
        </div>

      </div>

    </main>
  );
}