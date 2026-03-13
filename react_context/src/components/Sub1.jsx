import { createContext, useContext } from "react";

const divsContext = createContext();

export function Sub1 (){

    const divs = {color:'red'};
    //Context는 Provider 내부에서만 접근 가능하다
    return (
    <div style={{border: '10px solid green'}}>
        Hello world!!
        {/* provider의 value에는 객체 전달 */}
        <divsContext.Provider value={divs}>
        <Sub2 />
        </divsContext.Provider>
        <Sub3 />
    </div>);
}
 function Sub2 (){
    const divs = useContext(divsContext);
    return (<div style={divs}>
        Hello world!!
    </div>);
}
 function Sub3 (){
    const divs = useContext(divsContext);  //undefined
    return (<div style={divs}>
        Hello world!!
    </div>);
}
