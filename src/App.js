import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import MainSection from "./components/main-section/mainSection";
import ProductCollection from "./components/product-collection/productCollection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <ProductCollection />
    </div>
  );
}

export default App;
