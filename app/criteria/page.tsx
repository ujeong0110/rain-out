import Link from "next/link";

export default function CriteriaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 p-4 flex items-center justify-center">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

        <h1 className="text-3xl font-black text-center text-slate-900 mb-6">
          🌧 Rain Out 분석 기준
        </h1>

        <div className="space-y-4">

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
                  ☔ 강수확률
            </h2>

            <p className="text-slate-700">
              강수확률이 높을수록 우천 취소 및 경기 중단 가능성이 증가합니다.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
                  🌧 예상 강수량
            </h2>

            <p className="text-slate-700">
              예상 강수량이 많을수록 경기 진행이 어려워질 수 있습니다.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
                  ⚾ 경기 진행 상황
            </h2>

            <p className="text-slate-700">
              5회 이전 중단 시 노게임, 5회 이후 중단 시 경기 성립 여부를 고려하여 분석합니다.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
                  📈 점수차
            </h2>

            <p className="text-slate-700">
              점수차는 참고 요소로만 활용되며 실제 규정보다는 낮은 비중으로 반영됩니다.
            </p>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
            <h2 className="font-bold text-cyan-900 mb-2">
              🤖 분석 방식
            </h2>

            <p className="text-slate-700">
              Rain Out은 기상청 예보 데이터와 KBO 경기 규정을 기반으로 우천 취소, 노게임, 콜드게임 가능성을 분석합니다.
            </p>
          </div>

        </div>

        <Link
          href="/"
          className="
          block
          w-full
          text-center
          mt-6
          bg-cyan-600
          hover:bg-cyan-700
          text-white
          font-semibold
          py-3
          rounded-xl
          transition
          "
        >
          ⚾ 홈으로 돌아가기
        </Link>

      </div>

    </main>
  );
}