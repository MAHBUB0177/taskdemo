import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import axios from "axios";
import {domain} from '../env'
function ProductCreate() {
const[product,setProduct]=useState()

// useEffect(()=>{
//           const getbrands = async()=>{
//             await axios({
//               url:`${domain}/api/product-subcategories/`,
//               method:'GET',
//             }).then(response=>{
//                     setProduct(response.data)
//               console.log('BaradsName=====',response.data)
//             });
//           }
//           getbrands()
//         },[])


useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => console.log(response,'===='))
          
          }, []);










  return (
    <div className='container'>
<div className='row '>
<h2 style={{justifyContent:'center',textAlign:'center'}}> product create</h2> 
</div>

<div className=' row card card-body box-shadow'  >
<form className='frm' >
  <div className="form-group col-md-6" >
    <label for="exampleFormControlInput1">Item Type</label>
    <input type="email" class="form-control" />
  </div>

  <div className="form-group col-md-6" >
    <label for="exampleFormControlInput1">Product Name</label>
    <input type="email" class="form-control" />
  </div>

  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect1">sub-category</label>
    <select class="form-control">
  <option>Default select</option>
</select>
  </div>

  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect1">Product-Unit</label>
    <select class="form-control">
  <option>---------</option>
</select>
<br/>
  </div>
  <div className='col-md-6' >
<button type="button" class="btn btn-success" >Save</button>
<Link to='/list'>
<button type="button" class="btn btn-danger" style={{marginLeft:'10px'}}>Cancel</button>

</Link>
</div>
</form>
<br></br>
<br/>

          </div>
    </div>
  )
}

export default ProductCreate