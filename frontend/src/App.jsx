import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import Product_Detail from "./Components/Product_Detail";
import Dashboard from "./Components/1_dashboard/Dashboard";
import Dash_Orders from "./Components/1_dashboard/Dash_Orders";
import Dash_Users from "./Components/1_dashboard/Dash_Users";
import Dash_Products from "./Components/1_dashboard/Dash_Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:productid" element={<Product_Detail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-orders" element={<Dash_Orders />} />
        <Route path="/dashboard-users" element={<Dash_Users />} />
        <Route path="/dashboard-products" element={<Dash_Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
