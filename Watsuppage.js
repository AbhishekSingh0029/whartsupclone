import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Watsuppage.css'
function Watsuppage() {
  return (
    <div className='app_body'>
    <Sidebar />
    <Chat />
    </div>
  )
}

export default Watsuppage
