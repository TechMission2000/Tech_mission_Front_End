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
      "bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white hover:opacity-90",
    outline:
      "bg-transparent text-black border border-[#106CD8] hover:bg-[#106CD8] hover:text-white",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={finalClasses}>
      <span className="text-lg font-medium font-raleway tracking-wide">
        {children}
      </span>
    </button>
  );
};

export default CustomButton;
