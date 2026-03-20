import { useState } from "react";
import { createNote } from "../api/notes";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const nav = useNavigate();

  const handleSubmit = async () => {
    await createNote({ title, content });
    nav("/");
  };

  return (
    <div>
      <h2>메모 작성</h2>
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
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
}

export default Create;