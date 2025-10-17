"use client";

import { useEffect } from "react";
import ContentCard from "../components/card/ContentCard";
import ContentUrlCard from "../components/card/ContentUrlCard";
import ImageCard from "../components/card/ImageCard";
import Header from "../components/header/Header";
import PhotoContentWrapper from "../components/wrapper/PhotoContentWrapper";
import PhotoWrapper from "../components/wrapper/PhotoWrapper";
import { useGetPhotoInfo } from "../hooks/usePhoto";
import { usePhotoStore } from "../store/usePhotoStore";
import { useRouter } from "next/navigation";

const PhotoPage = () => {
  const router = useRouter();
  const { photoInfo, photoInfoLoading } = useGetPhotoInfo();
  const { setPhotoInfo } = usePhotoStore();

  useEffect(() => {
    if (photoInfo) {
      setPhotoInfo(photoInfo);

      router.push("/photo/result");
    }
  }, [photoInfo, setPhotoInfo]);

  if (photoInfoLoading) {
    return (
      <>
        <Header isLoading={true} />

        <PhotoWrapper>
          <ImageCard isLoading={true} />

          <PhotoContentWrapper>
            <ContentCard isLoading={true} />
            <ContentCard isLoading={true} />

            <ContentUrlCard isLoading={true} />
          </PhotoContentWrapper>
        </PhotoWrapper>
      </>
    );
  }
};

export default PhotoPage;
