import React from "react";

function resultList(props) {
  return (
    <ul className="list-group result-list">
      <li className="list-group-item">
        <h2>{props.name}</h2>
        <h2>{props.url}</h2>
      </li>
    </ul>
  );
}
export default resultList;
