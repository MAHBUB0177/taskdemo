import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { domain } from '../env.js'
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'

function ProductList() {
const [product, setProduct] = useState()
    
const[prodCategory,setProdCategory]=useState()
const[subcategories,setSubcategories]=useState()
const[produnit,setProdUnit]=useState()
const[limit,setLimit]=useState()
const[item,setItem]=useState()
const[id,setId]=useState()
console.log(item,'=====')

   const handeldelete=(id)=>{
    const data=product.filter((item)=>item.product_id !== id)
    console.log(data)
    setProduct(data)
   }

   
   const handeledit=(id)=>{
    console.log(id,'product id')
    let item_data=product.filter((item)=>item.product_id === id)
    console.log(item_data,'data')
    setProdCategory(item_data[0]?.category_id?.categories_id)
    setSubcategories(item_data[0]?.sub_category_id?.subcategories_id)
    setProdUnit(item_data[0]?.unit_id?.unit_id)
    setLimit(item_data[0]?.stock_limit)
    setItem(item_data[0]?.product_name)
    setId(item_data[0]?.product_id)


   }

    useEffect(() => {
        const getAutomobile = async() => {
            await axios({
                    url: `${domain}/api/products/`,
                    method: "GET",
                })
                .then((response) => {
                    console.log(response.data, 'categpory data');
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.log("CategoryProduct", error);
                });
        };
        getAutomobile();
    }, []);



    const submitdata =async (e)=>{
      console.log('data test')
      // e.preventDefault()
      await axios({
        url:`${domain}/api/updateproducts/`,
        method: "POST",
        headers:{"X-CSRFToken": Cookies.get("csrftoken")},
      
        data: {
          id:id,
          unit: produnit,
          product_name:item,
          category: prodCategory,
          subcategory: subcategories,
          limit:limit,
          
    
        }
      })
        .then((response) => {
          console.log(response.data,'categpory data');
          Swal.fire({
            icon: 'success',
            text: 'Save Successfully!!',
            timer: 2500
            
          })
          window.location.reload();
        })
        .catch((error) => {
          console.log("CategoryProduct", error);
        });
    }

    return ( 
      <div className='container'>
        <table class="table table-striped">
        <thead class="thead-light">
      <tr>
      <th scope="col">Id</th>
      <th scope="col">Product</th>
      <th scope="col">Category</th>
      <th scope="col">Sub-Category</th>
      <th scope="col">unit</th>
      <th scope="col">Stock-Limit</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  
    {
      product?.map((item)=> (
<tr>
      <th scope="row">{item.product_id}</th>
      <td>{item.product_name}</td>
      <td>{item?.category_id?.categories_name}</td>
      <td>{item?.sub_category_id?.subcategories_name}</td>
      <td>{item?.unit_id?.unit_name}</td>
      <td>{item?.stock_limit}</td>
      <td><p><button type="button" class="btn btn-danger" onClick={()=>handeldelete(item.product_id)}>Delete</button>
      <button type="button" class="btn btn-primary" style={{marginLeft:'10px'}} onClick={()=>handeledit(item.product_id)} data-bs-toggle="modal" data-bs-target="#modalLoginForm" >Edit</button>
      </p></td>
          
    </tr>
      ))
    }
    
    
  </tbody>
</table>



<div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Product Edit</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         
      </div>
      <div class="modal-body mx-3">
        <Form>
        <div className="form-group " >
          <label for="exampleFormControlInput1">Item Type</label>
          <input type="text" class="form-control" value={prodCategory} onChange={(e)=>setProdCategory(e.target.value)}/>
        </div>

        <div className="form-group " >
          <label for="exampleFormControlInput1">Product Name</label>
          <input type="text" class="form-control" value={item} onChange={(e)=>setItem(e.target.value)}/>
        </div>


        <div className="form-group " >
          <label for="exampleFormControlInput1">sub-category</label>
          <input type="text" class="form-control" value={subcategories} onChange={(e)=>setSubcategories(e.target.value)} />
        </div>


        <div className="form-group " >
          <label for="exampleFormControlInput1">Product-Unit</label>
          <input type="text" class="form-control" value={produnit} onChange={(e)=>setProdUnit(e.target.value)}/>
        </div>


        <div className="form-group " >
          <label for="exampleFormControlInput1">Stock Limit</label>
          <input type="text" class="form-control" value={limit} onChange={(e)=>setLimit(e.target.value)}/>
        </div>
        </Form>

        

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-success" onClick={()=>submitdata()}>Submit</button>
      </div>
    </div>
  </div>
</div>

<div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
    Modal Login Form</a>
</div>
      </div>
    )
}

export default ProductList