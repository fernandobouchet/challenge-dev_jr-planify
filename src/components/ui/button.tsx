import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ onClick, className, children, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`px-2 py-1 w-fit ${
        disabled
          ? "bg-gray-100 text-gray-300"
          : "bg-gray-500 text-white hover:bg-gray-600 cursor-pointer"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
