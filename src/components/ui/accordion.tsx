import { ReactNode, useState } from "react";
import { icons } from "@components/icons";

interface Props {
  id: number;
  title: string;
  children?: ReactNode;
  className?: string;
}

const Accordion = ({ title, children, className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mb-1 gap-5 ${className}`}>
      <button
        className="w-full p-2 text-left bg-gray-200  
                 hover:bg-gray-300 transition duration-300"
        onClick={toggleAccordion}
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
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export { Accordion };
