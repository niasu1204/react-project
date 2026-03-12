// [BoardDetail.jsx]

import {posts} from './data'
import { useParams } from "react-router-dom";


function BoardDetail(){

  const { id } = useParams();

  const post = posts.find(p => p.id === Number(id));

  if(!post){
    return <h2>게시글 없음</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BoardDetail;