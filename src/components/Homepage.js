import React from "react";
import pics from "../Mathieu.png";
import styled from "styled-components"

const Homepage = () => {
    return (
        <Wholepage>
            <Halfcolor></Halfcolor>
            <Picture src={pics} alt="The only good picture of me"/>
            <H1>Mathieu Joyal, <Span>Junior front-end Developper</Span></H1>
            <H2>Welcome to my Portfolio showcase!</H2>
        </Wholepage>
    )
}

const Wholepage = styled.div`

`

const Halfcolor = styled.div`
background-color: green;
height: 250px;
margin-bottom: -250px;
`

const Picture = styled.img`
width: 200px;
border:solid white 5px;
border-radius: 100px;
margin: 100px 0px;
`

const H1 = styled.h1`

`

const H2 = styled.h2`

`

const Span = styled.span`

`



export default Homepage