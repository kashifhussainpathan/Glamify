import "./App.css";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Products, Profile } from "./pages";

function App() {
  const user = useSelector(({ user }) => user.currentUser);
  console.log(user);

  return (
    <>
      <Navbar />

      <div className="app-routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
