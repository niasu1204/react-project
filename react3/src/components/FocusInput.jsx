import { useRef } from "react";

//DOM 객체와 useRef연결하기
const FocusInput = ()=>{
    const inputRef = useRef(null);

    const handlerClick = () =>{
        inputRef.current.focus();
    }

    //ref속성을 사용해 useRef객체와 연결
    return(<div>
        <input ref={inputRef} type="text" placeholder="여기에 입력하세요" />
        <button onClick={handlerClick}>입력창에 포커스</button>
    </div>);
}

export default FocusInput;