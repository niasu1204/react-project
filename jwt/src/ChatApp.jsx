import React, { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs';

const ChatApp = () => {
  const [messages, setMessages] = useState([]); //메세지 목록 저장
  const [username, setUsername] = useState(''); // 접속한 이름 저장
  const [connected, setConnected] = useState(false); // 접속 상태
  const [input, setInput] = useState(''); // 메세지
  const ws = useRef(null); //웹소켓 객체 저장

  const connect = () => {
    //1. ws 프로토콜을 사용해 WebSocket 연결 시도
    ws.current = new WebSocket("ws://localhost:8000/ws-chat");
    //2.onopen: 연결이 성공적으로 이뤄지면 함수 수행
    ws.current.onopen = () => {
      setConnected(true);
      
      //send() : 서버에 메세지 전송(JSON)
      ws.current.send(JSON.stringify({
        sender: username || "Anonymous",
        type: "JOIN"
      }));
    };
    //3. onmessage : 서버로부터 메세지 도착했을때 수행
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(prev => [...prev, data]);
    };
    //4. onclose : 서버와의 연결이 끊어졌을때
    ws.current.onclose = () => {
      setConnected(false);
    };
  };
  //서버에 메세지 전송
  const sendMessage = () => {
    if (ws.current && input.trim()) {
      ws.current.send(JSON.stringify({
        sender: username || "Anonymous",
        content: input,
        type: "CHAT"
      }));
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>실시간 채팅 (FastAPI)</h2>

      {!connected && (
        <div>
          <input
            placeholder="사용자명 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={connect}>접속</button>
        </div>
      )}

      {connected && (
        <>
          <div style={{ maxHeight: 300, overflowY: 'scroll', border: '1px solid gray' }}>
            {messages.map((msg, idx) => (
              <div key={idx}>
                <b>{msg.sender}:</b> {msg.content}
                <small style={{ marginLeft: 10 }}>
                  {dayjs(msg.timestamp).format('HH:mm:ss')}
                </small>
              </div>
            ))}
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>전송</button>
        </>
      )}
    </div>
  );
};

export default ChatApp;