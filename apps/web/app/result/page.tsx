"use client";

import { Button } from "@openplan/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Header from "../components/header/Header";

const ResultPage = () => {
  const router = useRouter();

  const handlePrevClick = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <>
      <Header />

      {/* <div className="bg-gradient-to-r from-[#D9D9D9]/100 to-[#D9D9D9]/0 absolute top-0 left-0 w-full h-full max-h-[640px] -z-10" /> */}

      <article className="flex flex-col min-[1440px]:flex-row h-[calc(100vh-52px)]">
        <section className="flex justify-center flex-1">
          <div className="relative max-w-[335px] md:max-w-[728px] min-[1440px]:max-w-[660px] rounded-3xl overflow-hidden mx-5 my-10 w-full">
            <Image
              className="w-full h-full"
              src="/image_3.svg"
              alt="profile"
              width={728}
              height={728}
            />
          </div>
        </section>

        <div className="flex-1 flex flex-col justify-center">
          <section className="p-5 rounded-2xl bg-white border border-white/10 mx-5 flex flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-[#111111] font-medium">id</h3>
              <span className="text-[#111111] opacity-50 font-medium">0</span>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <h3 className="text-[#111111] font-medium">author</h3>
              <span className="text-[#111111] opacity-50 font-medium">
                Alejandro Escamilla
              </span>
            </div>
          </section>

          <section className="p-5 rounded-2xl bg-white border border-white/10 mx-5 mt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-[#111111] font-medium">width</h3>
              <span className="text-[#111111] opacity-50 font-medium">
                5,000
              </span>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <h3 className="text-[#111111] font-medium">height</h3>
              <span className="text-[#111111] opacity-50 font-medium">
                3,333
              </span>
            </div>
          </section>

          <section className="p-5 rounded-2xl bg-white border border-white/10 mx-5 mt-3">
            <div>
              <h3 className="text-[#111111] font-medium">url</h3>
              <a
                href="https://unsplash.com/photos/yC-Yzbqy7PY"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-[#111111] opacity-50"
              >
                https://unsplash.com/photos/yC-Yzbqy7PY
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-[#111111] font-medium">download_url</h3>
              <a
                href="https://picsum.photos/id/0/5000/3333"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-[#111111] opacity-50"
              >
                https://picsum.photos/id/0/5000/3333
              </a>
            </div>
            <div className="flex justify-center">
              <Button onClick={handlePrevClick} className="mt-3">
                이전
              </Button>
            </div>
          </section>
        </div>

        <div className="h-[60px]" />
      </article>
    </>
  );
};

export default ResultPage;
