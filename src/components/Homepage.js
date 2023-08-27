import React from "react";
import pics from "../Mathieu.jpg";
import styled from "styled-components"

const Homepage = () => {

    

    return (
        <Wholepage className="Viewport">
            <Halfcolor className="neonboxlightintro"></Halfcolor>
            <Picture id="cool" className="neonboxlightintro" src={pics} alt="The only good picture of me"/>
            <H1 className="neonlightintro">Mathieu Joyal, <Span>Junior front-end Developper</Span></H1>
            <H2 className="neonlightintro">Welcome to my Portfolio showcase!</H2>
        </Wholepage>
    )
}

const Wholepage = styled.div`
background-color: black;
`

const Halfcolor = styled.div`
background-color: rgb(10,10,10);
height: 250px;
margin-bottom: -250px;
box-shadow: 0px 0px 15px 5px darkgreen;
`

const Picture = styled.img`
width: 200px;
border:solid white 5px;
border-radius: 100px;
margin: 100px 0px;
box-shadow: 0px 0px 15px 5px darkgreen;
&#cool{
animation-name: spin;
animation-duration: 1.2s;
animation-iteration-count: 1;
}
@keyframes spin{
33%{
    transform: scale(150%) rotate(360deg);
}
50%{
    transform: scale(90%) rotate(360deg);
}
80%{
    transform: scale(105%) rotate(360deg);
}
100%{
    transform: scale(100%) rotate(360deg);
}
}
`

const H1 = styled.h1`

`

const H2 = styled.h2`

`

const Span = styled.span`
font-style: italic;
`



export default Homepage