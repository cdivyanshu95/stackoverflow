import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./chat.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chat() {
  const [input, setInput] = useState("");
  const { roomID } = useParams();
  const [question, setQuestion] = useState("");
  const [body, setBody] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setQuestion(snapshot.data().name));
      db.collection("rooms")
        .doc(roomID)
        .collection("body")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setBody(snapshot.docs.map((doc) => doc.data()))
        );
    }
  });

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed>>>>", input);
    db.collection("rooms").doc(roomID).collection("body").add({
      body: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  const delMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomID).delete();
  };
  // const delMessage = (e) => {
  //   e.preventDefault();
  //   db.collection("rooms").doc(roomID).collection("body").add({
  //     body: "Accepted, Question is Answered",
  //     name: user.displayName,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setInput("");
  // };
  return (
    <div>
      <div>
        <h1>{question}</h1>
      </div>
      <div>
        {body.map((body) => (
          <p
            className={`chat__message ${
              body.name === user.displayName && "chat__receiver"
            }`}
          >
            <h4>{body.name}</h4>
            {body.body}
            <h6>{new Date(body.timestamp?.toDate()).toUTCString()}</h6>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Reply
          </button>
          <button onClick={delMessage} type="submit">
            accept
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
