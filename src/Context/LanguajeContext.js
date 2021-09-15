import { createContext, useState, useEffect } from "react";

const LanguajeContext = createContext()

const initialLanguaje="es"
const translations={
    es: {
      headerTitle: "Mi aplicación CON Context API",
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
      headerTitle: "My application with Context API",
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

const LanguajeProvaider =({children}) => {
    const [languaje, setLanguaje] = useState(initialLanguaje)
    const [texts, setTexts] = useState(translations[languaje])

    const handleLanguaje = (e) => {
        //console.log(e.target.value)
        setLanguaje(e.target.value)
        
    }

    useEffect(() => {
        //console.log(languaje)
         setTexts(translations[languaje])
     }, [languaje])

    const data={texts, handleLanguaje}

    return(
        <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
    )    
}
export {LanguajeProvaider}


export default LanguajeContext