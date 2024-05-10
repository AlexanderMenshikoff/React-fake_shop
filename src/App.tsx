import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { MainPage } from "./pages/MainPage";
import { ScrollToTop } from "./functions/functions";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      {ScrollToTop()}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
