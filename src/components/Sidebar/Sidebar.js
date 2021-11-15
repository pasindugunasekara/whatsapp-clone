import React from 'react';
import './Sidebar.css';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from '../Chat/SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            <IconButton>
                <Avatar/>
            </IconButton>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>    
                    </IconButton>     
                </div>
            </div>

            <div className="sidebar_search">
                <div 
                className="sidebar_searchContainer">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <input placeholder="Search Here" type="text" />
                </div>
            </div>

            <div className="sidebar_chat">
                <SidebarChat addNewChat />
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>

        </div>
    )
}

export default Sidebar
