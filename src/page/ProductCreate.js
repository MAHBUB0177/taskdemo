import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import axios from "axios";
import Cookies from 'js-cookie'
import {domain} from '../env'
// import Cookies from 'universal-cookie';
 



function ProductCreate() {

  // const cookies = new Cookies();
 
  // cookies.set('myCat', 'Pacman', { path: '/' });
  // console.log(Cookies.get("csrftoken")); // Pacman

const[product,setProducts]=useState()
const[unit,setUnit]=useState()
const[subcategory,setSubcategory]=useState()
const[category,setCategory]=useState()

// value
const[prodCategory,setProdCategory]=useState()
const[subcategories,setSubcategories]=useState()
const[produnit,setProdUnit]=useState()
const[limit,setLimit]=useState()
const[item,setItem]=useState()
const[id,setId]=useState()

console.log(prodCategory)
console.log(subcategories)
console.log(produnit)
console.log(limit)
console.log(item)

const submitdata =async (e)=>{
  e.preventDefault()
  await axios({
    url:`${domain}/api/createproducts/`,
    method: "POST",
    headers:{"X-CSRFToken": Cookies.get("csrftoken")},
  
    data: {
      id:id,
      unit: unit,
      product_name:item,
      category: category,
      subcategory: subcategory,
      limit:limit,
      

    }
  })
    .then((response) => {
      console.log(response.data,'categpory data');
      setProducts(response.data);
    })
    .catch((error) => {
      console.log("CategoryProduct", error);
    });
}




useEffect(() => {
  const getAutomobile = async () => {
    await axios({
      url:`${domain}/api/products/`,
      method: "GET",
    })
      .then((response) => {
        console.log(response.data,'categpory data');
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("CategoryProduct", error);
      });
  };
  getAutomobile();
}, []);


useEffect(() => {
  const getunit = async () => {
    await axios({
      url:`${domain}/api/product-unit/`,
      method: "GET",
    })
      .then((response) => {
        setUnit(response.data)
      
      
      })
      .catch((error) => {
        console.log("CategoryProduct", error);
      });
  };
  getunit();
}, []);


useEffect(() => {
  const getsub_category = async () => {
    await axios({
      url:`${domain}/api/product-subcategories/`,
      method: "GET",
    })
      .then((response) => {
        setSubcategory(response.data)
      
      
      })
      .catch((error) => {
        console.log("CategoryProduct", error);
      });
  };
  getsub_category();
}, []);

useEffect(() => {
  const get_category = async () => {
    await axios({
      url:`${domain}/api/categoris/`,
      method: "GET",
    })
      .then((response) => {
        setCategory(response.data)
      
      
      })
      .catch((error) => {
        console.log("CategoryProduct", error);
      });
  };
  get_category();
}, []);


const handleChange = event => {
  console.log(event.target.value);
  setProdCategory(event.target.value);
};



  return (
    <div className='container'>
<div className='row '>
<h2 style={{justifyContent:'center',textAlign:'center'}}> product create</h2> 
</div>

<div className=' row card card-body box-shadow'  >
<form className='frm' >
<div className="form-group col-md-6" >
    <label for="exampleFormControlInput1">product_id</label>
    <input type="text" class="form-control" onChange={(e)=>setId(e.target.value)} value={id}/>
  </div>

  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect1">Item Type</label>
    <select
      className="form-control"  value={prodCategory} onChange={handleChange}>
      <option defaultValue>--------- </option>
      {category?.map((item, index) => (
        <option key={index} value={item.categories_id}>
          {item.categories_name}
        </option>
      ))}
    </select>

  </div>

  <div className="form-group col-md-6" >
    <label for="exampleFormControlInput1">Product Name</label>
    <input type="email" class="form-control"onChange={(e)=>setItem(e.target.value)} value={item}/>
  </div>

  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect1">sub-category</label>
    <select
      className="form-control" onChange={(e)=>setSubcategories(e.target.value)} value={subcategories}>
      <option defaultValue>--------- </option>
      {subcategory?.map((item, index) => (
        <option key={index} value={item.subcategories_id}>
          {item.subcategories_name}
        </option>
      ))}
    </select>
  </div>

  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect1">Product-Unit</label>
    <select
      className="form-control" onChange={(e)=>setProdUnit(e.target.value)} value={produnit}>
      <option defaultValue>---------- </option>
      {unit?.map((item, index) => (
        <option key={index} value={item.unit_id}>
          {item.unit_name}
        </option>
      ))}
    </select>
    
  </div>

  <div className="form-group col-md-6" >
    <label for="exampleFormControlInput1">Stock Limit</label>
    <input type="text" class="form-control" onChange={(e)=>setLimit(e.target.value)} value={limit}/>
  </div>
  <br/>

  <div className='col-md-6' >
  <button type="button" class="btn btn-success" onClick={submitdata}>Save</button>
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