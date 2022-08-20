import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { domain } from '../env.js'

function ProductList() {
    const [product, setProduct] = useState()
    console.log(product,'////')

   const handeldelete=(id)=>{
    console.log(id,'====')
    const data=product.filter((item)=>item.product_id !== id)
    console.log(data)
    setProduct(data)
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
      <td><p><button type="button" class="btn btn-danger" onClick={()=>handeldelete(item.product_id)}>Delete</button>
<button type="button" class="btn btn-primary" style={{marginLeft:'10px'}}>Edit</button>
</p></td>
     
    </tr>
      ))
    }
    
    
  </tbody>
</table>
      </div>
    )
}

export default ProductList