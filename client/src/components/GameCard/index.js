import React, {useState} from 'react';
import {Card}from 'react-bootstrap';
import "./style.css"

function GameCard({name, background_image, id})
{ 
  // const [games, addGame] = useState([]);
  
  // function saveGame(event){
  //   console.log(event.target)
  //   addGame((games)=>[...games,id])
  //   console.log(id)
  //   // let newGames = games
  //   // newGames.push(id)
  //   // addGame([...games])
  //   console.log(games)
  // }
  
  return (
 <> 
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={background_image}/>
  <Card.Body>
<Card.Title style={{color: 'purple'}}>{name}</Card.Title>
    <Card.Text style={{color: 'purple'}}>
      {id}
    </Card.Text>
    <button key={id} style={{bgcolor: 'purple'}}>Save</button>
  </Card.Body>
</Card>
 </>
)
};

export default GameCard; 

