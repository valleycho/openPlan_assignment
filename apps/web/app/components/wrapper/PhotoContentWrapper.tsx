interface PhotoContentWrapperProps {
  children: React.ReactNode;
}

const PhotoContentWrapper = ({ children }: PhotoContentWrapperProps) => {
  return (
    <div className="flex flex-col justify-start flex-1 min-[1440px]:justify-center">
      {children}
    </div>
  );
};

export default PhotoContentWrapper;
