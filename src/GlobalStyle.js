import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        &.Viewport{
            background: black;
        height: 100vh;
        color: #F5F5EF;
        }
        }
    h1, h2{
        text-shadow: 5px 5px 5px darkgreen;
        &:hover{
            text-shadow: 0px 0px rgb(0,0,0);
            color: white;
            }
        }

        div{
            & .Navbarbtn{
                background-color: rgb(50,50,50);
            }
        }
`



export default GlobalStyles