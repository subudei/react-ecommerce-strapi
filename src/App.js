import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homepage";

import "./App.css";
import Page404 from "./components/404-page/page404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
