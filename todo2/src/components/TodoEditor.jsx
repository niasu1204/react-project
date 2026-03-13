import { useState } from "react";

const TodoEditor = ({ onCreate }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("2");

  const handleSubmit = () => {
    if (!text) return;
    onCreate(text, parseInt(priority));
    setText("");
    setPriority("2");
  };

  return (
    <div>
      <input
        placeholder="할 일 입력"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="1">🔴 높음</option>
        <option value="2">🟡 중간</option>
        <option value="3">🟢 낮음</option>
      </select>
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default TodoEditor;