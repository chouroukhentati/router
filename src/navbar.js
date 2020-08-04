import React from 'react';
import './menu.css' ;
import { Link } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function home()
{
     return (
      <>
    
       <Navbar className="stylenav" bg="dark" variant="light">
    <Nav className="mr-auto">
      <Link to='/home'>Home</Link>
      <Link to='/product'>Product</Link>
      <Link to='/categorie'>Categorie</Link>
      <Link to='/login'>Admin area</Link>
    </Nav>
    
   
  </Navbar>
      
     </>

       )

}
export default home ;