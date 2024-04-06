import { icons } from "@components/icons";
import { NavigationLink } from "@components/navigation/navigationLink";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Outlet />
      <nav className="flex justify-center items-center gap-10 h-20 fixed w-full bottom-0 bg-white pt-auto">
        <NavigationLink href="/">
          <icons.coffe className="fill-slate-600 w-10 h-auto" />
          <span className="text-sm lg:text-base text-slate-600">Reserve</span>
        </NavigationLink>
        <NavigationLink href="/my-appointments">
          <icons.coffe className="fill-slate-600 w-10 h-auto" />
          <span className="text-sm lg:text-base text-slate-600">
            My appointments
          </span>
        </NavigationLink>
      </nav>
    </>
  );
};

export { Nav };
