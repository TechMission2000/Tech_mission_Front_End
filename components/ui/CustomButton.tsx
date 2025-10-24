import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "w-[180px] h-[60px] flex items-center justify-center rounded-md transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white hover:bg-blue-700 hover:cursor-pointer",
    outline:
      "bg-transparent text-black border border-[#106CD8] hover:bg-[#106CD8] hover:text-white hover:cursor-pointer",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={finalClasses}>
      <span className="text-lg font-medium font-raleway tracking-wide flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default CustomButton;
