import "./App.css";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Products, Profile } from "./pages";

function App() {
  const user = useSelector(({ user }) => user.currentUser);

  return (
    <div className="bg-slate-50 h-screen">
      <Navbar />

      <div className="app-routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
