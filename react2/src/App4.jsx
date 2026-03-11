import { useState } from "react";
//Bulb
const Bulb = () => {
    const [light, setLight] = useState('OFF');
    console.log(light); // 자식 컴포넌트 렌더링 확인

    return (<div>
        {light === 'ON' ? (<h1 style={{ backgroundColor: 'orange' }}>ON</h1>) : (
            <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
        )}

        <button onClick={() => { setLight(light === 'ON' ? 'OFF' : 'ON') }}>
            {light === 'ON' ? '끄기' : '켜기'}
        </button>    
        </div>
    );
}
//Count
const Count = () =>{

    const [count, setCount] = useState(0);

     return (
        <>
        <div>
            <h1>{count}</h1>
             <button onClick={() =>{setCount(count + 1)}}>
            +
        </button>   
        </div>
        </>
    );

}


//App4

function App4() {
    return (
        <>
            <Bulb />
            <Count />
        </>
    )
}

export default App4