import React,{useState,useEffect} from 'react'
import './Chat.css';
import { Avatar,IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { AttachFile } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { InsertEmoticon } from '@mui/icons-material';
import { Mic } from '@mui/icons-material';
import EmojiPicker from 'emoji-picker-react';

function Chat() {
    const[input,setInput]= useState([]);
    const [input1,setInput1] =useState("");
    const sendMessage =(e)=>{
     setInput([...input,input1])
     setInput1("");
    }
    const [openemoji,setemoji] =useState(false);
   
  return  (
    <div className='chat'>
      <div className="chat_header">
      <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/> <div className="chat_headerInfo">
     aaa
    <p>last seen....</p>
</div>
<div className="chat_headerRight">
  <IconButton><SearchOutlined/></IconButton>
  <IconButton><AttachFile /></IconButton>
  <IconButton><MoreVert /></IconButton>
</div>
</div>

       <div className="chat_body">
        {input.map((value)=>{ return(<p className={`chat_message ${true && "chat_reciever"} `}>
          <span className='chat_name'>Abhishek</span>
        {value}
        <span className='chat_timestamp'>3:00pm</span>
        </p>)})}
         {openemoji && <EmojiPicker/> }
       </div>
        <div className="chat_footer">
        
           <InsertEmoticon onClick ></InsertEmoticon>
           <form>
<input type="text" value={input1} onChange={(e)=> setInput1(e.target.value)} placeholder='Type a message' />
<button type='submit' onClick={sendMessage}>send</button>
           </form>
           <Mic/>
        </div>
    </div>
  )
}

export default Chat
