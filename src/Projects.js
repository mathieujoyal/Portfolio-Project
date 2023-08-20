import styled from "styled-components"

const Project = ({data}) => {
    return (
        <Wholepage>
        <h1>Quick showcase of my projects done so far.</h1>
        <ListOfProjects>
{/*             {(Object.values(data)).map((project)=>{
                return (
                    <div>
                        <p>{project.projectName}</p>
                        <img src={project.projectimage}></img>
                        <p>{project.description}</p>
                    </div>
                )
            })} */}
        </ListOfProjects>
    </Wholepage>)
}

const Wholepage = styled.div`

`

const ListOfProjects = styled.div`

`

const H1 = styled.h1`

`

const H2 = styled.h2`

`

const Para = styled.p`

`

const Span = styled.span`

`


export default Project