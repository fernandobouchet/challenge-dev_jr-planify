import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { MyAppointments } from "../pages/myAppointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-appointments",
    element: <MyAppointments />,
  },
]);

export { router };
