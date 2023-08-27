import styled from "styled-components"
import secret from "../secretjujupage.png"
import {Link} from "react-router-dom"

const Aboutme = () => {
    return(
        <Wholepage className="Viewport">
            <H1 className="neonlightintro">Hello!</H1>
            <H2 className="neonlightintro">Here's small paragraph to tell you a little about me.</H2>
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
                    <Ul>
                        <Section>
                            Travel to these places:
                                <Li>Norway</Li>
                                <Li>Italy</Li>
                                <Li>Greece</Li>
                                <Li>Paris</Li>
                                <Li>Germany</Li>
                                
                            </Section>
                        <Li>Have my own company</Li>
                        <Li></Li>
                    </Ul>
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
const Section = styled.section`
padding-bottom: 20px;
`

const Img = styled.img`
width: 10px;
opacity: 50%;
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

const Li = styled.li`
list-style: none;
`

const Ul = styled.ul`
margin: 20px 15%;
box-shadow: 0px 0px 15px 5px darkgreen;
border-radius: 10px;
padding: 20px;
`

const Para = styled.p`
margin: 20px 15%;
box-shadow: 0px 0px 15px 5px darkgreen;
border-radius: 10px;
padding: 20px;
`

export default Aboutme