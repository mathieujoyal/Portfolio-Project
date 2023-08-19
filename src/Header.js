import {Link} from "react-router-dom"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyle"

const Header = () => {
    return(
        <HeaderStyled>
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
background-color: rgb(0,200,200);
padding-top: 1px;
`

const H1 = styled.h1`
font-style: italic;
background-color: rgb(0,0,250);
width: 70%;
text-align: center;
margin-left: 15%;
margin-right: 15%;
border-radius: 10px;
&.SlidingTitle{
    animation-name: slide-in;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
@keyframes slide-in{
    from{padding-left:100px;
    opacity: 0;
    }
    to{
        padding-left: 0px;
    }
}
}
`

const NavigationButtons = styled.div`

background-color: rgb(1,1,255);
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