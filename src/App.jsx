import {
  BrowserRouter as Router,
  Route,
  Routes,
  //Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:title" element={<SearchProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
