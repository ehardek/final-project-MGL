import React,{useState} from "react";
import {Form, Button, Jumbotron, Container} from "react-bootstrap";
import axios from "axios";


function NewUser() {
    const[registerUser, setRegisterUser] = useState("");
    const[data,setData]=useState("")
    const[registerPassword, setRegisterPassword] = useState("");
    const register=(event)=>{
       event.preventDefault()
       
        axios({
        method: "POST",
        data: {
          email: registerUser,
          password: registerPassword,
        },
        // withCredentials: true,
        url: "http://localhost:3001/api/users/signup",
        // url: "http://localhost:3000/newuser",
      }).then((res) => console.log(res));}
    
      const getUser = () => {
        axios({
          method: "GET",
        //   withCredentials: true,
        //   url: "http://localhost:3001/user",
          url: "/api/users/user_data",
        }).then((res) => {
          setData(res);
          console.log(res);
        });
      };

    // function createNewUser(event) {
    //  event.preventDefault()   
    // }
    return(
        <>
        
         <Jumbotron fluid className = "text-light bg-dark " >
            <Container>
                
            <Form onSubmit={register}>
                 <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setRegisterUser(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
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

export default NewUser;
 
    