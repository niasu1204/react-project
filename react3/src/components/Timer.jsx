import { useRef, useEffect, useState } from "react";

const Timer = () =>{

    const [seconds, setSeconds] = useState(0);
    //타이머 시작 & 정리
    let interval = "";
    useEffect(() =>{
            console.log("타이머 시작");
            interval = setInterval(()=>{setSeconds((prev)=>{ return prev+1})} ,1000);
         
            return () => {
                clearInterval(interval);
                console.log("타이머 정리됨 (언마운트)");
            };  
        }
        ,[]
    );

    //seconds변경시마다 로그 찍기
    useEffect(
        ()=>{console.log(`현재 초 : ${seconds}`);}, [seconds]
    );
    
   // useEffect(()=>{   }, []);

    return(<>
        <h2>타이머 : {seconds}초</h2>
    </>);
}
export default Timer;