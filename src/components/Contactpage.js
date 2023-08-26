import styled from "styled-components"

const Contactpage = () => {

    return(
        <Wholepage className="Viewport">
            <H1>Here's how you can reach me!</H1>

            <Para>My email: <Span>mathieujoyal96@gmail.com</Span></Para>
            <Para>My phone number: <Span>438-880-0090</Span></Para>

            <Form>
            <Label>Fullname: <Input></Input></Label>
            <Label>Company: <Input></Input></Label>
            <Label>Email: <Input type="email"></Input></Label>
            <Label>Phonenumber: <Input></Input></Label>
            <Label>Comment: <Input className="commentsection"></Input></Label>
            <Button type="submit">Send Contact informations!</Button>
            </Form>

        </Wholepage>
    )
}

const Wholepage = styled.div`

`

const H1 = styled.h1`
margin: auto;
padding-top: 50px;
`

const Para = styled.p`

`

const Span = styled.span`
color: white;
text-decoration: underline;
`

const Form = styled.form`
    border: 10px black solid;
    border-radius: 10px;
    padding:5%;
    margin: 0px 15%;
`

const Label = styled.label`
font-size: 20px;
`

const Input = styled.input`
display: block;
margin: 10px auto;
width: 100%;
max-width: 350px;
text-align: start;
&.commentsection{
    text-align: start;
    padding-bottom: 100px;
}
`

const Button = styled.button`
display: block;
margin: 10px auto;
cursor: pointer ;
border-width: 2px;
border-radius: 3px;
border-color: rgb(220, 132, 255);
background-color: rgb(0, 100, 150);
color: white;
font-size: 20px;
padding: 15px 5% ;
`

export default Contactpage