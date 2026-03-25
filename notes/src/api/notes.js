import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json"
  }
});

// 전체 조회
export const getNotes = async () => {
  const res = await api.get("/notes");
  return res.data;
};

// 단일 조회
export const getNote = async (id) => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
};

// 생성 (파일 업로드를 위해 수정)
export const createNote = async (formData) => {
  // 세 번째 인자로 해당 요청에만 적용할 헤더를 설정합니다.
  const res = await api.post("/notes", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// 수정
export const updateNote = async (id, data) => {
  const res = await api.put(`/notes/${id}`, data);
  return res.data;
};

// 삭제
export const deleteNote = async (id) => {
  await api.delete(`/notes/${id}`);
};