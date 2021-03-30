import React from "react";
import "./Box.css";
import {Card} from "react-bootstrap";

const MyGameLibrary = () => {
const Games = [
  {Image: "", title:"", text: ""},
  {Image: "", title:"", text: ""},
  {Image: "", title:"", text: ""},
  {Image: "", title:"", text: ""},
];

const renderCard = (car,index) =>{
  return(
    Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
);
};
return (<div classname = "App">;
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk of
  the card's content.
</Card.Text>
</Card.Body>
</Card>
</div>
)

};

   
export default MyGameLibrary