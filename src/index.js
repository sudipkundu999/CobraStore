import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {
  AddressProvider,
  AuthProvider,
  CartProvider,
  OrdersProvider,
  ProductProvider,
  ThemeProvider,
  WishlistProvider,
} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ProductProvider>
            <WishlistProvider>
              <CartProvider>
                <AddressProvider>
                  <OrdersProvider>
                    <App />
                  </OrdersProvider>
                </AddressProvider>
              </CartProvider>
            </WishlistProvider>
          </ProductProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
