import { useState } from "react";

const BatchTest = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log("렌더링 발생");

    const handleClick = () => {
        console.log("클릭 이벤트 시작");

        setCount(count + 1); // 0 + 1
        setCount(count + 1); // 0 + 1
        setCount(count + 1); // 0 + 1 
        //React state 업데이트는 렌더링 시점에 적용
        setCount2(count + 1);
        console.log(count);

        console.log("클릭 이벤트 끝");
    };//이벤트가 끝나야 렌더링
      //이벤트 → state 변경 모으기 → 렌더링

    // const handleClick = () => {
    //     setCount(c => c + 1);
    //     setCount(c => c + 1);
    //     setCount(c => c + 1);
    // };

    return (
        <div style={{ padding: "20px" }}>
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>

            <button onClick={handleClick}>
               count +3 증가 시도
            </button>
        </div>
    );
}
export default BatchTest;
