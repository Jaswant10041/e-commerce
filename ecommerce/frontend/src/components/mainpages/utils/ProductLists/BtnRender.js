import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom';

export const BtnRender = ({product}) => {
  const state=useContext(GlobalState);
  const [isAdmin]=state.UserApi.isAdmin;
  // const[isLogged,setIsLogged]=state.UserApi.isLogged;
  const addCart=state.UserApi.addCart;
  // console.log(product)

  return (
    <div>
        <div className="row_btn">
        {
        isAdmin ? 
        <>
            <Link id="btn_buy" to={`delete/${product._id}`}>
            Delete
            </Link>
            <Link id="btn_view" to={`detail/${product._id}`}>
            Edit
            </Link>
        </>
        :
        <>
            <Link id="btn_buy" to={`#!`} onClick={()=> addCart(product)}>
            Buy
            </Link>
            <Link id="btn_view" to={`detail/${product._id}`}>
            View
            </Link>
        </>

        }
        
        </div>
    </div>
  )
}
