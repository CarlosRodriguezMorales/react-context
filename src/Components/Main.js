import React from 'react'

const Main = ({theme, texts, auth}) => {
    return (
            <body className={theme}>
                {auth?<p>{texts.mainHello}</p>:<p>{texts.mainWelcome}</p>}                
                <p>{texts.mainContent}</p>
            </body>
    )
}

export default Main
