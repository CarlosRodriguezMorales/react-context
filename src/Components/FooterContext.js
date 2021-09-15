import {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguajeContext from '../Context/LanguajeContext'

const FooterContext = () => { 
    const {theme} = useContext(ThemeContext)
    const {texts} = useContext(LanguajeContext)
    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
    )
}

export default FooterContext
