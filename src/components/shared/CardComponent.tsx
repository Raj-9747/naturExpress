import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

export type Props = {
  image: any;
  title: string;
  price: string;
  description: string;
  salesPrice: string;
  handleBuyNow: (quantity: number) => void;
};

const CardComponent = ({
  image,
  title,
  price,
  description,
  salesPrice,
  handleBuyNow,
}: Props) => {
  const [quantity, setQuantity] = useState(1);
  // const [showQuantityControls, setShowQuantityControls] = useState(false);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  // const handleBuyNowClick = () => {
  //   setShowQuantityControls(true);
  // };

  return (
    <Card style={{ width: "18rem" }} className="shadow-sm rounded-4">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {description}
        </Card.Text>
        {/* <label htmlFor=""></label> */}
        {/* <h5 style={{ color: "#2b3783" }}>₹{price}</h5> */}
        <div>
          <h6
            className="text-muted"
            style={{
              textDecoration: "line-through",
              fontSize: "0.9rem",
              color: "#ff6f61", // Highlight MRP with a distinct color
            }}
            title="Original Price" // Tooltip for better user experience
          >
            MRP: ₹{price}
          </h6>
          <h5
            style={{
              color: "#2b3783",
              margin: 0,
              fontWeight: "bold", // Make the sales price more prominent
            }}
            title="Discounted Price" // Tooltip for better user experience
          >
            Sales Price: ₹{salesPrice}
          </h5>
        </div>

        <Form.Group className="mt-2">
          <div
            className="d-flex align-items-center justify-content-between mt-2"
            style={{
              border: "1px solid #2b3783",
              borderRadius: "5px",
            }}
          >
            <button className="quantity-button" onClick={handleDecrement}>
              <IoRemoveSharp size={15} />
            </button>
            <Form.Control
              type="text"
              value={quantity}
              readOnly
              className="text-center mx-2 border-0"
              style={{ width: "60px" }}
            />
            <button className="quantity-button" onClick={handleIncrement}>
              <IoAddSharp size={15} />
            </button>
          </div>
        </Form.Group>
        <Form.Group>
          <div className="mt-2">
            <button
              className="w-100 general-button"
              onClick={() => handleBuyNow(quantity)}
            >
              Buy Now
            </button>
          </div>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
