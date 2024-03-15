import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer' style={{backgroundColor:'#4267B2',paddingTop:'20px'}}>
    
    <div style={{height:'300px'}} className='container mt-5 w-100'>
        <div className='footer-content d-flex justify-content-between '>
            <div style={{width:'400px'}} className="media">
                <h5 className='d-flex'><i style={{height:'50px'}} className="fa-solid fa-truck  me-3"></i>E Cart</h5>
                <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Luminar team with the help of our <br /> contributors.</p>
                <p>Code licensed Luminar,docs CC BY 3.0 <br /><br />Currently v1.0.0.</p>
            </div>
            <div className="links d-flex flex-column">
                <h5 style={{height:'50px'}}>links</h5>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
                <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist </Link>
            </div>
            <div className="guides d-flex flex-column">
                <h5 style={{height:'50px'}}>Guides</h5>
                <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
                <a href="https://reactrouter.com/en/main" target='-blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
                <a href="https://react-bootstrap.github.io/" target='-blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
                <h5 style={{height:'50px'}}>Contact Us</h5>
               <div className='d-flex'>
                <input type="text" className='form-control me-1' placeholder='Email Id Please'/>
                <button className='btn ' style={{backgroundColor:'red'}}><i className='fa-solid fa-arrow-right'></i></button>
               </div>
               <div className='icon d-flex justify-content-between mt-3 '>
               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-twitter fa-1x'></i></a>
               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-instagram fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-facebook fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-linkedin fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-github fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-phone fa-1x'></i></a>

                </div>
            </div>
        </div>
        <p style={{marginBottom:'20px'}} className="text-center ">Copyright &copy; 2023 E Cart. Built with React.</p>

        </div>
    
    </div>
  )
}

export default Footer