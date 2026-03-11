import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Write() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(title, content);
        alert("작성 완료");

        navigate("/board");
    }

    return (
        <div>

            <h1>글쓰기</h1>

            <input
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />

            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br />

            <button onClick={handleSubmit}>
                작성
            </button>

        </div>
    );
}

export default Write;