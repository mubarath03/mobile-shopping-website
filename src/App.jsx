import { Routes, Route,HashRouter, } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

import { CartProvider } from "./context/CartContext";
import Orders from "./pages/Order";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./Context/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <HashRouter>
          <Navbar/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
    
          <Footer/>
          </HashRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
