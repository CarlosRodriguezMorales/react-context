import React from 'react'

const Header = ({theme, handleTheme, handleLanguaje, texts, auth, handleAuth}) => {
    return (
            <header className={theme}>
                <h2>{texts.headerTitle}</h2>  
                <h3>{texts.headerSubtitle}</h3> 
                <select name="languaje" onChange={handleLanguaje}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <input type="radio" name="theme" onClick={handleTheme} value="light" id="light"></input>
                <label htmlFor="light">{texts.headerLight}</label>
                <input type="radio" name="theme" onClick={handleTheme} value="dark" id="dark"></input>
                <label htmlFor="dark">{texts.headerDark}</label>
                <button onClick={handleAuth}>
                    {auth?texts.buttonLogout:texts.buttonLogin}
                </button>               
            </header>
    )
}

export default Header
