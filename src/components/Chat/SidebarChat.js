import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import Avatar from '@mui/material/Avatar';


function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Plase enter here for chat");

        if(roomName){
            
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>Last Massage...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat" >
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
