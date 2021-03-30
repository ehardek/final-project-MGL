import React from "react";
import {Card} from "react-bootstrap";

const MyGameLibrary = () => {

const renderCard = (car,index) =>{
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Game Title</Card.Title>
    <Card.Text>
      Game Description
    </Card.Text>
  </Card.Body>
</Card>
);
};
};

   
export default MyGameLibrary
