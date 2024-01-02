import { Navigate } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Admin.css";

export const Admin = ({ children }) => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};
