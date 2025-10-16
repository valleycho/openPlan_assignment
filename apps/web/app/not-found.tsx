import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - 페이지를 찾을 수 없습니다",
  description: "요청하신 페이지가 존재하지 않습니다.",
};

export default function NotFound() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="mx-2.5 flex flex-col items-center gap-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-[#111111] mb-4">
              404
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#111111] mb-2">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="text-sm md:text-base text-[#666666]">
              요청하신 페이지가 존재하지 않거나 이동되었습니다.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-10 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600"
        >
          홈으로
        </Link>
      </section>
    </>
  );
}
