import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from '@/components/shared/CardComponent';
import NavbarComponent from '@/components/shared/NavbarComponent';
import CustomerDetailModal from '@/components/modals/customerDetailModal';

const products = [
    {
        image: "/assets/headphone.jpeg",
        title: "Wireless Headphones",
        price: "2999",
        description: "Noise-cancelling over-ear headphones with 40-hour battery life."
    },
    {
        image: "/assets/headphone.jpeg",
        title: "Smartwatch Pro",
        price: "4999",
        description: "Track your fitness, heart rate, and notifications in style."
    },
    {
        image: "/assets/headphone.jpeg",
        title: "Mechanical Keyboard",
        price: "1999",
        description: "Tactile feedback, RGB lighting, and a sleek minimalist look."
    },
    {
        image: "/assets/headphone.jpeg",
        title: "Bluetooth Speaker",
        price: "1499",
        description: "Portable speaker with deep bass and 10-hour playtime."
    }
];

const ProductGrid = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        address: ''
    });
    const [selectedProduct, setSelectedProduct] = useState({ title: '', quantity: 1 }); // State for selected product

    const toggleModal = () => setModalVisible(!modalVisible);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBuyNow = (title: string, quantity: number) => {
        setSelectedProduct({ title, quantity }); // Set the selected product details
        toggleModal(); // Open the modal
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        toggleModal();
    };

    return (
        <>
            <NavbarComponent />
            <Container className="mt-5 pt-5">
                <Row className="g-4">
                    {products.map((product, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <CardComponent
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                handleBuyNow={(quantity) => handleBuyNow(product.title, quantity)} // Pass product title and quantity
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <CustomerDetailModal
                show={modalVisible}
                handleClose={toggleModal}
                formData={formData}
                handleChange={handleInputChange}
                selectedProduct={selectedProduct} // Pass selected product details to the modal
            />
        </>
    );
};

export default ProductGrid;