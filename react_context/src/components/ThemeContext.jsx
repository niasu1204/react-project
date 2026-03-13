//context, provider 선언

import { createContext, useState } from "react";

export const ThemeContext  = createContext();

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState('light');
       
    const themeToggle = ()=>{
        setTheme((prev) => (prev === 'light'? 'dark':'light'))
    }

    return(<>
        <ThemeContext.Provider value={{theme, themeToggle, a:1}}>
        {children}
        </ThemeContext.Provider>
    </>)
}