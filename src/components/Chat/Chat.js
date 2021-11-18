import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Chat.css"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {

    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 5000))
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed =>> ', input);
    }

    return (
        <div className="chat" >
            
            <div className="chat_header" >
                <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at....</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>    
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && 
                "chat_reciever"}`}>
                    <span className="chat_name">
                        Pasindu
                    </span>
                    Hey Guys
                    <span className="chat_timestamp">
                        3:52pm
                    </span>
                </p>   
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text"
                    placeholder="Type a message"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat
