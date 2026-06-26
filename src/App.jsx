import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import About from "./components/About"
import Shop from "./components/Shop"
import Product from "./components/Product"
import NotFound from "./components/NotFound"

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<h2 className="text-warning">This item in shop page not found</h2>} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
