import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Product, Purchases, Login } from "./pages";
import { Container } from "react-bootstrap";
import { LoadingScreen, NavBar } from "./components";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector(state => state.isLoading);
  return (
    <HashRouter>
      <NavBar />
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/login" element={<Login />} />

          
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
