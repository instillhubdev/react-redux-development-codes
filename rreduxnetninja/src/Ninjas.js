import React from "react";

function Ninjas({ age, belt, name }) {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Belt : {belt}</p>
      <p>Age : {age}</p>
    </div>
  );
}

export default Ninjas;
