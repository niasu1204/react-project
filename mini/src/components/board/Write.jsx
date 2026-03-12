import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './board.css'

function Write() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(title, content);
        alert("작성 완료");
        //비동기 통신 - 서버에 데이터 전송(서버는 DB에 저장)
        navigate("/dashboard/board");
    }

    return (
        <div className="write-container">

            <h1 className="write-title">글쓰기</h1>

            <input
                className="write-input"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />

            <textarea className="write-textarea"
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br />

            <button className="write-btn" onClick={handleSubmit}>
                작성
            </button>

        </div>
    );
}

export default Write;