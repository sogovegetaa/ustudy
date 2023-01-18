import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="font-extrabold tracking-widest text-white text-9xl">
        404
      </h1>
      <div className="bg-[#30AAE2] px-2 text-sm rounded rotate-12 absolute">
        Страница не найдена
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#30AAE2] group active:text-blue-300 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#30AAE2] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href="/">Вернуться на главную</Link>
          </span>
        </div>
      </button>
    </main>
  );
}
