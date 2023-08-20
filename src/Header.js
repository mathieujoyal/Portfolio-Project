import {Link} from "react-router-dom"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyle"

const Header = () => {
    return(
        <HeaderStyled className="titlebanner">
            <GlobalStyles />
            <H1  className="SlidingTitle">Mathieu Joyal's Portfolio</H1>
            <NavigationButtons>
                <LinkToPages to="/">Homepage</LinkToPages>
                <LinkToPages to="/AboutMe">About Me</LinkToPages>
                <LinkToPages to="/Projects">My Project</LinkToPages>
                <LinkToPages to="/Contactpage">Contact me</LinkToPages>
            </NavigationButtons>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
text-align: center;
color:White;
background-color: rgb(0,150,200);
padding-top: 1px;
&.titlebanner{
    animation-name: titlebanner;
    animation-duration: 2.5s;
    animation-iteration-count: 1;
@keyframes titlebanner{
0%{
    background-color: rgb(0,0,0)
}
40%{
    background-color: rgb(0,0,0)
}
100%{
    background-color: rgb(0,150,200)
}
}
}
`

const H1 = styled.h1`
font-style: italic;
padding: 10px 0px;
text-align: center;
background-color:rgb(0,0,250);
width: 70%;
margin-left: 15%;
margin-right: 15%;
border-radius: 10px;
&.SlidingTitle{
    animation-name: slide-in;
    animation-duration: 2s;
    animation-iteration-count: 1;
@keyframes slide-in{
    0%{
        padding-left:300px;
        opacity: 0;
    }
    50%{
        padding-left: 0px;
    }
    100%{
        padding-left: 0px;
    }
}
}
`

const NavigationButtons = styled.div`
background-color: rgb(0,0,255);
padding: 10px 20px;
margin-top: 10px;
text-decoration: none;
`

const LinkToPages = styled(Link)`
color: white;
background-color: rgb(130,130,130);
padding: 10px 20px;
margin-top: 10px;
text-decoration: none;
`




export default Header