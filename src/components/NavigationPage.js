import {Link} from "react-router-dom"
import styled from "styled-components"


const NavigationPage = () => {
    return(
        <Wholepage>
            <NavigationButtons>
                <LinkToPages to="/"><Navbutton className="Navbarbtn">Homepage</Navbutton></LinkToPages>
                <LinkToPages to="/AboutMe"><Navbutton className="Navbarbtn">About Me</Navbutton></LinkToPages>
                <LinkToPages to="/Projects"><Navbutton className="Navbarbtn">My Project</Navbutton></LinkToPages>
                <LinkToPages to="/Contactpage"><Navbutton className="Navbarbtn">Contact me</Navbutton></LinkToPages>
            </NavigationButtons>
        </Wholepage>
    )
}

const Wholepage = styled.div`
height: 100vh;
`

const Navbutton = styled.button`
margin: auto;
width: 100%;
max-height: fit-content;
padding:12%;
font-size: 40px;
color: white;
text-decoration: none;
border: 10px rgb(0,0,100) solid;
`

const NavigationButtons = styled.div`
display:block;

`

const LinkToPages = styled(Link)`

`

export default NavigationPage