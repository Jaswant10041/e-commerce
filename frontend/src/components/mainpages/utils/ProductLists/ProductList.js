// import React from 'react'
// import {Link} from 'react-router-dom'
// import './style.css'
// export const ProductList = ({product}) => {
//     console.log(product);
//     console.log("hi");
//   return (
//     <div className='product_card'>
//         <img src={product.images.url} alt='' width={130} height={150}/>
//         <div className='product_box'>
//             <h2 title={product.product_title}>{product.product_title}</h2>
//             <span>{product.price}</span>
//             <p>{product.description}</p>
//         </div>
//         <div className='row_btn'>
//           <Link id='#btn_buy' to={`#!`}>
//               Buy
//           </Link>
//           <Link id='#btn_view' to={`detail/${product._id}`}>
//             View
//           </Link>
//         </div>
//     </div>
//   )
// }
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { GlobalState } from '../../../../GlobalState';
import { BtnRender } from './BtnRender';

export const ProductList = ({ product,isAdmin }) => {
  // console.log(product);
  const [flag,setFlag]=useState(false);
  const deletefuntion=(e)=>{
    // console.log(e);
    
    if(e.target.checked){
      setFlag(true);
    }
  }
  return (
    <div className="product_list">
      {/* {
        isAdmin && <input type='checkbox' onChange={deletefuntion}/>
      } */}
        <div className="product_card" key={product._id}>

          <img src={product.images.url} alt={product.product_title} />

          <div className="product_box">
            <h2 title={product.product_title}>{product.product_title}</h2>
            <span>{product.price ? `${product.price}` : 'Price unavailable'}</span>
            <p>{product.description}</p>
          </div>
          <BtnRender product={product}/>
          
        </div>
      
    </div>
  )
}
