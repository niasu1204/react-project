import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../api/notes";
import { useNavigate } from "react-router-dom";

// 백엔드 주소 (api.js의 baseURL과 동일하게 맞춥니다)
const IMAGE_BASE_URL = "http://127.0.0.1:8000/";

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

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((n) => (
          <li key={n.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <div onClick={() => nav(`/notes/${n.id}`)} style={{ cursor: "pointer", fontWeight: "bold" }}>
              {n.title} / {n.file_path}
            </div>
            
            {/* 💡 이미지가 있는 경우에만 보여주기 */}
            {n.file_path && (
              <div style={{ margin: "10px 0" }}>
                <img 
                  src={`${IMAGE_BASE_URL}${n.file_path}`} 
                  alt="첨부 이미지" 
                  style={{ maxWidth: "200px", borderRadius: "8px" }} // 크기 조절
                />
              </div>
            )}
            
            <div>
              <button onClick={() => nav(`/edit/${n.id}`)}>수정</button>
              <button onClick={() => handleDelete(n.id)}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;