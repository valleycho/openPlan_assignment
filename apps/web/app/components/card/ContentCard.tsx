interface ContentCardProps {
  isLoading: boolean;
  firstTitle: string;
  firstContent: string;
  secondTitle: string;
  secondContent: string;
}

const ContentCard = ({
  isLoading = false,
  firstTitle,
  firstContent,
  secondTitle,
  secondContent,
}: Partial<ContentCardProps>) => {
  return (
    <section
      className={[
        `rounded-2xl bg-white border border-black/[0.1] mx-5 flex flex-col md:flex-row mb-3`,
        isLoading ? "p-0" : "p-5",
      ].join(" ")}
    >
      {isLoading && (
        <div className="bg-gray-200 animate-pulse w-full h-[82px] rounded-2xl" />
      )}

      {!isLoading && (
        <>
          <div className="flex-1">
            <h3 className="text-[#111111] font-medium">{firstTitle}</h3>
            <span className="text-[#111111] opacity-50 font-medium">
              {firstContent}
            </span>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <h3 className="text-[#111111] font-medium">{secondTitle}</h3>
            <span className="text-[#111111] opacity-50 font-medium">
              {secondContent}
            </span>
          </div>
        </>
      )}
    </section>
  );
};

export default ContentCard;
