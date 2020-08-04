import React from 'react';
import logo from './logo.svg';
import './App.css';
import navbar from './navbar';
import home from './home';
import Categorie from './categorie';
import Product from './product';
import Login from './login';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App({match}) {
  return (
    <Router>
      <Route path='/' component={navbar}/>
      <Route exact path='/home' component={home}/>
      <Route path='/categorie' component={Categorie}/>
      <Route path='/product'component={Product}/>
      <Route path='/login' component={Login}/>
      <Route path='/admin' render={()=><div>Welcome Admin</div>}/>
      
    
       
    </Router>
  );
}

export default App;
