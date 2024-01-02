import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
