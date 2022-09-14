import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Product, Purchases, Login, SignUp } from "./pages";

function App() {
  return (
    <HashRouter>
      {/* Rutas privadas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Purchases />} />

        {/* Rutas Publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
