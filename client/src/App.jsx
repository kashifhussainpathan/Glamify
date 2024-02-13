import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import {
  Footer,
  Navbar,
  RouteNotFound,
  ScrollToTop,
  SuspenseFallback,
} from "@components";
import { useToken } from "@hooks";
import { ProductDetails } from "@pages";
import { getCartProducts } from "@redux";
import PrivateRoute from "./components/privateRoute";
import { getMenProducts, getUser, getWomenProducts } from "@redux";

const Home = lazy(() => import("./pages/home/Home"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Products = lazy(() => import("./pages/products/Products"));

function App() {
  const dispatch = useDispatch();

  const { token } = useToken();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getMenProducts({ page: 1 }));
      dispatch(getWomenProducts({ page: 1 }));
      await dispatch(getUser(token));
      await dispatch(getCartProducts(token));
    };

    fetchData();
  }, []);

  return (
    <div className="text-gray-800">
      <Toaster position="bottom-center" reverseOrder={false} />
      <ScrollToTop />
      <Navbar />

      <div className=" px-[5rem] max-md:px-[1rem]">
        <Suspense fallback={<SuspenseFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<RouteNotFound />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products/:gender" element={<Products />} />
            <Route
              path="/productDetails/:productId"
              element={<ProductDetails />}
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
