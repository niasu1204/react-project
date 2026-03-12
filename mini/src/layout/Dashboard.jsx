import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {

  const navigate = useNavigate();
  const user = sessionStorage.getItem("loginUser");

  const logout = () => {
    sessionStorage.removeItem("loginUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

      {/* 사이드바 */}
      <div className="sidebar">

        <h2 className="logo">Dashboard</h2>

        <nav className="menu">
          <Link to="/dashboard">Home</Link>
          <Link to="timer">Timer</Link>
          <Link to="canvas">Canvas</Link>
          <Link to="board">Board</Link>
        </nav>

        <div className="logout-area">
          <p>{user}님</p>
          <button onClick={logout}>Logout</button>
        </div>

      </div>

      {/* 메인 영역 */}
      <div className="main-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Dashboard;