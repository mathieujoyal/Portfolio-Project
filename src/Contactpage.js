import { useState } from "react";
import styled from "styled-components"

const Contactpage = () => {

    const [fullName, setFullName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const contactInfo = {
            fullName,
            companyName,
            email,
            phoneNumber
        }
    }

    return(
        <Wholepage>
            <H1>Here's how you can reach me!</H1>

            <Para>My email: mathieujoyal96@gmail.com</Para>
            <Para>My phone number: 438-880-0090</Para>

            <Form onSubmit={handleSubmit}>
            <Label>Fullname: <Input></Input></Label>
            <Label>Company: <Input></Input></Label>
            <Label>Email: <Input></Input></Label>
            <Label>Phonenumber: <Input></Input></Label>
            <Label className="commentsection">Comment: <Input></Input></Label>
            <Button type="submit">Submit</Button>
            </Form>

        </Wholepage>
    )
}

const Wholepage = styled.div`

`

const H1 = styled.h1`

`

const Para = styled.p`

`

const Span = styled.span`

`

const Form = styled.form`

`

const Label = styled.label`

`

const Input = styled.input`

&.commentsection{
    
}
`


const Button = styled.button`

`

export default Contactpage