import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  href: string;
  children: ReactNode;
}

const NavigationLink = ({ href, children }: Props) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center font-medium  ${
          isActive
            ? "underline underline-offset-8 decoration-indigo-500 decoration-4 [&_*]:text-indigo-500 [&_*]:fill-indigo-500"
            : "hover:underline hover:underline-offset-8 hover:decoration-slate-400 hover:decoration-4 [&_*]:hover:text-slate-400 [&_*]:hover:fill-slate-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export { NavigationLink };
