import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        &.Viewport{
        background-color: rgb(50,50,50);
        height: 100vh;
        color: rgb(210,210,210);
    }
    }
    h1, h2{
        text-shadow: 5px 5px 5px rgb(0,0,0);
        &:hover{
            text-shadow: 0px 0px rgb(0,0,0);
            color: white;
        }
    
    }
`

export default GlobalStyles