import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../Assets/CSS/HomePage.css'; // Create a CSS file for MenPage if needed
import Loader from './Loader'; // Import the Loader component
import sportsProducts from '../Components/productsList.json'; // Import your product data
import { useSelector,useDispatch} from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { addToCart } from '../redux/cartSlice';
import {ToastContainer,toast} from 'react-toastify';
const MenPage = () => {
  const [loading, setLoading] = useState(true);
  const menProducts = sportsProducts.filter((product) => product.category === "Kids");

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);
  const Email = useSelector(selectUser);
  const dispatch=useDispatch()
  const addTocart = (pid) => {
    const product = sportsProducts.find((p) => p.pid === pid);
    if (Email.email) {
      dispatch(addToCart(product)); // Dispatch addToCart with the product object
      toast.success('Added to cart');
    } else {
      toast.error('Login to add item to cart');
    }
  };
  return (
    <div className='container'>
      {loading ? (
        <Loader /> // Display the loader while loading is true
      ) : (
        <>
          <h1 className="mt-5 mb-4">Accessories and Toys</h1>

          {/* Grid of 3x4 Cards */}
          <Row>
            {menProducts.map((product, index) => (
              <Col md={3} key={index}>
                <Card className="products-card">
                  <Card.Img
                    variant="top"
                    src={product.productImage}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <button className="shopnow-btn" onClick={() => addTocart(product.pid)}>Shop now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
};

export default MenPage;
