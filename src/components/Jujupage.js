import Juju1 from "../juju 1.jpg"
import Juju2 from "../juju 2.jpg"
import styled from "styled-components"

const Jujupage = () => {
    return(
        <Jujudiv>
            <Ph1>Congratulation! You found the secret "Juju" page.</Ph1>
            <Ph2>(Her favorite color is yellow)</Ph2>
        <Picture src={Juju1} alt="My grandmother"/>
        <Para>This is my grandmother Juliette (Juju), she's going to be 90 years old in 2024. I love her very much 
            and she's always been very caring of me and my brother. She helped raised us and made sure 
            we had everything we ever wanted even if she didn't have the money to make it happen, she would 
            save up her money to buy us little surprises. to this day when me and my girlfriend visit her, she 
            offers us little surprises in the form of chocolate bars or pastries.
        </Para>
        <Picture src={Juju2} alt="Me gran showing me her telly"/>
        <Para>My grandmother asking me to help her fix the television because it hasn't worked in a week.
            ( It was unplugged. )
        </Para>
        </Jujudiv>
    )
}

const Para = styled.p`
margin: 50px 20% 100px 20%;
padding: 20px 20px;
color: white;
box-shadow: 0px 0px 15px 5px yellow;
border-radius:10px;
`

const Ph1 = styled.p`
font-size: 30px;
padding-top: 2%;
color: white;
text-shadow: 2px 2px 5px yellow;
`

const Ph2 = styled.p`
font-size: 20px;
color: white;
text-shadow: 2px 2px 5px yellow;
`

const Picture = styled.img`
width: 300px;
box-shadow: 0px 0px 15px 5px yellow;
margin: 20px 0px;
`

const Jujudiv = styled.div`
margin: auto;
margin-top: -30px;
`



export default Jujupage