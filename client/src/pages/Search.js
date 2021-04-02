import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Jumbotron, Container, InputGroup, FormControl} from "react-bootstrap";
import {searchGames} from '../utils/API';
import resultList from "../components/List";


function Search() {
   const [search , setSearch] = useState("Rawg.io")
   const [name, gameName] = useState("")
   
    function submitSearch(event) {
      console.log(search)
        searchGames(search).then(
          results=>(console.log(results))
        )
    }
return(
<>
<Jumbotron fluid className = "text-light bg-dark">
  <Container> 
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Your Game"
      aria-label="Search Your Game"
      aria-describedby="basic-addon2"
      onChange={event=>(setSearch(event.target.value))}
    />  
    <InputGroup.Append>
      <Button onClick={submitSearch} type="Submit" variant="outline-light">Search</Button>
    </InputGroup.Append>
  </InputGroup>
 </Container>
 {/* <Container>
<resultList title="hello" url="world"/>
 </Container> */}
</Jumbotron>
</>
    )
}

export default Search;
 
    