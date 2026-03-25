import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('password: '+ password)  
      await api.post("/login", { username, password });
      nav("/items");
    } catch (err) {
      alert(err.response?.data?.detail || "로그인 실패");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin} style={{ display: "grid", gap: "10px", maxWidth: "300px" }}>
        <input placeholder="아이디" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">로그인</button>
      </form>
      <div style={{ marginTop: "10px" }}>
        <Link to="/register">회원가입하러 가기</Link>
      </div>
    </div>
  );
}