import React from "react";
import './Card.css';

const Card = props => {
  const { name, email, id} = props;
  return (
    <div id="card" className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">

      <img src={"https://robohash.org/" + id + "?200x200"} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default Card;
