import { Sidebar } from "../../components";
import "./Admin.scss";
import "animate.css";
import { CreateVideogame } from "./components";
import { useSelector } from "react-redux";

export const Admin = () => {
  const { menu } = useSelector((state) => state.sidebar);

  return (
    <div className="admin-container">
      <div>
        <Sidebar />
      </div>

      {menu === "CreateVideogame" ? (
        <CreateVideogame />
      ) : menu === "UpdateVideogame" ? (
        <></>
      ) : (
        <></>
      )}
    </div>
  );
};
