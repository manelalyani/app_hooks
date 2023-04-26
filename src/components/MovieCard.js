import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating'
const MovieCard =({film})=> {
    const{name, image , rating , date}=film;
  return (
    <Card style={{ width: '18rem' ,margin:'10px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Rating readonly initialValue={rating} />
        <Card.Text>{date}</Card.Text>
        <Button variant="primary" style={{background:'violet',margin:'20px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard
