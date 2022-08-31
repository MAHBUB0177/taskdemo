import React, { useState,useEffect } from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import {domain} from '../env'

export const Authpage = () => {
  let token = window.localStorage.getItem("token");
  token = JSON.parse(token)
   const getheader = {
      Authorization: `Bearer ${token}`,
  };
  console.log(getheader, 'getheader data')

    const [email, setEmail] = useState('');
    console.log(email)
    const [password, setPassword] = useState('');

    const loginnow = async (event) => {
      event.preventDefault()
      await axios({
          url: `${domain}/api/gettoken/`,
          method: 'POST',
          headers:{"X-CSRFToken": Cookies.get("csrftoken")},
          data: {
              username: email,
              password: password,

          }
      }).then(response => {
          console.log('token==',response)
          let data=response.data;
          if(data){
              window.localStorage.setItem('token',JSON.stringify(data.access))
              window.location.href='/list'
          }
          else{
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something is missing!!!!',
                  timer: 2000
                })
          }
         
      }).catch(_ => {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Somthining is error!!',
              timer: 2000
              
            })
      })
  }


  return (
    <div className=' container prdcreate'>
      <div className='card card-body mt-120px' style={{marginTop:'90px'}}>
        <h2 style={{textAlign:'center',color:'tomato'}}> USER LOGIN</h2>
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control"  placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary" onClick={loginnow} >Submit</button>
</form>
      </div>

    </div>
  )
}
