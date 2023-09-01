import React from "react";
import pics from "../Mathieu.jpg";
import styled from "styled-components"

const Homepage = () => {

    return (
        <Wholepage className="Viewport">
            <Halfcolor className="neonboxlightintro"></Halfcolor>
            <Picture className="spin" src={pics} alt="The only good picture of me"/>
            <H1 id="growing">Mathieu Joyal, <Span>Junior front-end Developper</Span></H1>
            <H2 id="growing">Welcome to my Portfolio showcase!</H2>
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
&.spin{
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

&#neontest{
    animation-name: neontest;
animation-duration: 3s;
animation-iteration-count: 1;
}
@keyframes neontest{
            0%{opacity: 0%;}
            3%{opacity: 40%;}
            10%{opacity: 0%;}
            12%{opacity: 40%;}
            14%{opacity: 0%;}
            15%{opacity: 40%;}
            23%{opacity: 0%;}
            26%{opacity: 40%;}
            39%{opacity: 0%;}
            43%{opacity: 40%;}
            46%{opacity: 0%;}
            62%{opacity: 40%;}
            80%{opacity: 0%;}
            100%{opacity: 100%;}
}
`

const H1 = styled.h1`
&#growing{
animation-name: growing;
animation-duration: 4s;
animation-iteration-count: 1;
}
@keyframes growing{
0%{transform: scale(0%);}
70%{transform: scale(0%);}
90%{transform: scale(120%);}
100%{transform: scale(100%);}
}
`

const H2 = styled.h2`
&#growing{
animation-name: growing;
animation-duration: 4s;
animation-iteration-count: 1;
}
@keyframes growing{
0%{transform: scale(0%);}
70%{transform: scale(0%);}
90%{transform: scale(120%);}
100%{transform: scale(100%);}
}
`

const Span = styled.span`
font-style: italic;
`



export default Homepage