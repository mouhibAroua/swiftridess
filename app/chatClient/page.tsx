"use client"
import React, { useEffect, useState } from "react";
import style from"./chat.module.css"
interface IMsgDataTypes {
  roomId:  number;
  company_idcompany:  number;
  client_id:  number;
  content: String;
}

const ChatPage = ({ socket, userId, roomId }: any) => {
  console.log(socket);
  
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        roomId,
        company_idcompany:1,
        client_id: userId,
        content: currentMsg,
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };


  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);
console.log(chat);


  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name: <b>{userId}</b> and Room Id: <b>{roomId}</b>
          </p>
        </div>
        <div>
          {chat.map(({ roomId, client_id, content  }, key) => (
            <div
              key={key}
              className={
                client_id == userId
                  ? style.chatProfileRight
                  : style.chatProfileLeft
              }
            >
              <span
                className={style.chatProfileSpan}
                style={{ textAlign: client_id == userId ? "right" : "left" }}
              >
                {client_id}
              </span>
              <h3 style={{ textAlign: client_id == userId ? "right" : "left" }}>
                {content}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => sendData(e)}>
            <input
              className={style.chat_input}
              type="text"
              value={currentMsg}
              placeholder="Type your message.."
              onChange={(e) => setCurrentMsg(e.target.value)}
            />
            <button className={style.chat_button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;