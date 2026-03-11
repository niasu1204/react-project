// 사용자 입력
// ↓
// onChange 이벤트 발생
// ↓
// setText() 실행
// ↓
// state(text) 변경
// ↓
// React 렌더링
// ↓
// 화면 업데이트

import { useState } from "react";

const LiveInput = () =>{
    
    const[text, setText] = useState('');

    const handlerChange = (e) => {setText(e.target.value);}

    return (<div style={{ padding: '20px' }}>
        <h2>실시간 입력창</h2>
      <input 
        type="text" 
        placeholder="무엇이든 입력하세요..."
        style={{ fontSize: '16px', padding: '5px' }}
        onChange={handlerChange}
      />
      <p>입력값: <strong>{text}</strong></p>


</div>);
}

export default LiveInput