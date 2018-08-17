import React from "react";

function Ninjas({ id, age, belt, name, deleteNinja }) {
  const styles = {
    border: `2px solid ${belt}`,
    cursor: `pointer`,
    padding: `2px`,
    boxShadow: "0 2px 2px 2px #111"
  };
  return (
    <div style={styles}>
      <p>Name : {name}</p>
      <p>Belt : {belt}</p>
      <p>Age : {age}</p>
      <button onClick={() => deleteNinja(id)}>Delete Ninja</button>
    </div>
  );
}

export default Ninjas;
