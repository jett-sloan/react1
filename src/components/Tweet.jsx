import React from "react";
export default function Tweet(props) {
  return (
    <>
      <p>Username is: {props.username}</p>
      <p>Name of user: {props.name}</p>
      <p>Tweet: {props.messages}</p>
      <p>Date of: {props.date}</p>
    </>
  );
}
