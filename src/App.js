import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Product, Purchases, Login, SignUp } from "./pages";
import { Container } from "react-bootstrap";
import { LoadingScreen } from "./components";

function App() {
  return (
    <HashRouter>
      <Container>
        <LoadingScreen />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Purchases />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
