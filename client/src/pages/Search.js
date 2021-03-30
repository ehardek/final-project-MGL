import React from "react";
import {Button, Jumbotron, Container, InputGroup, FormControl } from "react-bootstrap";

function Search() {
    // function submitSearch(event) {
    //  event.preventDefault()   
    // }
    return(
        <>
        <Jumbotron fluid className = "text-light bg-dark">
            <Container> 
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Your Game"
      aria-label="Search Your Game"
      aria-describedby="basic-addon2"
    />  
    <InputGroup.Append>
      <Button type="Submit" variant="outline-light">Button</Button>
    </InputGroup.Append>
  </InputGroup>
</Container>
</Jumbotron>
        </>
    )
}

export default Search;
 
    