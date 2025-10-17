"use client";

import Image from "next/image";

interface ImageCardProps {
  isLoading: boolean;
  imageUrl: string;
}

const ImageCard = ({
  isLoading = false,
  imageUrl,
}: Partial<ImageCardProps>) => {
  if (isLoading) {
    return (
      <div className="mx-5 my-10 flex min-[1440px]:flex-1 min-[1440px]:items-center">
        <div className="bg-gray-200 animate-pulse w-full rounded-3xl h-[224px] md:h-[485px] min-[1440px]:h-[440px]" />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-[1440px]:flex-row min-[1440px]:flex-1">
      {imageUrl && (
        <div className="relative max-w-[335px] md:max-w-[728px] min-[1440px]:max-w-[660px] rounded-3xl overflow-hidden mx-5 my-10 w-full h-[224px] md:h-[485px] min-[1440px]:h-[440px] min-[1440px]:my-auto flex items-center justify-center">
          <Image
            className="w-full h-full"
            src={imageUrl}
            alt="photoImage"
            width={728}
            height={728}
          />
        </div>
      )}
    </section>
  );
};

export default ImageCard;
