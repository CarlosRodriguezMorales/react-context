import {useState, useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const initalTheme="light"
const initialLanguaje="es"
const initialAuth=null

const translations={
    es: {
      headerTitle: "Mi aplicación SIN Context API",
      headerSubtitle: "Mi cabecera",
      headerLight: "Claro",
      headerDark: "Oscuro",
      buttonLogin: "Iniciar Sesión",
      buttonLogout: "Cerrar Sesión",
      mainWelcome: "Bienvenid@ invitad@",
      mainHello: "Hola Usuari@",
      mainContent: "Mi contenido principal",
      footerTitle: "Mi pié de página",
    },
    en: {
      headerTitle: "My application without Context API",
      headerSubtitle: "My header",
      headerLight: "Light",
      headerDark: "Dark",
      buttonLogin: "Login",
      buttonLogout: "Logout",
      mainWelcome: "Welcome Guest",
      mainHello: "Hello User",
      mainContent: "My main content",
      footerTitle: "My footer",
    }

}

const MyPage = () => {
    const [theme, setTheme] = useState(initalTheme) 
    const [languaje, setLanguaje] = useState(initialLanguaje)
    const [texts, setTexts] = useState(translations[languaje])
    const [auth, setAuth] = useState(initialAuth)

    //console.log(texts)

    const handleTheme = (e) => {
        //console.log(e.target.value)
        setTheme(e.target.value)        
    }

    const handleLanguaje = (e) => {
        //console.log(e.target.value)
        setLanguaje(e.target.value)
        
    }

    const handleAuth = (e) => {
        if(auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
    }

    useEffect(() => {
       //console.log(languaje)
        setTexts(translations[languaje])
    }, [languaje])

    return (
        <div className="my-page">
            <Header 
                theme={theme} 
                handleTheme={handleTheme} 
                texts={texts} 
                handleLanguaje={handleLanguaje}
                auth={auth}
                handleAuth={handleAuth}
            />
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts}/>
        </div>
    )
}

export default MyPage
