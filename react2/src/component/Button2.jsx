const Button2 = () =>{
    const onClickButton2 = (name) => {
        alert(`${name}님이 클릭하셨습니다.`)
    }
    const onChageInput = (event, name) => {
        console.log('입력값: '+event.target.value)
        console.log('name: ' +name)
    }

    //onClick={onClickButton2('김솔데')} 
    //매개변수가 있는 함수일 경우 이벤트가 발생하지 않아도 즉시 실행됨
    //이벤트핸들러 = { ()=>{함수 호출}}
    return(
        <>
            <button onClick={() => {onClickButton2('김솔데')}}>클릭2</button>
            <input onChange={(e) => onChageInput(e, '김솔데')} />
        </>
    );
}

export default Button2;