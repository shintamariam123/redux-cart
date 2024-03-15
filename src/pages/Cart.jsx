import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart() {
  const navigate = useNavigate()
  const cartItems = useSelector(state =>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(cartItems?.length>0){
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }
  },[cartItems])
  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
     dispatch(decQuantity(product.id))
    }else{
    dispatch(removeCartItem(product.id))
    }
  }
  const handleCheckout = ()=>{
    dispatch(emptyCart())
    toast.success("Order Placed Successfully....Thank you for purchasing with us")
    setTimeout(()=>{
      navigate("/")
    },2000)
  }
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '100px' }}>

        {cartItems?.length>0?
          <div className='pt-5'>
          <h1>Cart Summary</h1>
          <div className='row mt-5 '>
            <div className='col-lg-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quanity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems?.map((product,index)=>(
                      <tr>
                      <td>{index+1}</td>
                      <td>{product.title.slice(0,16)}...</td>
                      <td><img style={{ width: '60px', height: '60px' }} src={product.thumbnail} alt="" /></td>
                      <td>
                        <div className='d-flex'>
                          <button onClick={()=>handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
                          <input value={product.quantity} style={{ width: '50px' }} className='form-control' type="text" name="" id="" placeholder='0' readOnly />
                          <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bolder'>+</button>
                        </div>
                      </td>
                      <td>$ {product.totalPrice}</td>
                      <td>
                        <button onClick={()=>dispatch(removeCartItem(product.id))} className='btn'><i className='fa-solid fa-trash text-primary'></i></button>
                      </td>
                    </tr>
                    ))
                   
                  }
                </tbody>
              </table>

            </div>
            <div className='col-lg-4'>
              <div style={{ width: '350px' }} className='shadow border rounded p-4'>
                <h5 >Total Items: <b style={{ color: 'red' }}>{cartItems?.length}</b></h5>
                <h5>Total Amount: <b style={{ color: 'red' }}>{cartTotal}</b></h5>
                <div className='d-grid mt-4'>
                  <button onClick={handleCheckout} className='btn rounded bg-success'>Check Out</button>
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mb-5'>
              <button onClick={()=>dispatch(emptyCart())} style={{ backgroundColor: 'red', color: 'white' }} className='btn rounded'>EMPTY CART</button>
              <button className='btn rounded bg-danger ms-4 '> <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>Shop More</Link> </button>

            </div>
          </div>
        </div>
        :
        <div style={{ height: '70vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img style={{ width: '400px' }} className='img-fluid' src="https://www.essent.com/SiteData/SiteID34/Images/B2B-Ecommerce/B2B%20Ecommerce%202%20Cart%20Y.png" alt="" srcset="" />
          <h3 className='mt-3 fw-bolder'>Your Cart is Empty!!!</h3>
        </div>
        }

      </div>
   <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Cart