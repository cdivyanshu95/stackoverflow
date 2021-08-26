import React, { useState, useEffect } from "react";
import "./chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed>>>>", input);
    setInput("");
  };
  return (
    <div>
      <div>
        <h1>Room Name i.e question title</h1>
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
