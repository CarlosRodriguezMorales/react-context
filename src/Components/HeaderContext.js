import {useContext} from 'react'
import LanguajeContext from '../Context/LanguajeContext'
import ThemeContext from '../Context/ThemeContext'
import AuthContext from '../Context/AuthContext'

const HeaderContext = () => {
    const {theme, handleTheme} = useContext(ThemeContext)
    const {handleLanguaje, texts} = useContext(LanguajeContext)
    const {auth, handleAuth} = useContext(AuthContext)

    return (
        <header className={theme}>
            <h2>{texts.headerTitle}</h2>  
            <h3>{texts.headerSubtitle}</h3> 
            <select name="languaje" onChange={handleLanguaje}>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
            <input type="radio" name="theme" onClick={handleTheme} value="light" id="light-context"></input>
            <label htmlFor="light-context">{texts.headerLight}</label>
            <input type="radio" name="theme" onClick={handleTheme} value="dark" id="dark-context"></input>
            <label htmlFor="dark-context">{texts.headerDark}</label>
            <button onClick={handleAuth}>
                {auth?texts.buttonLogout:texts.buttonLogin}
            </button>               
        </header>
    )
}

export default HeaderContext
