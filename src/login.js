import React, {Component} from 'react';
import './menu.css' ;
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login()
{
 
//  logad = () => 
//  {
//    console.log('welcome Admin')
//  }
 
  return  ( 
   <>    
       <h3>Admin area</h3> 
        <div className='log'> 
            <span> You must log in to view the page at /admin</span>
            <br/>
           <Link to="/admin"> <Button variant="danger" >Log in</Button></Link>
        </div>
</>

       )

}
export default Login ;