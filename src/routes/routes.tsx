import { Routes as Routers, Route } from "react-router-dom";
import { Home } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages/Login/Register/Register";

export function Routes() {
  return (
    <Routers>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routers>
  );
}
