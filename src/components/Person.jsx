import React from "react";
export default function Person(props) {
  return (
    <div>
      <p>Learn some information about this person: {props.name}</p>
      {props.age > 18 ? (
        <h3>Please go vote!</h3>
      ) : (
        <h3>Please wait until you are 18!</h3>
      )}
      {props.name.length > 8 && <p>{props.name.slice(0, 6)}</p>}
      {props.hobbies.length > 0 && (
        <ul>
          {props.hobbies.map((hobby) => {
            return <li key={hobby}>{hobby}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
