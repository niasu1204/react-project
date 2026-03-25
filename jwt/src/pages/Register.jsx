import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    try {
      // 백엔드로 아이디와 비밀번호 전송 (JSON 형식)
      await api.post("/register", { username, password });
      
      // 성공 시 알림을 띄우고 로그인 페이지로 이동
      alert("회원가입이 완료되었습니다! 로그인해 주세요.");
      nav("/login");

    } catch (err) {
      // 에러 발생 시 FastAPI에서 보낸 에러 메시지(detail)를 띄워줌
      // (예: "이미 존재하는 사용자명입니다.")
      alert(err.response?.data?.detail || "회원가입에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleRegister} style={{ display: "grid", gap: "10px", maxWidth: "300px" }}>
        <input 
          placeholder="아이디" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">회원가입 완료</button>
      </form>
      
      <div style={{ marginTop: "15px" }}>
        <Link to="/login" style={{ color: "#0066cc", textDecoration: "none" }}>
          이미 계정이 있으신가요? 로그인하기
        </Link>
      </div>
    </div>
  );
}