import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #212529;
        font-family: 'Nunito Sans', sans-serif;
    }
    
    html, body, #__next {
        height: 100%;
        width: 100%;
    }
    
`
export default GlobalStyles
