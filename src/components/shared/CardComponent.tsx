import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for plus and minus


export type Props = {
    image: any;
    title: string;
    price: string;
    description: string;
    handleBuyNow: (quantity: number) => void; // Pass quantity to the handler
};

const CardComponent = ({ image, title, price, description, handleBuyNow }: Props) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increment quantity
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)); // Decrement quantity, ensuring it doesn't go below 1
  };  

  return (
    <Card style={{ width: '18rem' }} className="shadow-sm rounded-4">
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
          {description}
        </Card.Text>
        <h5 className="text-primary">₹{price}</h5>
        <Form.Group className="mt-2">
          <Form.Label>Quantity</Form.Label>
          <div className="d-flex align-items-center">
            <Button variant="outline-secondary" onClick={handleDecrement} className="me-2">
              <FaMinus />
            </Button>
            <Form.Control
              type="text"
              value={quantity}
              readOnly
              className="text-center"
              style={{ width: '60px' }}
            />
            <Button variant="outline-secondary" onClick={handleIncrement} className="ms-2">
              <FaPlus />
            </Button>
          </div>
        </Form.Group>
        <Button
          variant="primary"
          className="mt-2 w-100"
          onClick={() => handleBuyNow(quantity)} // Pass quantity to the handler
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;