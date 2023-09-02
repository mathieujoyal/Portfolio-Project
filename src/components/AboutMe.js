import styled from "styled-components"
import {Link} from "react-router-dom"
import secret from "../secretjujupage.png"

const Aboutme = () => {
    return(
        <Wholepage className="Viewport">
            
            <H1 className="neonlight">Hello!</H1>
            <H2 className="neonlight">Here's small paragraph to tell you a little about me.</H2>
            
            <Para>I am a young(ish) web developper living near montreal with a passion for 
            creating things. Whether it be stories, games, website or (on the nerdier side) 
            Dungeon & Dragons universes, i've always found that making something 
            from scratch or improving something already in place is always so rewarding
            from start to finish. To me, very little advancements you bring to a project 
            always makes me proud and motivates me to keep going and to keep improving what 
            i'm working on.
            </Para>
            <Para>I'm a dedicated worker and i love challenging myself. I love working by myself or in a group
                and i like to think of myself as a creative person with alot of ideas. I love helping others and 
                i'm always trying to better myself in some way ( as much as possible of course).
            </Para>
            <Para>(I made the site to look like neon lights a bit (hence the flashy green effect on the top text of the page)
                because i love the old timey arcade look with neons everywhere.)</Para>

            <Link className="secretpage" aria-label="Show menu" to="/Jujupage">
                <Img src={secret} alt="mobileBtn"/>
            </Link>
        
        </Wholepage>
    )
}

const Wholepage = styled.div`
margin: auto;
`

const H1 = styled.h1`
margin: auto;
padding-top: 50px;
`

const H2 = styled.h2`
font-style: italic;
padding-bottom: 20px;
`

const Para = styled.p`
margin: 40px 15%;
box-shadow: 0px 0px 15px 5px darkgreen;
border-radius: 10px;
padding: 20px;
`

const Img = styled.img`
width: 10px;
opacity: 50%;
position: fixed;
left: 0;
top: 0;
`

export default Aboutme