import { Route, Routes } from "react-router-dom";
import { Header, ThemeToggleButton } from "./components";
import {
  Cart,
  Homepage,
  Login,
  Mock,
  Products,
  Signup,
  Wishlist,
} from "./pages";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mock" element={<Mock />} />
      </Routes>

      <ThemeToggleButton />
    </>
  );
}

export default App;
