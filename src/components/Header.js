import {Link} from "react-router-dom"
import styled from "styled-components"
import GlobalStyles from "../GlobalStyle"
import Dropbtn from "../hamburger.webp"

const Header = () => {
    return(
        <HeaderStyled className="titlebanner">
            <GlobalStyles />
            <H1 className="SlidingTitle">Mathieu Joyal's Portfolio</H1>
            <div>
            <NavigationButtons>
                <LinkToPages className="Navbarbtn" to="/">Homepage</LinkToPages>
                <LinkToPages className="Navbarbtn" to="/AboutMe">About Me</LinkToPages>
                <LinkToPages className="Navbarbtn" to="/Projects">My Project</LinkToPages>
                <LinkToPages className="Navbarbtn" to="/Contactpage">Contact me</LinkToPages>
            </NavigationButtons>
            <MobileDiv>
                <Link className="Dropmenu" aria-label="Show menu" to="/NavigationPage">
                <Navbutton src={Dropbtn} alt="mobileBtn"/>
                </Link>
            </MobileDiv>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
text-align: center;
color: White;
background-color: black;
padding-top: 1px;
&.titlebanner{
    animation-name: titlebanner;
    animation-duration: 2.5s;
    animation-iteration-count: 1;
@keyframes titlebanner{
0%{
    background-color: darkgreen
}
40%{
    background-color: darkgreen
}
100%{
    background-color: black
}
}
}
`

const H1 = styled.h1`
font-style: italic;
padding: 10px 0px;
text-align: center;
background-color: rgb(20,20,20);
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
background-color: black;
padding: 10px 20px;
margin-top: 10px;
text-decoration: none;
margin: auto;
box-shadow: 0px 0px 15px 5px darkgreen;
position: relative;
z-index: 10;
@media(max-width:600px){
        display: none;
}
`

const Navbutton = styled.img`
width: 36px;
height: 36px;
background-color: darkgreen ;
border: 2px solid black;
`

const MobileDiv = styled.div`
background-color: darkgreen ;
box-shadow: 0px 0px 15px 5px black;
@media(min-width:601px){
    .Dropmenu{
        display: none;}
}
`

const LinkToPages = styled(Link)`
color: white;
padding: 10px 18px;
margin-top: 10px;
margin: 0px 10px;
border: 2px solid darkgreen;
text-decoration: none;
border-radius: 10px;
width: 10%;
&:hover{
    background-color: black;
}
`

export default Header