import { Link } from "react-router-dom"
import { posts } from '../../data/data'
import './board.css'

const BoardList = () => {
    return (
        <div>

            <h1 className="write-title">게시글 목록</h1>

            <ul className="board-list">

                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`detail/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}

            </ul>

        </div>
    );
};

export default BoardList