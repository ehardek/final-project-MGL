import React from "react";
import {Form, Button, Jumbotron, Container} from "react-bootstrap";

function Login (){

    // Add Functionality to To Login
    function handleFormSubmit (event){
        event.preventDefault ()
    }

    return(
        <>
         <Jumbotron fluid className = "text-light bg-dark">
            <Container>
            <Form onSubmit={handleFormSubmit}>
                 <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant = "primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
         </Jumbotron>
        </>
    )
}

export default Login;
