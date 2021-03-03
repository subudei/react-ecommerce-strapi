import { Switch, Route } from "react-router-dom";

import HomePage from "./components/homepage/homepage";
import Page404 from "./components/404-page/page404";
import ShopPage from "./components/shop-page/shopPage";
import SingleProduct from "./components/single-product/singleProduct";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}
// ??????? proveri kako radi ???????????  i {match, history:{push}} ???????????

export default App;
