import { createContext, useContext } from "react"
import { ThemeContext } from "./ThemeContext";


//1. Context생성
const UserContext = createContext();

//2. 부모 컴포넌트(값 제공)
export const Parent = ()=>{
    const user = {name: 'scott', role:'admin'}
    return(<>
        <UserContext.Provider value={user} >
            <Child />
        </UserContext.Provider>
    </>)
}

//3. 자식 컴포넌트(값 소비)
const Child = ()=>{

    const user = useContext(UserContext);
    const {theme} = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme ==='light'? '#fff': '#333',
        color: theme ==='light'? '#000': '#fff' }}>
            안녕하세요! {user.name}님! 역할: {user.role};
        </div>
    )
}
