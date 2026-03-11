//게시글 목록 페이지
import { Link } from "react-router-dom"
import {posts} from './data'

const BoardList = () =>{

    return (<div>
        <h1>게시판</h1>
        { posts.map((post)=>( 
            <div key={post.id}>
                <Link to={`/board/${post.id}`}>
                    {post.title}
                </Link>
            </div>
        )    
        )}

        <br/>
        <Link to='/write'>글쓰기</Link>
    </div>)

}

export default BoardList