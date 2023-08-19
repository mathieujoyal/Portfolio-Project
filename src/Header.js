import {Link} from "react-router-dom"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyle"

const Header = () => {
    return(
        <div>
            <GlobalStyles />
            <h1>Mathieu Joyal's Portfolio</h1>
            <div>
                <Link to="/">Homepage</Link>
                <Link to="/">About Me</Link>
                <Link to="/">My Project</Link>
                <Link to="/">Contact me</Link>
            </div>
        </div>
    )
}

export default Header