import { useState, useRef } from "react";
// 이름을 입력하고 추가
// 이름 리스트 보기
// 이름 수정하기
// 이름 삭제하기

const CrudExample = () => {
  const [people, setPeople] = useState([]); // 목록 상태
  const [name, setName] = useState("");     // 입력 필드 상태
  const [editIndex, setEditIndex] = useState(null); // 수정 모드 여부
  const inputRef = useRef();

  // 항목 추가 또는 수정
  const handleSubmit = () => {
    if (name.trim() === "") return;

    if (editIndex === null) {
      // 추가
      setPeople([...people, name]);
    } else {
      // 수정
      const updated = [...people];//people배열의 값만 복사한 배열
      updated[editIndex] = name;
      setPeople(updated);
      setEditIndex(null);
    }

    setName("");
    inputRef.current.focus();
  };

  // 수정 시작
  const handleEdit = (index) => {
    setName(people[index]);
    setEditIndex(index);
    inputRef.current.focus();
  };

  // 항목 삭제
  const handleDelete = (index) => {
    const updated = people.filter((_, i) => i !== index);
    setPeople(updated);
    // 수정 중이던 항목이 삭제되면 editIndex 초기화
    if (editIndex === index) {
      setEditIndex(null);
      setName("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> CRUD </h2>

      <input
        ref={inputRef}
        value={name}
        placeholder="이름 입력"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex === null ? "추가" : "수정 완료"}
      </button>

      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person}{" "}
            <button onClick={() => handleEdit(index)}>수정</button>{" "}
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudExample;
