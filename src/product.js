import React from 'react';
import './menu.css' ;
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import {Card, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './SingleProduct';
function Product(props)
{
  const products =[
    {id:1,
      title:"New Balance : Made in USA 1300",
      img:"https://nb.scene7.com/is/image/NB/m1300lv_nb_07_i?$pdpflexf2$&fmt=webp",
      prix:"Prix : 200 $",
      description:"La silhouette classique de la Made USA 1300 New Balance x Levi's reçoit un relooking iconique dans cette version de notre collaboration avec Levi's.",

    },
    {id:2,
      title:"Lacoste",
      img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/fr/dwdcb95638/39CMA0048_082_01.jpg?imwidth=656&impolicy=product",
      prix:"Prix : 135,00 €",
      description:"La construction traditionnelle de la semelle concave L.12.12 des tennis Courtline fait référence au riche héritage tennistique de Lacoste, tandis que des éléments haut de gamme ajoutent une finition moderne à cette paire.",

    },
    {id:3,
      title:"Asics : The METARACER™",
      img:"https://images.asics.com/is/image/asics/1011B075_700_SR_RT?$zoom$",
      prix:"Prix : 200 $",
      description:"The METARACER™ Tokyo shoe is made for runners who want the most out of their fast-paced training and racing.",


    }
  ]

  console.log(props.match)
     return (<>
    
       <h3>product</h3>
    
       <div className="styletitle">

       {products.map(el=><div><Link to={`${props.match.url}/${el.id}`}>{el.title}</Link></div>)} 
       </div> 
       
       <Route path={`${props.match.path}/:id`} render={(props)=><SingleProduct product={products} {...props}/>}/>
      
       {
  
  }
       </>)

}
export default Product ;