import Juju1 from "../juju 1.jpg"
import Juju2 from "../juju 2.jpg"
import styled from "styled-components"

const Jujupage = () =>{
    return(
        <div>
        <Picture src={Juju1} alt="My grandmother"/>
        <Picture src={Juju2} alt="Me gran showing her telly"/>
        </div>
    )
}

const Picture = styled.img`
width: 300px;
`


export default Jujupage