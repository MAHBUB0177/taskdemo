import React, { useState,useEffect } from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import {domain} from '../env'

export const Authpage = () => {

    const [email, setEmail] = useState('');
    console.log(email)
    const [password, setPassword] = useState('');

    const loginnow = async () => {
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
          // let data=response.data;
          // if(data['token']){
          //     window.localStorage.setItem('token',data['token'])
          //     window.location.href='/'
          // }
          // else{
          //     Swal.fire({
          //         icon: 'error',
          //         title: 'Oops...',
          //         text: 'Something is missing!!!!',
          //         timer: 1500
          //       })
          // }
         
      }).catch(_ => {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Somthining is error!!',
              timer: 1500
              
            })
      })
  }


  return (
    <div className=' container prdcreate'>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control"  placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary" onClick={loginnow} >Submit</button>
</form>
    </div>
  )
}
