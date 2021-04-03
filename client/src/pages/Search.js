import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Jumbotron, Container, InputGroup, FormControl} from "react-bootstrap";
import {searchGames} from '../utils/API';
import ResultList from "../components/List";


function Search() {
   const [search , setSearch] = useState("Rawg.io")
   const [name, gameName] = useState("")
   const [list, setList] = useState([])
    // this.state = {
    //   resultsList: []
    // }
   function submitSearch(event) {
      console.log(search)
        searchGames(search).then(
          results=>{
            let gameArray = results.data.results
            setList(gameArray)
            console.log(list)
          }
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
 <Container>
<ResultList name="hello" url="world"/>
 </Container>
</Jumbotron>
</>
    )
}

export default Search;
 
    