import {useState, createContext } from "react";

const ThemeContext= createContext()

const initalTheme="light"

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initalTheme) 
    const handleTheme = (e) => {
        //console.log(e.target.value)
        setTheme(e.target.value)        
    }

    const data={theme, handleTheme}

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
export {ThemeProvider}

export default ThemeContext;