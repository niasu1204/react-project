import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../api/notes";
import { useNavigate } from "react-router-dom";

function List() {
  const [notes, setNotes] = useState([]);
  const nav = useNavigate();

  const load = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    load();
  };

  return (
    <div>
      <h2>메모 목록</h2>
      <button onClick={() => nav("/create")}>작성</button>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            <span onClick={() => nav(`/notes/${n.id}`)}>
              {n.title}
            </span>
            <button onClick={() => nav(`/edit/${n.id}`)}>수정</button>
            <button onClick={() => handleDelete(n.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;