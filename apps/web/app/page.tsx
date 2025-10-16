"use client";

import { Button } from "@openplan/ui";
import Header from "./components/header/Header";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNextClick = useCallback(() => {
    router.push("/result");
  }, []);

  return (
    <>
      <Header />

      <section className="h-[calc(100vh-180px)] w-full flex justify-center items-center">
        <div className="mx-2.5 flex flex-col items-center">
          <h4 className="text-xl md:text-2xl font-bold text-[#111111]">
            안녕하세요.
          </h4>
          <h4 className="text-xl md:text-2xl font-bold text-[#111111]">
            박성식입니다.
          </h4>
        </div>
      </section>

      <section className="h-32 flex justify-center items-center">
        <Button onClick={handleNextClick}>다음</Button>
      </section>
    </>
  );
}
