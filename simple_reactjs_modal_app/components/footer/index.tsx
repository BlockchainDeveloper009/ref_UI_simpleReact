function footer(){

}

import '../styles/Homeglobal.scss'


function MyApp( { Component, pageProps }) {
    return (
        <>
            <Header/>
            <Component { ...pageProps} />
        </>
    )
}

export default MyApp