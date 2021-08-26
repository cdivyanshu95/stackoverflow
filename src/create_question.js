import React from "react";
import db from "./firebase";

function Create_question({ id, name, addNewChat }) {
  const createQuestion = () => {
    const question = prompt("Please add question");
    if (question) {
      db.collection("rooms").add({
        name: question,
      });
    }
  };

  return !addNewChat ? (
    <div>
      <h1>{name}</h1>
      <h4>TAGS</h4>
    </div>
  ) : (
    <div onClick={createQuestion}>
      <h1>add new question here</h1>
    </div>
  );
}

export default Create_question;
