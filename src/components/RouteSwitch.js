import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
