import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomList from './room/RoomList';
import ChatRoom from './room/ChatRoom';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('chat-user') || '');

  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 화면: 방 목록 */}
        <Route path="/" element={<RoomList username={username} setUsername={setUsername} />} />
        {/* 채팅 화면: URL 파라미터로 roomName을 받음 */}
        <Route path="/chat/:roomName" element={<ChatRoom username={username} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;