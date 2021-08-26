import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./chat.css";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { roomID } = useParams();
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setQuestion(snapshot.data().name));
    }
  }, [roomID]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed>>>>", input);
    setInput("");
  };
  return (
    <div>
      <div>
        <h1>{question}</h1>
      </div>
      <div className={`chat__message ${true && "chat__receiver"}`}>
        <h1>chatside</h1>
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
        </form>
      </div>
    </div>
  );
}

export default Chat;
