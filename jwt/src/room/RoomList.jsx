import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomList = ({ username, setUsername }) => {
  const [rooms, setRooms] = useState(["자유게시판", "개발자방", "취미공유"]);
  const [newRoom, setNewRoom] = useState('');
  const navigate = useNavigate();

  const handleJoin = (roomName) => {
    if (!username.trim()) {
      alert("닉네임을 먼저 입력해주세요!");
      return;
    }
    localStorage.setItem('chat-user', username); // 닉네임 저장
    navigate(`/chat/${roomName}`); // 해당 방 경로로 이동
  };

  return (
    <div style={{ padding: 40, maxWidth: 500, margin: 'auto' }}>
      <h2>💬 채팅방 목록</h2>
      
      <div style={{ marginBottom: 20 }}>
        <input 
          placeholder="닉네임 입력"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 10, width: '80%', marginBottom: 10 }}
        />
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: 10, overflow: 'hidden' }}>
        {rooms.map(room => (
          <div 
            key={room} 
            onClick={() => handleJoin(room)}
            style={{ padding: 15, borderBottom: '1px solid #eee', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
          >
            <span># {room}</span>
            <button>입장</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <input 
          placeholder="새 방 이름"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={() => newRoom && setRooms([...rooms, newRoom])}>방 만들기</button>
      </div>
    </div>
  );
};

export default RoomList;