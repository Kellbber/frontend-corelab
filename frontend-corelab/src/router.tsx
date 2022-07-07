import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./types/routes";
import Home from "./pages/Home";
import CreateCar from "./pages/CreateCar";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.CREATE} element={<CreateCar/>}/>
    </Routes>
  );
};

export default Router;
