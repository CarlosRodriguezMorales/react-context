import {AuthProvider} from '../Context/AuthContext'
import { LanguajeProvaider } from '../Context/LanguajeContext'
import { ThemeProvider } from '../Context/ThemeContext'
import FooterContext from './FooterContext'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'


const MyPageContext = () => {
    
    return (
        <div className="my-page">
            <AuthProvider>
                <ThemeProvider>
                    <LanguajeProvaider>
                        <HeaderContext/>
                        <MainContext/>
                        <FooterContext/>
                    </LanguajeProvaider>
                </ThemeProvider>
            </AuthProvider>
        </div>
    )
}

export default MyPageContext
