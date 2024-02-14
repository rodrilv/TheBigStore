import { Navbar } from "../../components";
import { Main } from "../";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Main />
    </div>
  );
}
