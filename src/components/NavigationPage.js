import {Link} from "react-router-dom"
import styled from "styled-components"


const NavigationPage = () => {
    return(
        <Wholepage>
            <NavigationButtons>
                <LinkToPages className="Navbarbtn" to="/"><Navbutton>Homepage</Navbutton></LinkToPages>
                <LinkToPages className="Navbarbtn" to="/AboutMe"><Navbutton>About Me</Navbutton></LinkToPages>
                <LinkToPages className="Navbarbtn" to="/Projects"><Navbutton>My Project</Navbutton></LinkToPages>
                <LinkToPages className="Navbarbtn" to="/Contactpage"><Navbutton>Contact me</Navbutton></LinkToPages>
            </NavigationButtons>
        </Wholepage>
    )
}

const Wholepage = styled.div`
background-color: rgb(10,10,155);
height: 100vh;
`

const Navbutton = styled.button`
margin: auto;
width: 100%;
max-height: fit-content;
padding:12%;
background-color: rgb(10,10,200);
font-size: 50px;
color: white;
text-decoration: none;
`

const NavigationButtons = styled.div`
display:block;
`

const LinkToPages = styled(Link)`

`

export default NavigationPage