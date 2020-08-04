import React from 'react'
import {Card, CardGroup} from 'react-bootstrap';

const SingleProduct = ({match,product}) => {
    const produit=product.find(el=>el.id==match.params.id)
    console.log(match.params.id)
    return ( <Card className="stylecard">
        <Card.Img variant="top"  src={produit.img} />
        <Card.Body>
          <Card.Title>{produit.title}</Card.Title>
          <Card.Text>
          {produit.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <big>Prix : {produit.prix}</big>
        </Card.Footer>
      </Card>
      );
}
 
export default SingleProduct;
