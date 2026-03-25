import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Items() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isOffer, setIsOffer] = useState("");
  const [username, setUsername] = useState("");
  const nav = useNavigate();

  const loadData = async () => {
    try {
      const userRes = await api.get("/me");
      setUsername(userRes.data.username);
      
      const itemsRes = await api.get("/items");
      setItems(itemsRes.data);
    } catch (err) {
      // 인증(쿠키)이 없거나 만료되면 401 에러 발생 -> 로그인 페이지로
      if (err.response?.status === 401) {
        nav("/login");
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = async () => {
    await api.post("/logout");
    nav("/login");
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await api.post("/items", { name, price: parseFloat(price), is_offer: isOffer || null });
    setName(""); setPrice(""); setIsOffer("");
    loadData(); // 목록 새로고침
  };

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>내 아이템 ({username}님)</h2>
        <button onClick={handleLogout}>로그아웃</button>
      </header>
      <hr />

      <form onSubmit={handleCreate} style={{ display: "grid", gap: "10px", maxWidth: "300px", marginBottom: "20px" }}>
        <input placeholder="이름" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" step="0.01" placeholder="가격" value={price} onChange={e => setPrice(e.target.value)} required />
        <select value={isOffer} onChange={e => setIsOffer(e.target.value)}>
          <option value="">할인 없음</option>
          <option value="true">할인</option>
        </select>
        <button type="submit">등록</button>
      </form>

      <ul>
        {items.map(it => (
          <li key={it.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>
            <strong>#{it.id} {it.name}</strong>
            <div>가격: {it.price.toFixed(2)}</div>
            <div>할인 여부: {it.is_offer ? "예" : "아니오"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}