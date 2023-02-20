import React,{useState,useEffect} from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase';
import Watsuppage from './Watsuppage';
import  './Signin.css';
function Signin() {
    const [value,setValue] =useState('');
    const handleClick=()=>{
        signInWithPopup(auth,provider)
        .then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    },[])
  return (
    <div className='watsup'>
      {value?<Watsuppage/>:<button onClick={handleClick}>Sign with google</button>}
    </div>
  )
}

export default Signin
