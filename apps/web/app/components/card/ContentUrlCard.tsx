interface ContentUrlCardProps {
  isLoading: boolean;
  firstTitle: string;
  url: string;
  secondTitle: string;
  downloadUrl: string;
}

const ContentUrlCard = ({
  isLoading = false,
  firstTitle,
  url,
  secondTitle,
  downloadUrl,
}: Partial<ContentUrlCardProps>) => {
  return (
    <section
      className={[
        `rounded-2xl bg-white border border-black/[0.1] mx-5 flex flex-col mb-3`,
        isLoading ? "p-0" : "p-5",
      ].join(" ")}
    >
      {isLoading && (
        <div className="bg-gray-200 animate-pulse w-full h-[140px] rounded-2xl" />
      )}

      {!isLoading && (
        <>
          <div>
            <h3 className="text-[#111111] font-medium">{firstTitle}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-[#111111] opacity-50"
            >
              {url}
            </a>
          </div>
          <div className="mt-3">
            <h3 className="text-[#111111] font-medium">{secondTitle}</h3>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-[#111111] opacity-50"
            >
              {downloadUrl}
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default ContentUrlCard;
