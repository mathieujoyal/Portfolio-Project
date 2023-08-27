import styled from "styled-components"
import secret from "../secretjujupage.png"
import {Link} from "react-router-dom"

const Aboutme = () => {
    return(
        <Wholepage className="Viewport">
            <H1>Hello!</H1>
            <H2>Here's small paragraph to tell you a little about me.</H2>
            <Para>I am a young(ish) web developper living near montreal with a passion for 
            creating things. Whether it be stories, games, website or (on the nerdier side) 
            Dungeon & Dragons universes, i've always found that making something 
            from scratch or improving something already in place is always so rewarding
            from start to finish. To me, very little advancements you bring to a project 
            always makes me proud and motivates me to keep going and to keep improving what 
            i'm working on.
            </Para>
            <div>
                <ColoredP>Personal goals:
                <Para></Para>
                Travel around the world

                </ColoredP>

            </div>
            <Link className="secretpage" aria-label="Show menu" to="/Jujupage">
                <Img src={secret} alt="mobileBtn"/>
                </Link>
        </Wholepage>
    )
}

const Wholepage = styled.div`

`

const ColoredP = styled.div`

`

const Img = styled.img`
width: 10px;
opacity: 10%;
position: fixed;
left: 0;
top: 0;
`

const H1 = styled.h1`
margin: auto;
padding-top: 50px;

`

const H2 = styled.h2`

`

const Para = styled.p`
margin: 0px 15%;
`

export default Aboutme