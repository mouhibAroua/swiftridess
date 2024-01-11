"use client";
import { io } from "socket.io-client";
import { useState } from "react";
import ChatPage from "../chatClient/page";
import styles from"./chat.module.css"
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userId, setUserId] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState(0);
  const [clientId,setClientId]=useState(1)
  var socket: any;
  socket = io("http://localhost:7000");
console.log(socket,"socket");

  const handleJoin = () => {
    if (userId !== 0 && roomId !== 0 && clientId !==0) {
      console.log(userId, "userId", roomId, "roomId" ,clientId,"clientId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);

      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  return (
    <div>
              <h1>test</h1>

      <div
        className={styles.main_div}
        style={{ display: showChat ? "none" : "" }}
      >
        <input
          className={styles.main_input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUserId(e.target.value)}
          disabled={showSpinner}
        />
        <input
          className={styles.main_input}
          type="text"
          placeholder="room id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
        />
        <button className={styles.main_button} onClick={() => handleJoin()}>
          {!showSpinner ? (
            "Join"
          ) : (
            <div className={styles.loading_spinner}></div>
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} roomId={roomId} userId={userId} />
      </div>
    </div>
  );
}