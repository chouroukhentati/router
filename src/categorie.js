import React from 'react';
import './menu.css' ;
import { Link, Route } from 'react-router-dom';
function Categorie({match})
{
     return (
       <>
       <h3>categorie</h3>  
       <Link to={`${match.url}/Shoes`}>Shoes</Link>
       <Link to={`${match.url}/Boots`}>Boots</Link>
       <Link to={`${match.url}/Footwear`}>Footwear</Link>
       <Route path={`${match.path}/Shoes`} render={()=><div>Shoes</div>}/>
       <Route path={`${match.path}/Boots`} render={()=><div>Boots</div>}/>
       <Route path={`${match.path}/Footwear`} render={()=><div>Footwear</div>}/>
       
       
       

       </>
       )

}
export default Categorie ;