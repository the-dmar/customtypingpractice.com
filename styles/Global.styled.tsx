import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #333;
        font-family: 'Nunito Sans', sans-serif;
    }

    :root {
        --Blue: #126782;
        --Black: #333;
        --Orange: #FF6D00;
    }
    
`
export default GlobalStyles
