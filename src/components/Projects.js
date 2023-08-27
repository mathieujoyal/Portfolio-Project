import styled from "styled-components"

const Project = ({data}) => {
    return (
        <Wholepage className="Viewport">
        <H1>Quick showcase of my projects done so far.</H1>
        <ListOfProjects>
            {(Object.values(data)).map((project)=>{
                return (
                    <Projectdiv key={project.id}>
                        <Para>{project.projectName}</Para>
                        <Img src={project.projectimage} alt="project img"></Img>
                        <Para>{project.description}</Para>
                    </Projectdiv>
                )
            })}
        </ListOfProjects>
    </Wholepage>


        )
}

const Wholepage = styled.div`
height: 320vh;
`

const H1 = styled.h1`
margin: auto;
padding-top: 50px ;
`

const Para = styled.p`
margin: 10px 5%;
`

const Projectdiv = styled.div`
    border: dashed;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 10px darkgreen;
    margin: 50px 20%;
`

const Img = styled.img`
width: 50%;
`

const ListOfProjects = styled.div`

`

export default Project