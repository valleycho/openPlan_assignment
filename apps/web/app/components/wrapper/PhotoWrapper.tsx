interface PhotoWrapperProps {
  children: React.ReactNode;
}

const PhotoWrapper = ({ children }: PhotoWrapperProps) => {
  return (
    <article className="flex flex-col min-[1440px]:flex-row h-[calc(100vh-52px)]">
      {children}
    </article>
  );
};

export default PhotoWrapper;
