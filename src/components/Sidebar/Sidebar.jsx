import "./Sidebar.scss";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSidebar } from "../../features/sideBarSlice";
const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar-container">
      <p style={{ textAlign: "center" }}>Panel de Control</p>
      <div>
        <div
          onClick={() => dispatch(setSidebar("CreateVideogame"))}
          className="sidebar-option"
        >
          <div>
            <CiCirclePlus />
          </div>
          <div>
            <p>Subir un Producto</p>
          </div>
        </div>
        <div
          onClick={() => dispatch(setSidebar("UpdateVideogame"))}
          className="sidebar-option"
        >
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
