import Link from "next/link";

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 p-4 flex items-center justify-center">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

        <h1 className="text-3xl font-black text-center text-slate-900 mb-6">
          📖 Rain Out 규정 가이드
        </h1>

        <div className="space-y-4">

          {/* 경기 성립 */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
                      ⚾ 경기 성립 조건
            </h2>

            <p className="text-slate-700">
              일반적으로 5회가 완료되면 경기는 성립된 것으로 간주됩니다.
            </p>
          </div>

          {/* 노게임 */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
                      🟡 노게임
            </h2>

            <p className="text-slate-700">
              경기 성립 이전(5회 이전)에 우천 등으로 경기가 중단될 경우
              노게임이 선언될 수 있습니다.
            </p>

            <p className="mt-2 text-slate-700 font-medium">
              노게임이 되면 경기 결과와 기록은 무효 처리됩니다.
            </p>
          </div>

          {/* 콜드게임 */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
         🔴 콜드게임
            </h2>

            <p className="text-slate-700">
              경기 성립 이후 우천 등으로 경기를 계속 진행할 수 없는 경우
              심판 판단에 따라 콜드게임이 선언될 수 있습니다.
            </p>
          </div>

          {/* 심판 재량 */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h2 className="font-bold text-lg text-slate-900 mb-2">
           ⚖️ 심판 재량
            </h2>

            <p className="text-slate-700">
              실제 경기 진행 여부, 경기 중단 여부 및 콜드게임 선언 여부는
              현장 기상 상황과 경기장 상태를 고려하여 심판이 최종 결정합니다.
            </p>
          </div>

          {/* 참고 */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold text-blue-900 mb-2">
              ℹ️ 참고 사항
            </h2>

            <p className="text-slate-700">
              Rain Out은 기상청 예보 데이터와 KBO 경기 규정을 기반으로
              우천 취소, 노게임, 콜드게임 가능성을 분석하는 참고용 서비스입니다.
            </p>

            <p className="mt-2 text-slate-700">
              실제 경기 진행 여부는 경기 당일 기상 상황과
              심판의 판단에 따라 달라질 수 있습니다.
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
          bg-blue-600
          hover:bg-blue-700
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