"use client";

interface HeaderProps {
  isLoading?: boolean;
}

const Header = ({ isLoading = false }: HeaderProps) => {
  if (isLoading) {
    return <div className="bg-gray-200 animate-pulse w-full h-[52px]" />;
  }

  return (
    <section className="flex justify-center items-center w-full h-[52px] p-5 py-[17px]">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1A1A1A]">
        박성식
      </h3>
    </section>
  );
};

export default Header;
