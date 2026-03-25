import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const ChatRoom = ({ username }) => {
  const { roomName } = useParams(); // URL의 :roomName 값을 가져옴
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    if (!username) {
      alert("닉네임이 없습니다. 목록으로 돌아갑니다.");
      navigate('/');
      return;
    }

    // 소켓 연결
    ws.current = new WebSocket(`ws://localhost:8000/ws-chat/${roomName}`);

    ws.current.onopen = () => {
      ws.current.send(JSON.stringify({ sender: username, type: "JOIN" }));
    };

    ws.current.onmessage = (event) => {
      setMessages(prev => [...prev, JSON.parse(event.data)]);
    };

    return () => ws.current?.close(); // 컴포넌트 나갈 때 소켓 종료
  }, [roomName, username, navigate]);

  const sendMessage = () => {
    if (ws.current && input.trim()) {
      ws.current.send(JSON.stringify({
        sender: username,
        content: input,
        type: "CHAT"
      }));
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2># {roomName}</h2>
        <button onClick={() => navigate('/')}>나가기</button>
      </div>

      <div style={{ height: 400, overflowY: 'auto', border: '1px solid #ddd', padding: 15, marginBottom: 10, borderRadius: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 10, textAlign: msg.sender === username ? 'right' : 'left' }}>
            <div style={{ fontSize: 12, color: '#666' }}>{msg.sender}</div>
            <div style={{ 
              display: 'inline-block', 
              padding: '8px 12px', 
              borderRadius: 10, 
              backgroundColor: msg.sender === username ? '#007AFF' : '#eee',
              color: msg.sender === username ? 'white' : 'black'
            }}>
              {msg.content}
            </div>
            <div style={{ fontSize: 10, color: '#999' }}>{dayjs(msg.timestamp).format('HH:mm')}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <input style={{ flex: 1, padding: 10 }} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
};

export default ChatRoom;