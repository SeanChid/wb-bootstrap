import { Outlet } from "react-router-dom";
import NavbarExample from "./Components/NavbarExample.jsx"

export default function App() {
  return (
    <>
      <NavbarExample />
      <Outlet />
    </>
  );
}
