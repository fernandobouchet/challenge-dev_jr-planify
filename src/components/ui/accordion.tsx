import { ReactNode } from "react";

interface Props {
  title: string;
  className?: string;
  children: ReactNode[];
}

const Accordion = ({ title, className, children }: Props) => {
  return (
    <div className={`border border-gray-500 p-4 ${className} `}>
      <h2>{title}</h2>
      <div className="flex flex-col gap-2 mt-2">{children}</div>
    </div>
  );
};

export { Accordion };
