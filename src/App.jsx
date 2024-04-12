import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  //Switch,
} from "react-router-dom";

import { Home, SearchProduct, Product } from "./pages";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:title" element={<SearchProduct />} />
        <Route path="/product/" element={<Product />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
