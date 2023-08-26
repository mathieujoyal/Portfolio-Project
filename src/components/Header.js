import {Link} from "react-router-dom"
import styled from "styled-components"
import GlobalStyles from "../GlobalStyle"
import Dropbtn from "../hamburger.webp"

const Header = () => {
    return(
        <HeaderStyled className="titlebanner">
            <GlobalStyles />
            <H1  className="SlidingTitle">Mathieu Joyal's Portfolio</H1>
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
box-shadow: 0px 0px 15px 5px black;
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
background-color: rgb(0,0,155);
padding: 10px 20px;
margin-top: 10px;
text-decoration: none;
margin: auto;
box-shadow: 0px 0px 15px 5px black;
position: relative;
z-index: 10;
@media(max-width:600px){
        display: none;
}
`

const Navbutton = styled.img`
width: 36px;
height: 36px;
`

const MobileDiv = styled.div`
background-color: rgb(0,0,155);
box-shadow: 0px 0px 15px 5px black;
@media(min-width:601px){
    .Dropmenu{
        display: none;}
}
`

const LinkToPages = styled(Link)`
color: white;
background-color: rgb(80,80,80);
padding: 10px 18px;
margin-top: 10px;
margin: 0px 10px;
border: 2px solid black;
text-decoration: none;
border-radius: 10px;
width: 10%;
&:hover{
    background-color: rgb(0,0,100);
}
`

export default Header