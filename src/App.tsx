import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <CssBaseline>
        <Cart />
        <Navbar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Container>
      </CssBaseline>
    </CartProvider>
  );
}

export default App;
