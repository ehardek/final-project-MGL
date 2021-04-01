import React from "react";
import "./Box.css";
import {Card} from "react-bootstrap";
import { Body } from "react-bootstrap/lib/Media";

const MyGameLibrary = () => {
const Games = [
  {Image: "", title:"", text: ""},
  {Image: "", title:"", text: ""},
  {Image: "", title:"", text: ""},
  {Image: "", title:"", text: ""},
];

const renderCard = (car,index) =>{
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {Card.Image} />
  <Card.Body>
    <Card.Title>{Card.title}</Card.Title>
    <Card.Text>
      {Card.title}
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

var styles = `
    .qwebirc-qui .ircwindow div { 
        font-family: Georgia,Cambria,"Times New Roman",Times,serif;
        margin: 26px auto 0 auto;
        max-width: 650px;
    }
    .qwebirc-qui .lines {

`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
