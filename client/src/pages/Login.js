import React,{useState} from "react";
import {Form, Button, Jumbotron, Container} from "react-bootstrap";
import axios from "axios";


function Login (){
const [loginUsername, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (event) => {
      event.preventDefault()
    axios({
      method: "POST",
      data: {
        email: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/users/login",
    }).then((res) => console.log(res));
  };


    return(
        <>
         <Jumbotron fluid className = "text-light bg-dark">
            <Container>
            <Form onSubmit={login}>
                 <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginUser(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
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
