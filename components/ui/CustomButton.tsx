// import React from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: "primary" | "outline";
//   className?: string;
//   onClick?: () => void;
//   type?: "button" | "submit" | "reset";
// }

// const CustomButton: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   className = "",
//   onClick,
//   type = "button",
// }) => {
//   const baseClasses =
//     " font-semibold py-3 px-8 rounded-md transition-transform hover:scale-105  hover:cursor-pointer";

//   const variantClasses = {
//     primary:
//       "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  text-white  ",
//     outline:
//       "bg-transparent text-blue-600 border  hover:border-blue-600 hover:text-white ",
//   };

//   const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

//   return (
//     <button type={type} onClick={onClick} className={finalClasses}>
//       <span className="text-lg font-medium font-raleway tracking-wide flex items-center gap-2">
//         {children}
//       </span>
//     </button>
//   );
// };

// export default CustomButton;

import React from "react";
import { Button } from "./button";

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
    " font-bold    transition-all duration-300 hover:scale-105 hover:cursor-pointer active:scale-95";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white hover:shadow-lg hover:from-blue-700 hover:via-blue-500 hover:to-blue-700",
    outline:
      "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:text-white hover:shadow-lg transition-colors hover:border-transparent",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Button type={type} onClick={onClick} className={finalClasses}>
      <span className="">{children}</span>
    </Button>
  );
};

export default CustomButton;
