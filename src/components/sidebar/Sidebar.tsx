import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";

const Sidebar = () => {
  const admin = true;
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {admin ? (
            <div>
              <p className="title">Main</p>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </div>
          ) : (
            <p>
              <li></li>
            </p>
          )}
          <p className="title">Admin</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">Menü</p>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>

          <p className="title">User</p>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <InputOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
