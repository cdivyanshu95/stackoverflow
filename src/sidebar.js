import React, { useState, useEffect } from "react";
import Create_question from "./create_question";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => unsubscribe();
  }, []);
  return (
    <div className="sidebar">
      <Create_question addNewChat />
      {rooms.map((room) => (
        <Create_question
          key={room.id}
          id={room.id}
          name={room.data.name}
          tag={room.data.tag}
        />
      ))}
    </div>
  );
}

export default Sidebar;
