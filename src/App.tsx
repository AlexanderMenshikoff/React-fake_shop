import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
