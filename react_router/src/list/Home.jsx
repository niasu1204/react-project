//[Home.jsx]
import { Link } from "react-router-dom";

function Home(){

  return (
    <div>

      <h1>React 게시판</h1>
      <p>React Router 미니 프로젝트</p>

      <Link to="/board">
        게시판 가기
      </Link>
        <Link to="/write">
        글쓰기 가기
      </Link>

    </div>
  );
}

export default Home;