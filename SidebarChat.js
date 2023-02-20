import React,{useState} from 'react'
import './SidebarChat.css'
import Chat from './Chat';

import { contactList } from './Data';
import { Avatar,IconButton } from '@mui/material';


const ContactComponent =(props)=>{
  const {userData} =props;
  return (  <div className='sidebarChat '>
  <Avatar src={userData.url} sx={{ width: 56, height: 56 }}
  />
  <div className='sidebarChat_info'>
    <h2>{userData.name}
    <p>last message...</p></h2>
  </div>
</div>
)

  
}

function SidebarChat() {

  const [ima1,setimage]=useState("");

 const name1=ima1.name
 

  return (
    <div className='new'>
      {contactList.map((userData)=>(<IconButton onClick={()=>{setimage(userData);
      
      return (<><Chat id={userData.id} name1={userData.name}/></>)}}><ContactComponent userData={userData}/></IconButton>))}
    </div>
  );
}

export default SidebarChat
