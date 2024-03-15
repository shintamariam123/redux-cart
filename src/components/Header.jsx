import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../REDUX/Slices/productSlice';
function Header({insideHome}) {
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length 
  const dispatch = useDispatch()
  return (
    <>
      <Navbar style={{ backgroundColor: '#4267B2' }} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='ms-2'> <i className="fa-solid fa-truck"></i> E Cart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              { insideHome && <Nav.Link >
                <input onChange={(e)=>dispatch(searchProducts(e.target.value.toLowerCase()))} className='form-control me-5' style={{ width: '400px', paddingLeft: '10px', fontSize: '18px' }} type="text" name="" id="" placeholder='Search Products Here!!!' />
              </Nav.Link>}

              <Nav.Link className='me-5'>
                <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }} className='ms-2'>
                  <i style={{ color: 'red' }} className="fa-solid fa-heart me-2"></i>WISHLIST  <Badge className='ms-2' bg="secondary">{wishlistCount}</Badge></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }} className='ms-2'>
                  <i style={{ color: 'red' }} className="fa-solid fa-cart-shopping me-2"></i>CART  <Badge className='ms-2' bg="secondary">{cartCount}</Badge></Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




    </>
  )
}

export default Header