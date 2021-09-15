import {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguajeContext from '../Context/LanguajeContext'
import AuthContext from '../Context/AuthContext'

const MainContext = () => {    
    const {theme} = useContext(ThemeContext)
    const {texts} = useContext(LanguajeContext)
    const {auth} = useContext(AuthContext)
    return (
        <body className={theme}>
            {auth?<p>{texts.mainHello}</p>:<p>{texts.mainWelcome}</p>}                
            <p>{texts.mainContent}</p>
        </body>
)
}

export default MainContext
