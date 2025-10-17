"use client";

import ContentCard from "@/app/components/card/ContentCard";
import ContentUrlCard from "@/app/components/card/ContentUrlCard";
import ImageCard from "@/app/components/card/ImageCard";
import Header from "@/app/components/header/Header";
import PhotoContentWrapper from "@/app/components/wrapper/PhotoContentWrapper";
import PhotoWrapper from "@/app/components/wrapper/PhotoWrapper";
import { usePhotoStore } from "@/app/store/usePhotoStore";
import { Button } from "@openplan/ui";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const PhotoResultPage = () => {
  const router = useRouter();
  const { photoInfo } = usePhotoStore();

  const handlePrevClick = useCallback(() => {
    router.push("/");
  }, []);

  useEffect(() => {
    // photo 결과값이 없으면 1초 뒤 메인 페이지로 이동
    if (!photoInfo?.id) {
      const timer = setTimeout(() => {
        router.replace("/");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [photoInfo, router]);

  return (
    <>
      <Header />

      <PhotoWrapper>
        <ImageCard imageUrl={photoInfo.download_url} />

        <PhotoContentWrapper>
          <ContentCard
            firstTitle="id"
            firstContent={photoInfo.id}
            secondTitle="author"
            secondContent={photoInfo.author}
          />
          <ContentCard
            firstTitle="width"
            firstContent={photoInfo.width.toLocaleString()}
            secondTitle="height"
            secondContent={photoInfo.height.toLocaleString()}
          />

          <ContentUrlCard
            firstTitle="이미지 URL"
            url={photoInfo.url}
            secondTitle="다운로드 URL"
            downloadUrl={photoInfo.download_url}
          />

          <div className="flex justify-center">
            <Button onClick={handlePrevClick}>이전</Button>
          </div>
        </PhotoContentWrapper>
      </PhotoWrapper>
    </>
  );
};

export default PhotoResultPage;
