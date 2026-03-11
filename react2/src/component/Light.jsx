//버튼 - 클릭 이벤트
//light의 값이 ON이면 OFF로, OFF면 ON으로 변경하는 함수로 리랜더링

import { useState } from "react";

//ON이면 버튼text가 "끄기"로, 아니라면 "켜기"로 바꿔준다.
const Light = () =>{
    const [light, setLight] = useState('OFF');
    const clickButton = () =>{
        setLight( light === 'ON'? 'OFF': 'ON');
    }
    return (
        <>
          <button onClick={clickButton}>
                {light === 'ON'? '끄기': '켜기'}
            </button>  
        </>
    );
}

export default Light;