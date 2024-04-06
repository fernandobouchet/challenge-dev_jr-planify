import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ onClick, className, children }: Props) => {
  return (
    <div
      className={`bg-gray-500 text-white p-1 hover:bg-gray-600 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Button };
