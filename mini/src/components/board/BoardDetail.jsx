import { posts } from '../../data/data'
import { useParams, useNavigate } from "react-router-dom";
import './board.css'

function BoardDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === Number(id));


  return (
    <div>
      <h1 className="write-title">게시글 상세</h1>
      {!post ? (<h2>게시글 없음</h2>) : (<div><p>게시글 번호 : {id}</p>
      <p>{post.title}</p>
      <p>{post.content}</p></div>)}  
      
      
      <button onClick={() => navigate(-1)}>
        목록으로
      </button>

    </div>
  );
};

export default BoardDetail;