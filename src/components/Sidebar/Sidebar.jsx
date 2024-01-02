import "./Sidebar.css";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <p style={{ textAlign: "center" }}>Panel de Control</p>
      <div>
        <div className="sidebar-option">
          <div>
            <CiCirclePlus />
          </div>
          <div>
            <p>Subir un producto</p>
          </div>
        </div>
        <div className="sidebar-option">
          <div>
            <CiEdit />
          </div>
          <div>
            <p>Actualizar un Producto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
