import { useState, useRef } from "react";

const GuessNumberGame = ()=>{
    //랜덤으로 정답  Math.floor(Math.random() * 범위)+ 시작점
    const [answer, setAnswer] = useState(Math.floor(Math.random() * 100)+ 1);
    const [result, setResult] = useState("숫자를 입력하세요");
    const [count, setCount] = useState(0); 

    const inputRef = useRef();
    
    console.log(answer)
    const checkNumber = () =>{
        const value = Number(inputRef.current.value);

        if(!value){
            setResult('숫자를 입력하세요')
            return;
        }
        setCount(count+1);

        if(value > answer){
            setResult('DOWN');
        }else if(value < answer){
            setResult('UP')
        }else{
            setResult('정답입니다.')
        }
        
        inputRef.current.value="";
        inputRef.current.focus();

    }
    
    const resetGame  = () =>{
        setAnswer(Math.floor(Math.random() * 100)+ 1);
        setResult('새 게임 시작!!')
        setCount(0);
        inputRef.current.value="";
        inputRef.current.focus();
    }

    return(<div style={{ padding:'30px', textAlign:'center'}}>
         <h1>숫자 맞추기 게임</h1>
        <input type='number' placeholder="1~100 입력" ref={inputRef} />
        <button onClick={checkNumber} style={{marginLeft:'10px'}}>확인</button>
        <h2>결과 : {result}</h2>
        <p>시도 횟수 : {count}</p>
        <button onClick={resetGame}>다시 시작</button>
    </div>);
}

export default GuessNumberGame;