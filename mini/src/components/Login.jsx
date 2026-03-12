import { user } from '../data/user'
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const idRef = useRef(null);
    const pwRef = useRef(null);

    const navigate = useNavigate();

    const handleLogin = () => {

        if (username.trim() === "") {
            alert("아이디를 입력하세요");
            idRef.current.focus();
            return;
        }

        if (password.trim() === "") {
            alert("비밀번호를 입력하세요");
            pwRef.current.focus();
            return;
        }

        // 로그인 성공 처리
        if (user.id === username && user.password === password) {
            sessionStorage.setItem("loginUser", username);

            alert("로그인 성공");

            navigate("/dashboard");
        } else {
            alert('로그인 실패')
        }
    };

    return (
         <div className="login-container">

      <div className="login-box">

        <h2 className="login-title">Mini Dashboard</h2>

        <input
          className="login-input"
          ref={idRef}
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          className="login-input"
          ref={pwRef}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          로그인
        </button>

      </div>

    </div>
    );
};

export default Login;