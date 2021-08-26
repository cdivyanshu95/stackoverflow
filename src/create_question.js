import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "./firebase";

function Create_question({ id, name, tag, addNewChat }) {
  const createQuestion = () => {
    const question = prompt("Please add question");
    const tag = prompt("Please add tag");
    if (question) {
      db.collection("rooms").add({
        name: question,
        tag: tag,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div>
        <h1>{name}</h1>
        <h4>Tag: {tag}</h4>
      </div>
    </Link>
  ) : (
    <div onClick={createQuestion}>
      <Button type="submit">
        <h1>Ask Question</h1>
      </Button>
    </div>
  );
}

export default Create_question;
