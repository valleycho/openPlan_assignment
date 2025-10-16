import React from "react";

type ButtonVariant = "contained" | "outlined";
type ButtonSize = "medium";
type ButtonColor = "primary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  children: React.ReactNode;
  className?: string;
}

const sizeStyles = {
  medium: "text-base px-3 py-3",
};

const colorStyles = {
  primary: "bg-[#111111]",
};

const variantStyles = {
  contained:
    "bg-[#111111] text-white rounded-xl max-w-[335px] h-12 hover:opacity-80 active:opacity-80 mx-5 w-full cursor-pointer",
  outlined:
    "bg-transparent border border-[#111111] text-[#111111] rounded-xl max-w-[335px] h-12 hover:opacity-80 active:opacity-80 mx-5 w-full cursor-pointer",
};

export const Button = ({
  variant = "contained",
  size = "medium",
  color = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
