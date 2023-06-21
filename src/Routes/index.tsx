import { Route, Routes } from "react-router";
import HomeComponent from "../pages/Home";
import LoginComponent from "../pages/Login";
import CategoryComponent from "../pages/Category";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="*" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/category/:category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default RoutesComponent;
