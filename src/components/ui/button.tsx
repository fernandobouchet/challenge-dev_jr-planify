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
      className={`px-2 py-1 min-w-24 rounded-sm font-medium ${
        disabled
          ? "bg-neutral-300 text-neutral-100"
          : "bg-slate-600 text-white hover:bg-slate-700 cursor-pointer"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
