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

// 생성
export const createNote = async (data) => {
  const res = await api.post("/notes", data);
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