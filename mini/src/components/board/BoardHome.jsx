import { Link, Outlet } from "react-router-dom";
import './board.css'

function BoardHome(){

  return (
    <div className="board-container">

      <h1>React 게시판</h1>
      
      <Link to="/dashboard/board">
        게시판 가기
      </Link>
        <Link to="/dashboard/board/write">
        글쓰기 가기
      </Link>
      <Outlet />
    </div>
  );
}

export default BoardHome;