import React from 'react';
import {Card, Button}from 'react-bootstrap';


function GameCard({name, background_image, id})
{return (
 <> 
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={background_image}/>
  <Card.Body>
<Card.Title>{name}</Card.Title>
    <Card.Text>
      {id}
    </Card.Text>
    <Button id={id} variant="primary">Save</Button>
  </Card.Body>
</Card>
 </>
)
};

export default GameCard; 

