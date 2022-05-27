import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.css";
import { Header, AuthRoutes, RequiresAuth, AddressPopup } from "./components";
import { useTheme } from "./contexts";
import {
  Cart,
  Checkout,
  Homepage,
  Login,
  Mock,
  Page404,
  ProductDetails,
  Products,
  Signup,
  User,
  Wishlist,
} from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "dark-mode-class" : ""}>
      <Header />
      <AddressPopup />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<RequiresAuth />}>
          <Route path="/user" element={<User />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
