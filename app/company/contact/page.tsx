"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatIcon from '@mui/icons-material/Chat';
import { Modal } from "react-responsive-modal";
import Home from "../../chat/page"
import './contact.css'
import PersonIcon from '@mui/icons-material/Person';
import SideNav from "../DashBoard/Sidenav"
import { log } from "console";
interface Chat {
    client_id: number;
    roomId: number;
}

interface User {
    id: number;
    fullName: string;
}

interface oneChat {
    roomId: number;
    content:string;
}
export default function Contact() {
    const [allChat, setAllChat] = useState<Chat[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [oneChat,setoneChat]=useState<oneChat[]>([])
    const companyId = localStorage.getItem("idcompany");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/chats/company/${companyId}`)
            .then(res => {
                setAllChat(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [companyId]);
console.log("chat",allChat)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersPromises = allChat.map(async (chat) => {
                    const userResponse = await axios.get(`http://localhost:3000/api/users/${chat.client_id}`);
                    return userResponse.data;
                });

                const users = await Promise.all(usersPromises);
                const uniqueUserNames = Array.from(new Set(users.map(user => user.fullName)));
                const uniqueUsers = uniqueUserNames.map(name => users.find(user => user.fullName === name)!);

                setAllUsers(uniqueUsers);
            } catch (error) {
                console.error(error);
            }
        };

        if (allChat.length > 0) {
            fetchUsers();
        }
    }, [allChat]);
console.log("aaaaa",selectedUserId);

    const handleUserClick = (userId: number) => {
        axios.get(`http://localhost:3000/api/chats/user/${selectedUserId}/company/${companyId}`).then(res=>{
            setoneChat(res.data)
        }).catch(err=>console.error(err))
        setSelectedUserId(userId);
        setModalOpen(true);
    };

    const formattedDate = new Date("2024-01-21T19:50:18").toLocaleDateString();
    const formattedTime = new Date("2024-01-21T19:50:18").toLocaleTimeString();
    // const firstObject = oneChat[0]
    // const l=firstObject.roomId
    // console.log("onechat",l)
    console.log("onechat",oneChat[0]?oneChat[0].roomId:"")
    return (
        <div>
            <h1 className="title"> Chats <ChatIcon /> </h1>
            <SideNav/>
            {
                allUsers.map((user) => (
                    <div key={user.id}>
                        <button onClick={() => handleUserClick(user.id)}>
                        <h5 className="chats" style={{ borderBottom: '1px solid #ccc', width: '200%', paddingBottom: '5px' }}>
   <PersonIcon />
    {user.fullName}
    <p>Recieved at: {formattedDate} {formattedTime}</p>


</h5>
                     

                        </button>
                    </div>
                ))
            }
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
                {selectedUserId && <Home user={selectedUserId}  idRoom={oneChat[0]?oneChat[0].roomId:""}/>}
            </Modal>
        </div>
    );
}
