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

        <Link
          href="/analyze"
          className="
          absolute
          right-[-60px]
          top-32
          w-[100px]
          h-[60px]
          bg-blue-500
          text-white
          rounded-r-2xl
          flex
          items-center
          justify-center
          font-semibold
          shadow-lg
          hover:bg-blue-600
          transition
          "
        >
          📊 분석
        </Link>

        <Link
          href="/rules"
          className="
          absolute
          right-[-60px]
          top-52
          w-[100px]
          h-[60px]
          bg-slate-700
          text-white
          rounded-r-2xl
          flex
          items-center
          justify-center
          font-semibold
          shadow-lg
          hover:bg-slate-800
          transition
          "
        >
          📖 규정
        </Link>

        <Link
  href="/criteria"
  className="
  absolute
  right-[-60px]
  top-72
  w-[100px]
  h-[60px]
  bg-cyan-600
  text-white
  rounded-r-2xl
  flex
  items-center
  justify-center
  font-semibold
  shadow-lg
  hover:bg-cyan-700
  transition
  "
>
  🌧 기준
</Link>

      </div>

    </main>
  );
}