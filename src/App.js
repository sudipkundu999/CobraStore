import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, ThemeToggleButton } from "./components";
import { useTheme } from "./contexts";
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
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" && "dark-mode-class"}>
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

      <ToastContainer />
      <ThemeToggleButton />
    </div>
  );
}

export default App;
