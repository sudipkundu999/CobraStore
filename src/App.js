import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.css";
import {
  Header,
  PrivateRoute,
  RestrictedRoutes,
  ThemeToggleButton,
} from "./components";
import { useTheme } from "./contexts";
import {
  Cart,
  Homepage,
  Login,
  Mock,
  Page404,
  Products,
  Signup,
  Wishlist,
} from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "dark-mode-class" : ""}>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<RestrictedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToastContainer />
      <ThemeToggleButton />
    </div>
  );
}

export default App;
