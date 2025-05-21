import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export type Props = {
  show: boolean;
  handleClose: () => void;
  formData: {
    name: string;
    phone: string;
    age: string;
    address: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  selectedProduct: {
    title: string;
    quantity: number;
  }; 
};

const CustomerDetailModal = ({ show, handleClose, formData, handleChange, selectedProduct }: Props) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      const templateParams = {
        name: formData.name,
        age: formData.age,
        mobile_number: formData.phone,
        address: formData.address,
        quantity: selectedProduct.quantity,
        product_name: selectedProduct.title,
      };
  
      emailjs
        .send(
          "service_ce02ok1", // Replace with your EmailJS service ID
          "template_nkv608y", // Replace with your EmailJS template ID
          templateParams,
          "rw06AFAFLP8ij1d99" // Replace with your EmailJS user ID (or public key)
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response.status, response.text);
            handleClose();
            window.location.href = "/"; 
          },
          (error) => {
            console.error("Failed to send email:", error);
          }
        );
    };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Customer Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Product: {selectedProduct.title}</h6> {/* Display product name */}
        <h6>Quantity: {selectedProduct.quantity}</h6> {/* Display quantity */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              min={15}
              max={99}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CustomerDetailModal;