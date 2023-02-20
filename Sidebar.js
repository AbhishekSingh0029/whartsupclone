import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import { Avatar ,IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import { SearchOutlined } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import SidebarChat from './SidebarChat';




function Sidebar() { 
   const [ima1,setimage]=useState("");


  return (
    <div className='sidebar'>
      <div className="sidebar_header">
      <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>
  <div className="sidebar_headerRight">
  <IconButton> <AutorenewOutlinedIcon /></IconButton>
   <IconButton><Chat /></IconButton>
  <IconButton> <MoreVertIcon /></IconButton>
    </div>
      </div>
      <div className="sidebar_search">
      <div className="sidebar_searchContainer"><SearchOutlined />
      <input placeholder='Search....' type="text"/></div>
      
     </div>
     <div className="sidebar_chat">
       <SidebarChat  />
       

     </div>

    
    </div>
  )
}

export default Sidebar
