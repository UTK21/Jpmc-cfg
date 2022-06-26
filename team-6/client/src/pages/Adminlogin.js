import React from 'react'
import { useState } from 'react';

const Adminlogin = () => {

    const [uname,setUname] = useState(""); 
    const [password,setPassword] = useState("");
  
  
    function handleSubmit(e){
      e.preventDefault();
      console.log(e.target.uname);
      console.log(e.target.password);
    }


  return (
    <div class="box">
    <h1>Admin Login</h1>
    <input type="text" placeholder="username" name={uname} onChange={function(e){setUname(e.target.value)}}/>
    <input type="password" placeholder="password" name={password} onChange={function(e){setPassword(e.target.value)}}/>
    <button>Submit</button>
  </div>
  )
}

export default Adminlogin