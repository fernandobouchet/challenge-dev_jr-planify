import { ReactNode } from "react";
import { icons } from "@components/icons";

interface Props {
  id: number;
  title: string;
  openId: number | null;
  onClick: () => void;
  children?: ReactNode;
  className?: string;
}

const AccordionItem = ({
  id,
  title,
  children,
  className,
  openId,
  onClick,
}: Props) => {
  let isOpen = openId === id;
  return (
    <div className={`mb-1 gap-5 ${className} `}>
      <button
        className="w-full p-2 text-left bg-gray-200  
                 hover:bg-gray-300 transition duration-300"
        onClick={onClick}
      >
        {title}
        <span
          className={`float-right transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          {isOpen ? icons.minus : icons.plus}
        </span>
      </button>
      {isOpen && <div className="flex flex-col pt-4 gap-5">{children}</div>}
    </div>
  );
};

export { AccordionItem };
