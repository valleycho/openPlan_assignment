"use client";

import ContentCard from "@/app/components/card/ContentCard";
import ContentUrlCard from "@/app/components/card/ContentUrlCard";
import ImageCard from "@/app/components/card/ImageCard";
import Header from "@/app/components/header/Header";
import PhotoContentWrapper from "@/app/components/wrapper/PhotoContentWrapper";
import PhotoWrapper from "@/app/components/wrapper/PhotoWrapper";
import { usePhotoStore } from "@/app/store/usePhotoStore";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const PhotoResultPage = () => {
  const router = useRouter();
  const { photoInfo } = usePhotoStore();
  console.log(photoInfo);

  const handlePrevClick = useCallback(() => {
    router.push("/");
  }, []);

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
        </PhotoContentWrapper>
      </PhotoWrapper>
    </>
  );
};

export default PhotoResultPage;
