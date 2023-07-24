import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestScreen from "./screens/TestScreen";
import Header from "./components/Header";
// import ProductScreen from './screens/ProductScreen';
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import CartList from "./screens/CartList";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import ProductList from "./screens/ProductList";
import OrderHistory from "./screens/OrderHistory";
import ProductForm from "./components/ProductForm";
import RandomNumberGenerator from "./components/RandomNumberGenerator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="mb-5" />
        <Routes>
          <Route path="/" element={<RandomNumberGenerator />} />
          <Route path="/home" element={<TestScreen />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<TestScreen />} />
          <Route path="/features" element={<TestScreen />} />
          <Route path="/pricing" element={<TestScreen />} />

          <Route path="/cart/:id/:qty" element={<CartScreen />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/orders/all" element={<OrderConfirmationScreen />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/add" element={<ProductForm />} />
          <Route path="/order" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
