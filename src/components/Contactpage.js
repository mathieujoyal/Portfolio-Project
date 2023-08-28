import styled from "styled-components"

const Contactpage = () => {

    return(
        <Wholepage className="Viewport">
            <H1 className="neonlightintro">Here's how you can reach me!</H1>

            <Para>My email: <Span>mathieujoyal96@gmail.com</Span></Para>
            <Para>My phone number: <Span>438-880-0090</Span></Para>

            <Form className="neonboxlightintro">
            <Label>Fullname: <Input id="Fname"></Input></Label>
            <Label>Company: <Input id="company"></Input></Label>
            <Label>Email: <Input id="mail" type="email"></Input></Label>
            <Label>Phonenumber: <Input id="phone"></Input></Label>
            <Label>Comment: <Input id="extra" className="commentsection"></Input></Label>
            <Button type="submit">Send Contact informations!</Button>
            </Form>

        </Wholepage>
    )
}

const Wholepage = styled.div`
margin-bottom: 100px;
`

const H1 = styled.h1`
margin: 0px 30%;
padding-top: 50px;
`

const Para = styled.p`
font-size: 20px;
`

const Span = styled.span`
color: white;
text-decoration: underline;
`

const Form = styled.form`
border: 10px rgb(15,15,15) solid;
border-radius: 10px;
padding:5%;
margin: 0px 15%;
box-shadow: 0px 0px 15px 5px darkgreen;
`

const Label = styled.label`
font-size: 20px;
`

const Input = styled.input`
display: block;
margin: 10px auto;
background: white;
width: 100%;
max-width: 350px;
text-align: start;
&.commentsection{
    text-align: start;
    padding-bottom: 100px;
}
&:focus{
    border: 5px darkgreen solid;
    box-shadow: 0px 0px 15px 5px darkgreen;
}
`

const Button = styled.button`
display: block;
margin: 10px auto;
margin-top: 40px;
cursor: pointer ;
border-width: 2px;
border-radius: 3px;
border-color: white;
background-color: rgb(0,50,0);
color: white;
font-size: 20px;
padding: 15px 5% ;
box-shadow: 0px 0px 15px 5px darkgreen;
`

export default Contactpage