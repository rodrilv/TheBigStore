import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  //Switch,
} from "react-router-dom";

import { Admin, Home, SearchProduct } from "./pages";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:title" element={<SearchProduct />} />
        <Route path="/administration" element={<Admin />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
