import { useState } from "react";
import { createNote } from "../api/notes";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null); // 1. 파일 상태 추가
  const nav = useNavigate();

  const handleSubmit = async () => {
    // 2. FormData 객체 생성
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    
    // 3. 파일이 선택되었을 경우에만 추가 (선택 사항)
    if (file) {
      formData.append("file", file);
    }

    // 4. JSON 대신 FormData 전송
    try {
      await createNote(formData);
      nav("/");
    } catch (error) {
      console.error("업로드 실패:", error);
      alert("메모 저장에 실패했습니다.");
    }
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
      {/* 5. 파일 입력 필드 추가 */}
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <br />
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
}

export default Create;