//state에 여러개의 속성을 가지고 있는 객체를 저장
//color:속성 글씨 색상, bgcolor : 배경색

import { useState } from "react";

//input 태그에 입력한 값으로 글씨 색과 배경색을 변경해보자
const ChangeColor = () => {

    const [cssh1, setCssh1] = useState({ color: "blue", backgroundColor: "grey" });
    const [color, setColor] = useState("black");
    const [bgcolor, setBgcolor] = useState("white");


    //색상 유효한지 검사
    function isValidCssColor(color) {
        const s = new Option().style;
        s.color = color; // 유효한 색상이면 저장. 아니면 ''을 저장.
        return s.color !== '';
    }

    const chColor = () => {
        if (isValidCssColor(color) && isValidCssColor(bgcolor)) {
            setCssh1({ color: color, backgroundColor: bgcolor })
        } else {
            alert('올바른 색상이 아님')
        }
    }

    return (<>
        <h1 style={cssh1}>h1 태그입니다.</h1>
        배경색: <input value={bgcolor} onChange={(e) => { setBgcolor(e.target.value) }} /><br />
        글자색: <input value={color} onChange={(e) =>{setColor(e.target.value)}}/> <br />
        <button onClick={chColor}>h1 색상 변경</button>
    </>);

}

export default ChangeColor;