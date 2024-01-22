"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Chat {
    client_id: number;
    roomId: number;
}

interface User {
    id: number;
    fullName: string;
    
}

export default function Contact() {
    const [allChat, setAllChat] = useState<Chat[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);

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

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersPromises = allChat.map(async (chat) => {
                    const userResponse = await axios.get(`http://localhost:3000/api/users/${chat.client_id}`);
                    return userResponse.data;
                });

                const users = await Promise.all(usersPromises);
                setAllUsers(users);
            } catch (error) {
                console.error(error);
            }
        };

        if (allChat.length > 0) {
            fetchUsers();
        }
    }, [allChat]);

    return (
        <div>
            <h1>Contact Component</h1>
           <h3>all the customers who contacted you</h3>
           {
              allUsers.map((user) => {
                return (
                    <div key={user.id}>
                        <h5>{user.fullName}</h5>
                    </div>
                )
            })
           }
        </div>
    );
}
