import { BrowserRouter, Route, Routes } from "react-router-dom";

import VHome from "./views/v-home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
