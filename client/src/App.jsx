import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { getMenProducts } from "./redux";
import { useDispatch } from "react-redux";
import { Navbar, RouteNotFound } from "./components";

const Home = lazy(() => import("./pages/home/Home"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Products = lazy(() => import("./pages/products/Products"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenProducts());
  }, []);

  return (
    <div className="text-gray-800">
      <Navbar />

      <div className="app-routes">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
