import React from "react";
import {Form, Button, Jumbotron, Container} from "react-bootstrap";

function Search() {
    function Search(event) {
     event.preventDefault()   
    }
    return(
        <>
        <Jumbotron fluid className = "text-light bg-dark">
            <Container> 
<div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
</Container>
</Jumbotron>
        </>
    )
}

export default Search;
 
    