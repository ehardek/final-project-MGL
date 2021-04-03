import React from 'react';
import {Card}from 'react-bootstrap';
import "./style.css"

function GameCard({name, background_image, id})
{
  
  return (
 <> 
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={background_image}/>
  <Card.Body>
<Card.Title style={{color: 'purple'}}>{name}</Card.Title>
    <Card.Text style={{color: 'purple'}}>
      {id}
    </Card.Text>
    <button id={id} style={{bgcolor: 'purple'}}>Save</button>
  </Card.Body>
</Card>
 </>
)
};

export default GameCard; 

