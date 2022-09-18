import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
