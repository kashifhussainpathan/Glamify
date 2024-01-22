import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { ProductDetails } from "@pages";
import { getCartProducts } from "@redux";
import { getMenProducts, getUser, getWomenProducts } from "@redux";
import { Footer, Navbar, RouteNotFound, ScrollToTop } from "@components";
import { useToken, useCartState, useUserState, useProductsState } from "@hooks";

const Home = lazy(() => import("./pages/home/Home"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Products = lazy(() => import("./pages/products/Products"));

function App() {
  const dispatch = useDispatch();

  const { token } = useToken();
  const { cart } = useCartState();
  const { currentUser: user } = useUserState();
  const { menProducts, womenProducts } = useProductsState();

  useEffect(() => {
    if (user === null) dispatch(getUser(token));
    if (cart?.length === 0) dispatch(getCartProducts(token));
    if (menProducts?.length === 0) dispatch(getMenProducts({ page: 1 }));
    if (womenProducts?.length === 0) dispatch(getWomenProducts({ page: 1 }));
  }, []);

  return (
    <div className="text-gray-800">
      <Toaster position="bottom-center" reverseOrder={false} />
      <ScrollToTop />
      <Navbar />

      <div className=" px-[5rem] max-md:px-[1rem]">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
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
