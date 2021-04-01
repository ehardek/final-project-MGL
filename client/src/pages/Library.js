import React from "react";
import {Card} from "react-bootstrap";


const gameLibrary = () => {
const gamesList = [
  {image: "https://media.rawg.io/media/games/aeb/aeb33772a46dfe88fa9bd2f93068c91c.jpg", title:"BattleField: Bad Company", text: ""},
  {image: "", title:"", text: ""},
  {image: "", title:"", text: ""},
  {image: "", title:"", text: ""},
];

const renderCard = (card,index) =>{
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={card.image} />
  <Card.Body>
  <Card.Title>{card.title}</Card.Title>
    <Card.Text>
     {card.text}
    </Card.Text>
  </Card.Body>
</Card>
);
};
return (<div classname = "App">
 {gamesList.map(renderCard)}
</div>
)
};
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

export default gameLibrary
