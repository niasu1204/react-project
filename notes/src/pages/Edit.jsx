import { useEffect, useState } from "react";
import { getNote, updateNote } from "../api/notes";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getNote(id).then((data) => {
      setTitle(data.title);
      setContent(data.content);
    });
  }, []);

  const handleSubmit = async () => {
    await updateNote(id, { title, content });
    nav(`/notes/${id}`);
  };

  return (
    <div>
      <h2>수정</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>수정 완료</button>
    </div>
  );
}

export default Edit;