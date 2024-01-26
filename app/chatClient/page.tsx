"use client"
import React, { useEffect, useState } from "react";
import style from"./chat.module.css"
import axios from "axios";
interface IMsgDataTypes {
  roomId:  number;
  company_idcompany:  number;
  client_id:  number;
  content: String;
}
interface userDataTypes {
  fullName:string;
  image_user:string;
}
interface companyDataTypes{
  companyName:string;
  ownerName:string;
}


const ChatPage = ({ socket, userId, roomId,companyId }: any) => {
  console.log(socket);
  
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);
  const [user,setUser]=useState<userDataTypes[]>([]);
  const [company, setCompany] = useState<companyDataTypes[]>([]);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        roomId,
        company_idcompany:companyId,
        client_id: userId ,
        content: currentMsg,
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };
console.log("roomId", roomId, "companyId", companyId, "clientId", userId, "content",currentMsg);

  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);
console.log(chat);

useEffect(() => {
  axios.get(`http://localhost:3000/api/users/${userId}`)
    .then(e=>{
       setUser(e.data)
    }).catch(error=>console.error(error))
  },[userId])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/company/getOne/${companyId}`)
      .then(e=>{
         setCompany(e.data)
      }).catch(error=>console.error(error))
    },[userId])
  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name: <b>{user.fullName || company.companyName}</b>
          </p>
        </div>
        <div>
          {chat.map(({ roomId, client_id, content  }, key) => (
            <div
              key={key}
              className={
                client_id === userId
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