import { Nav } from "@components/navigation/nav";
import { Home } from "./pages/home";
import { MyAppointments } from "./pages/myAppointments";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Route>
    </Routes>
  );
}

export default App;
