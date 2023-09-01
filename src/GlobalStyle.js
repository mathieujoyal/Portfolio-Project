import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        background: black;
        &.Viewport{
            background: black;
        color: #F5F5EF;
        }
        &.neonlight, .neonboxlight{
            animation-name: neonlight;
            animation-duration: 25s;
            animation-iteration-count: infinite;
        }
        @keyframes neonlight{
            0%{text-shadow: 5px 5px 5px rgba(0,200,0,0.2);}
            90%{text-shadow: 5px 5px 5px rgba(0,200,0,0.7);}
            91%{text-shadow: 5px 5px 5px rgba(0,200,0,0.3);}
            92%{text-shadow: 5px 5px 5px rgba(0,200,0,0.9);}
            93%{text-shadow: 5px 5px 5px rgba(0,200,0,0.2);}
            94%{text-shadow: 5px 5px 5px rgba(0,200,0,0.7);}
            95%{text-shadow: 5px 5px 5px rgba(0,200,0,0.6);}
            96%{text-shadow: 5px 5px 5px rgba(0,200,0,0.8);}
            97%{text-shadow: 5px 5px 5px rgba(0,200,0,0.3);}
            98%{text-shadow: 5px 5px 5px rgba(0,200,0,0.5);}
            100%{text-shadow: 5px 5px 5px rgba(0,200,0,0.8);}
        }
        &.neonlightintro, #neonlightintro{
            animation-name: neonlightintro;
            animation-duration: 3s;
            animation-iteration-count: 1;
        }
        @keyframes neonlightintro{
            0%{text-shadow: 5px 5px 5px black;}
            3%{text-shadow: 5px 5px 5px darkgreen;}
            10%{text-shadow: 5px 5px 5px black;}
            12%{text-shadow: 5px 5px 5px darkgreen;}
            14%{text-shadow: 5px 5px 5px black;}
            15%{text-shadow: 5px 5px 5px darkgreen;}
            23%{text-shadow: 5px 5px 5px black;}
            26%{text-shadow: 5px 5px 5px darkgreen;}
            39%{text-shadow: 5px 5px 5px black;}
            43%{text-shadow: 5px 5px 5px darkgreen;}
            46%{text-shadow: 5px 5px 5px black;}
            62%{text-shadow: 5px 5px 5px darkgreen;}
            80%{text-shadow: 5px 5px 5px black;}
            100%{text-shadow: 5px 5px 5px darkgreen;}
        }
        &.neonboxlightintro, #neonboxlightintro{
            animation-name: neonboxlightintro;
            animation-duration: 3s;
            animation-iteration-count: 1;
        }
        @keyframes neonboxlightintro{
            0%{box-shadow: 0px 0px 5px 5px black}
            3%{box-shadow: 0px 0px 5px 5px darkgreen}
            10%{box-shadow: 0px 0px 5px 5px black}
            12%{box-shadow: 0px 0px 5px 5px darkgreen}
            14%{box-shadow: 0px 0px 5px 5px black}
            15%{box-shadow: 0px 0px 5px 5px darkgreen}
            23%{box-shadow: 0px 0px 5px 5px black}
            26%{box-shadow: 0px 0px 5px 5px darkgreen}
            39%{box-shadow: 0px 0px 5px 5px black}
            43%{box-shadow: 0px 0px 5px 5px darkgreen}
            46%{box-shadow: 0px 0px 5px 5px black}
            62%{box-shadow: 0px 0px 5px 5px darkgreen}
            80%{box-shadow: 0px 0px 5px 5px black}
            100%{box-shadow: 0px 0px 15px 5px darkgreen}
        }
    }
    h1, h2{
        text-shadow: 5px 5px 5px darkgreen;
        &:hover{
            text-shadow: 0px 0px rgb(0,0,0);
            color: darkgreen;
            transition: 0.5s ease-in;
            cursor: default;
        }
    }

        div{
            & .Navbarbtn{
                background-color: rgb(50,50,50);
            }
        }
`



export default GlobalStyles